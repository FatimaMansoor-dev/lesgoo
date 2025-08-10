import { RESET_PASSWORD } from 'src/graphql/mutations';
import client from 'src/lib/apollo-client';

interface ForgotPasswordData {
  email: string;
}

interface ForgotPasswordResponse {
  link?: string;
  emailSent?: boolean;
  errors?: string;
}

export const forgotPassword = async (data: ForgotPasswordData): Promise<ForgotPasswordResponse> => {
  try {
    const response = await client.mutate({
      mutation: RESET_PASSWORD,
      variables: data,
    });
    return response.data.forgotPassword;
  } catch (error) {
    return { emailSent: false, errors: 'Reset password request failed' };
  }
};
