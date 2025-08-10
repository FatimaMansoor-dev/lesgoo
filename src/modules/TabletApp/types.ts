import React from 'react';

export interface Track {
  id?: string;
  title: string;
  category: string;
  image: string;
  className: string;
  audio?: string;
  video?: string;
  icon?: any;
  link?: string;
}

export interface Album {
  title: string;
  category: string;
  image: string;
  className: string;
  tracks: Track[];
}

export interface SidebarItem {
  title: string;
  icon?: React.ReactNode;
  link?: string;
  items?: (Track | { title: string; link: string; icon?: any })[];
}
