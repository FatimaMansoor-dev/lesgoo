import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation register($fullName: String!, $email: String!, $password: String!) {
    register(fullName: $fullName, email: $email, password: $password) {
      errors
      user {
        about
        authToken
        companies
        createdAt
        currentPeriodEnd
        currentPeriodStart
        customUrl
        email
        firstName
        fullName
        id
        imdbUrl
        instagramUrl
        lastName
        linkedinUrl
        phone
        planName
        planPrice
        primaryGoal
        profilePhoto
        subscriptionStatus
        supportEmail
        twitterUrl
        updatedAt
        websiteUrl
      }
    }
  }
`;

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      errors
      user {
        about
        authToken
        companies
        createdAt
        currentPeriodEnd
        currentPeriodStart
        customUrl
        email
        firstName
        fullName
        id
        imdbUrl
        instagramUrl
        lastName
        linkedinUrl
        phone
        planName
        planPrice
        primaryGoal
        profilePhoto
        subscriptionStatus
        supportEmail
        twitterUrl
        updatedAt
        websiteUrl
      }
    }
  }
`;

export const CREATE_STRIPE_SUBSCRIPTION = gql`
  mutation createStripeSubscription($planId: ID!) {
    createStripeSubscription(planId: $planId) {
      errors
      sessionUrl
    }
  }
`;

export const CANCEL_STRIPE_SUBSCRIPTION = gql`
  mutation cancelStripeSubscription {
    cancelStripeSubscription {
      errors
      success
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: ID
    $email: String
    $firstName: String
    $lastName: String
    $phone: String
    $password: String
    $primaryGoal: String
  ) {
    updateUser(
      id: $id
      email: $email
      firstName: $firstName
      lastName: $lastName
      phone: $phone
      password: $password
      primaryGoal: $primaryGoal
    ) {
      user {
        about
        authToken
        companies
        createdAt
        currentPeriodEnd
        currentPeriodStart
        customUrl
        email
        firstName
        fullName
        id
        imdbUrl
        instagramUrl
        lastName
        linkedinUrl
        phone
        planName
        planPrice
        primaryGoal
        profilePhoto
        subscriptionStatus
        supportEmail
        twitterUrl
        updatedAt
        websiteUrl
        stripeId
      }
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email) {
      link
      emailSent
    }
  }
`;
