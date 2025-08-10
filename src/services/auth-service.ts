import { REGISTER, RESET_PASSWORD, SIGN_IN } from 'src/graphql/mutations';
import client from 'src/lib/apollo-client';
import type { User } from 'src/shared/types/Store';

interface AuthResponse {
  errors?: string;
  user?: User;
}

interface RegisterData {
  fullName: string;
  email: string;
  password: string;
}

interface SignInData {
  email: string;
  password: string;
}

interface ForgotPasswordResponse {
  link?: string;
  emailSent?: boolean;
  errors?: string;
}

export const registerUser = async (data: RegisterData): Promise<AuthResponse> => {
  try {
    const response = await client.mutate({
      mutation: REGISTER,
      variables: data,
    });
    return response.data.register;
  } catch (error) {
    return { errors: 'Registration failed' };
  }
};

export const signInUser = async (data: SignInData): Promise<AuthResponse> => {
  try {
    const response = await client.mutate({
      mutation: SIGN_IN,
      variables: data,
    });
    return response.data.signIn;
  } catch (error) {
    return { errors: 'Login failed' };
  }
};

export const forgotPassword = async (email: string): Promise<ForgotPasswordResponse> => {
  try {
    const response = await client.mutate({
      mutation: RESET_PASSWORD,
      variables: { email },
    });
    return response.data.forgotPassword;
  } catch (error) {
    return { emailSent: false, errors: 'Reset password request failed' };
  }
};
