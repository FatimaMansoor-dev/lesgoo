import type { NextApiRequest, NextApiResponse } from 'next';

interface AddSubscriberRequest {
  email: string;
  firstName: string;
  lastName: string;
  listId: string;
}

interface ConstantContactResponse {
  detail?: string;
}

async function refreshAccessToken(): Promise<string | null> {
  const clientId = process.env.NEXT_PUBLIC_CONSTANT_CONTACT_API_KEY;
  const clientSecret = process.env.NEXT_PUBLIC_CONSTANT_CONTACT_SECRET;
  const refreshToken = process.env.NEXT_PUBLIC_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return null;
  }

  try {
    const response = await fetch('https://authz.constantcontact.com/oauth2/default/v1/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: clientId,
        client_secret: clientSecret,
      }),
    });

    const data: { error_description?: string; access_token?: string } = await response.json();
    if (!response.ok) throw new Error(data.error_description ?? 'Failed to refresh token');

    return data.access_token ?? null;
  } catch (error) {
    return null;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, firstName, lastName, listId } = req.body as AddSubscriberRequest;
  let accessToken = process.env.NEXT_PUBLIC_CONSTANT_CONTACT_ACCESS_TOKEN;
  // const listId = process.env.NEXT_PUBLIC_CONSTANT_CONTACT_LIST_ID;

  if (!accessToken || !listId) {
    return res.status(500).json({ message: 'Missing credentials' });
  }

  const addSubscriber = async (token: string) => {
    const response = await fetch('https://api.cc.email/v3/contacts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email_address: { address: email },
        first_name: firstName,
        last_name: lastName,
        list_memberships: [listId],
        create_source: 'Contact',
      }),
    });

    return response;
  };

  try {
    let response = await addSubscriber(accessToken);
    let data = (await response.json()) as ConstantContactResponse;

    if (response.status === 401) {
      const newAccessToken = await refreshAccessToken();

      if (!newAccessToken) {
        throw new Error('Token refresh failed');
      }

      accessToken = newAccessToken;
      response = await addSubscriber(accessToken);
      data = (await response.json()) as ConstantContactResponse;

      if (!response.ok) {
        if (Array.isArray(data)) {
          const conflictError = data.find(
            err =>
              err.error_key === 'contacts.api.conflict' &&
              err.error_message.includes('Email already exists')
          );

          if (conflictError) {
            throw new Error('This email is already subscribed.');
          }
        }

        throw new Error(data.detail ?? 'Subscription failed');
      }
    }

    if (!response.ok) {
      if (Array.isArray(data)) {
        const conflictError = data.find(
          err =>
            err.error_key === 'contacts.api.conflict' &&
            err.error_message.includes('Email already exists')
        );

        if (conflictError) {
          throw new Error('This email is already subscribed.');
        }
      }

      throw new Error(data.detail ?? 'Subscription failed');
    }

    res.status(200).json({ message: 'Subscription successful', data });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
