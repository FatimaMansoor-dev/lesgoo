import { CANCEL_STRIPE_SUBSCRIPTION, CREATE_STRIPE_SUBSCRIPTION } from 'src/graphql/mutations';
import client from 'src/lib/apollo-client';

interface StripeSubscriptionResponse {
  errors?: string;
  sessionUrl?: string;
}

interface CancelStripeSubscriptionResponse {
  errors?: string;
  success?: string;
}

export const createStripeSubscription = async (data: {
  planId: number;
}): Promise<StripeSubscriptionResponse> => {
  const authToken = localStorage.getItem('authToken');
  try {
    const response = await client.mutate({
      mutation: CREATE_STRIPE_SUBSCRIPTION,
      variables: data,
      context: {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
    });

    return response.data.createStripeSubscription;
  } catch (error) {
    return { errors: 'Subscription failed' };
  }
};

export const cancelStripeSubscription = async (): Promise<CancelStripeSubscriptionResponse> => {
  const authToken = localStorage.getItem('authToken');
  try {
    const response = await client.mutate({
      mutation: CANCEL_STRIPE_SUBSCRIPTION,
      context: {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
    });
    return response.data.cancelStripeSubscription;
  } catch (error) {
    return { errors: 'Cancellation failed' };
  }
};
