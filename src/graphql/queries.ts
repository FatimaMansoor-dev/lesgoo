import { gql } from '@apollo/client';

export const PROFILE_DETAILS = gql`
  query ProfileDetails {
    profileDetails {
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
`;

export const CHECK_AUTH = gql`
  query checkAuth($authToken: String!) {
    checkAuth(authToken: $authToken) {
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
        planInterval
        primaryGoal
        profilePhoto
        subscriptionStatus
        supportEmail
        twitterUrl
        stripeId
        updatedAt
        websiteUrl
      }
    }
  }
`;

export const MEDITATION_ALBUMS = gql`
  query meditationAlbums($section: String!, $groupBy: String, $page: Int, $limit: Int) {
    meditationAlbums(section: $section, groupBy: $groupBy, page: $page, limit: $limit) {
      collection {
        title
        slug
        coverPortrait
        coverSmallLandscape
      }
      metadata {
        totalPages
        totalCount
        currentPage
        limitValue
      }
    }
  }
`;

export const TRACKS = gql`
  query tracks($section: String!, $groupBy: String, $page: Int, $limit: Int) {
    tracks(section: $section, groupBy: $groupBy, page: $page, limit: $limit) {
      collection {
        title
        preview
        track
        artist
        released
        premium
        duration
        album {
          title
          slug
        }
      }
      metadata {
        totalPages
        totalCount
        currentPage
        limitValue
      }
    }
  }
`;

export const MUSICS = gql`
  query musics($section: String!, $page: Int, $limit: Int) {
    musics(section: $section, page: $page, limit: $limit) {
      collection {
        title
        preview
        track
        artist
        released
        premium
        duration
        album {
          title
          slug
        }
      }
      metadata {
        totalPages
        totalCount
        currentPage
        limitValue
      }
    }
  }
`;

export const RETRIEVE_PAYMENT_METHOD = gql`
  query retrievePaymentMethod {
    retrievePaymentMethod {
      brand
      checks
      country
      displayBrand
      expMonth
      expYear
      fingerprint
      funding
      generatedFrom
      last4
      networks
      regulatedStatus
      threeDSecureUsage
      wallet
    }
  }
`;

export const ALBUM = gql`
  query album($id: ID, $slug: String, $title: String) {
    album(id: $id, slug: $slug, title: $title) {
      title
      slug
      author
      narrator
      duration
      tracks {
        title
        preview
        track
        artist
        released
        premium
        duration
        album {
          title
          slug
        }
      }
      __typename
    }
  }
`;
