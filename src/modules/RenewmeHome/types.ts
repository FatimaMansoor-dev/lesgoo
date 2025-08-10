import type { CarouselApi } from 'src/components/ui/carousel';

export interface MeditationAlbum {
  __typename?: string;
  title: string;
  slug: string;
  coverPortrait: string;
  coverSmallLandscape: string;

  // NEW (optional) fields — add these so item.preview / item.premium / item.album are accepted
  premium?: boolean;
  preview?: string | null;
  url?: string;
  album?: {
    title?: string | null;
  };
  // Sometimes APIs return nested tracks
  tracks?: Track[];
}

export interface MeditationAlbumsResponse {
  collection: MeditationAlbum[];
  metadata?: {
    currentPage: number;
    totalPages: number;
    perPage: number;
    total: number;
  };
  errors?: string;
}

export interface HomeTitleProps {
  text: string;
  link: string;
  carouselApi?: CarouselApi | null;
}

export interface Track {
  id: string;
  title: string;
  url: string;
  premium: boolean;
  preview: string | null;
  album?: {
    title: string | null;
  };
}

export interface TrackItem {
  premium: boolean;
  preview: string | null;
  title: string | null;
  album: {
    title: string | null;
  };
  url?: string;
}
