import { MeditationAlbumsResponse } from 'src/modules/RenewmeHome/types';

import { ALBUM, MEDITATION_ALBUMS, MUSICS, TRACKS } from '../graphql/queries';
import client from '../lib/apollo-client';

export const fetchMeditationAlbums = async (
  section: string,
  groupBy: string,
  page: number,
  limit: number
): Promise<MeditationAlbumsResponse> => {
  const authToken = localStorage.getItem('authToken');

  if (!authToken) {
    console.error('No auth token found');
    return { collection: [], errors: 'Authentication required' };
  }

  try {
    const response = await client.query({
      query: MEDITATION_ALBUMS,
      variables: { section, groupBy, page, limit },
      context: {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
      fetchPolicy: 'network-only',
    });

    if (!response.data?.meditationAlbums?.collection) {
      console.error('Invalid response structure:', response);
      return { collection: [], errors: 'Invalid response structure' };
    }

    return response.data.meditationAlbums;
  } catch (error) {
    console.error('Error fetching meditation albums:', error);
    return { collection: [], errors: 'Failed to fetch meditation albums' };
  }
};

export const fetchAlbum = async (slug: string) => {
  const authToken = localStorage.getItem('authToken');

  try {
    const response = await client.query({
      query: ALBUM,
      variables: { slug },
      context: {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
      fetchPolicy: 'network-only',
    });

    return response.data.album;
  } catch (error) {
    return { errors: 'Failed to fetch album' };
  }
};

export const fetchTracks = async (
  section: string,
  groupBy: string,
  page: number,
  limit: number
) => {
  const authToken = localStorage.getItem('authToken');

  try {
    const response = await client.query({
      query: TRACKS,
      variables: { section, groupBy, page, limit },
      context: {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
      fetchPolicy: 'network-only',
    });

    return response.data.tracks;
  } catch (error) {
    return { errors: 'Failed to fetch tracks' };
  }
};

export const fetchMusics = async (section: string, page: number, limit: number) => {
  const authToken = localStorage.getItem('authToken');

  try {
    const response = await client.query({
      query: MUSICS,
      variables: { section, page, limit },
      context: {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
      fetchPolicy: 'network-only',
    });

    return response.data.musics;
  } catch (error) {
    return { errors: 'Failed to fetch musics' };
  }
};
