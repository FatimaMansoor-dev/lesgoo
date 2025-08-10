import axios from 'axios';

import { YOUTUBE_API_KEY } from 'shared/configs/App';

import { NewsVideo } from './types';

class NewsService {
  private youtubeId: string;

  private youtubeApiUrl: string;

  constructor() {
    this.youtubeApiUrl = 'https://www.googleapis.com/youtube/v3';
    this.youtubeId = 'UCb9-wTZtSge1vQaac5mSceA';
  }

  getChannel = async () => {
    try {
      const { data: channelData } = await axios({
        method: 'GET',
        url: `${this.youtubeApiUrl}/channels`,
        params: {
          part: 'snippet,contentDetails,statistics,brandingSettings',
          id: this.youtubeId,
          key: YOUTUBE_API_KEY,
        },
      });

      return { data: channelData, error: null };
    } catch (error) {
      return { data: [], error };
    }
  };

  list = async () => {
    try {
      const { data: channelData, error: channelError } = await this.getChannel();

      if (channelError || channelData.items.length === 0)
        return { data: channelData, error: channelError };

      const playlistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

      const { data: playlistData } = await axios({
        method: 'GET',
        url: `${this.youtubeApiUrl}/playlistItems`,
        params: {
          part: 'snippet',
          playlistId,
          key: YOUTUBE_API_KEY,
          maxResults: 50,
        },
      });

      const records: NewsVideo[] = playlistData.items
        .map((item: any) => ({
          url: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high.url,
          publishedAt: item.snippet.publishedAt,
        }))
        .sort(
          (a: NewsVideo, b: NewsVideo) =>
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );

      return {
        data: records,
        error: null,
      };
    } catch (error) {
      return { data: [], error };
    }
  };

  getFeaturedVideo = async () => {
    try {
      const { data: channelData, error: channelError } = await this.getChannel();

      if (channelError || channelData.items.length === 0)
        return { data: channelData, error: channelError };

      const featuredVideoId = channelData.items[0].brandingSettings.channel.unsubscribedTrailer;

      const { data: featuredVideoData } = await axios({
        method: 'GET',
        url: `${this.youtubeApiUrl}/videos`,
        params: {
          part: 'snippet',
          id: featuredVideoId,
          key: YOUTUBE_API_KEY,
        },
      });

      const records: NewsVideo[] = featuredVideoData.items.map((item: any) => ({
        url: `https://www.youtube.com/embed/${featuredVideoId}?autoplay=1&mute=1`,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url,
        publishedAt: item.snippet.publishedAt,
      }));

      return {
        data: records,
        error: null,
      };
    } catch (error) {
      return { data: [], error };
    }
  };
}

export const newsService = new NewsService();
