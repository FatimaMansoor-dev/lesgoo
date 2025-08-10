import { TermsDialog } from 'modules/Code/components/terms-dialog';
import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';

import { useRouter } from 'next/router';

import { cn } from 'src/lib/utils';

import AlbumDialog from './components/AlbumDialog';
import AudioPlayer from './components/AudioPlayer';
import AudioTracksCarousel from './components/AudioTracksCarousel';
import AudioTracksCarouselRow1 from './components/AudioTracksCarouselRow1';
import Sidebar from './components/Sidebar';
import VideoDialog from './components/VideoDialog';
import WelcomeBanner from './components/WelcomeBanner';
import WelcomePopup from './components/WelcomePopup';
import {
  audioTracksRow1,
  audioTracksRow1Soulscape,
  easyListeningTracks,
  inspirationsTracks,
  motivationTracks,
  skillfulLivingTracksAlbums,
  sleepEscapeTracks,
} from './constants/audio-tracks';
import { sidebarItems } from './constants/sidebar-items';
import { Album, Track } from './types';

interface TabletAppProps {
  isAfterExpireTime?: boolean;
}

const TabletApp: React.FC<TabletAppProps> = ({ isAfterExpireTime = false }) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [currentTrackList, setCurrentTrackList] = useState<Track[]>([]);
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAlbumDialogOpen, setIsAlbumDialogOpen] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
  const [currentPlayingCategory, setCurrentPlayingCategory] = useState<string | null>(null);
  const [isTermsDialogOpen, setIsTermsDialogOpen] = useState(false);
  const router = useRouter();

  const shouldShowPopup = isAfterExpireTime;

  const [isWelcomePopupOpen] = useState(shouldShowPopup);

  // Prevent popup from being closed on test page
  const handlePopupClose = () => {
    // Do nothing - popup cannot be closed
  };

  const getHomePagePath = (): string => {
    const isPremium = router.pathname.includes('/tablet-app-premium');
    const isSoulscape = router.pathname.includes('soulscape');

    if (isPremium) {
      return isSoulscape ? '/tablet-app-premium-soulscape' : '/tablet-app-premium';
    } else {
      return isSoulscape ? '/tablet-app-soulscape' : '/tablet-app';
    }
  };

  const handleTrackClick = (track: Track, trackList: Track[], genre?: string) => {
    setCurrentTrack(track);
    setCurrentTrackList(trackList);
    if (genre) {
      const categoryToSet = genre.toLowerCase();
      setCurrentPlayingCategory(categoryToSet);
      setActiveMenuItem(categoryToSet);
    }

    if (track.video) {
      setIsVideoDialogOpen(true);
    } else if (track.audio) {
      setIsPlaying(true);
    }
  };

  const handleCloseVideoDialog = () => {
    setIsVideoDialogOpen(false);
    setCurrentTrack(null);
  };

  const isTrack = (item: Track | { title: string; link: string }): item is Track => {
    return (item as Track).image !== undefined;
  };

  const handleAlbumDialogOpenChange = (isOpen: boolean) => {
    setIsAlbumDialogOpen(isOpen);
    if (!isOpen) {
      setSelectedAlbum(null);
    }
  };

  const handleAlbumClick = (album: Album) => {
    setSelectedAlbum(album);
    setIsAlbumDialogOpen(true);
    setActiveMenuItem(album.category.toLowerCase());
  };

  const isPlayerVisible = !!currentTrack && !isVideoDialogOpen;
  const isPremium = router.pathname.includes('/tablet-app-premium');
  const pageType = router.pathname.includes('soulscape') ? 'soulscape' : 'renewme';
  const audioTracksRow1Data = pageType === 'renewme' ? audioTracksRow1 : audioTracksRow1Soulscape;

  useEffect(() => {
    const { play, focus } = router.query;
    const path = router.asPath.split('?')[0].split('#')[0];

    if (play) {
      const track = sidebarItems
        .flatMap(item => item.items || [])
        .find(subItem => isTrack(subItem) && subItem.id === play) as Track | undefined;
      if (track) {
        handleTrackClick(track, [track], track.category);
      }
    }

    if (focus && typeof focus === 'string') {
      setActiveMenuItem(focus.toLowerCase());
    } else if (path === getHomePagePath()) {
      setActiveMenuItem('home');
    } else {
      setActiveMenuItem(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query, router.asPath]);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsTermsDialogOpen(true);
    }
  }, []);

  return (
    <section className="flex w-screen font-['Gilroy'] text-zinc-700 relative">
      <WelcomePopup isOpen={isWelcomePopupOpen} onClose={handlePopupClose} />
      <TermsDialog isOpen={isTermsDialogOpen} onClose={() => setIsTermsDialogOpen(false)} />{' '}
      {/* <SurveyDialog isTermsDialogOpen={isTermsDialogOpen} /> */}
      <Sidebar
        type={pageType}
        isPremium={isPremium}
        isPlayerVisible={isPlayerVisible}
        activeMenuItem={activeMenuItem}
        currentPlayingCategory={currentPlayingCategory}
        handleTrackClick={track => {
          const trackList = sidebarItems.find(item =>
            item.items?.some(subItem => isTrack(subItem) && subItem.title === track.title)
          )?.items as Track[];
          handleTrackClick(track, trackList || [], track.category);
        }}
      />
      <Element
        name="main-content"
        className={cn(
          'ml-4 md:ml-[calc(280px+2rem)] py-4 w-[calc(100%-2rem)] mr-4 transition-all duration-300 ease-in-out',
          isPlayerVisible && 'pb-[686px]'
        )}
      >
        {/* <div className="flex justify-right items-center z-10 fixed right-[10px] top-[3px]">
          <div className="text-lg font-bold text-zinc-600  bg-white shadow-md mb-2 break-all border-[2px] rounded-md flex justify-center items-center border-zinc-200 w-[150px]">
            DEMO
          </div>
        </div> */}
        <WelcomeBanner type={pageType} />
        <AudioTracksCarouselRow1
          tracks={audioTracksRow1Data}
          onTrackClick={track => handleTrackClick(track, audioTracksRow1Data, track.genre)}
          setActiveMenuItem={setActiveMenuItem}
        />
        <Element name="motivation-tracks">
          <AudioTracksCarousel
            id="motivation-tracks"
            tracks={motivationTracks}
            genre="Motivations"
            onTrackClick={(track, genre) => handleTrackClick(track, motivationTracks, genre)}
            onAlbumClick={handleAlbumClick}
            setActiveMenuItem={setActiveMenuItem}
          />
        </Element>
        <Element name="inspirations-tracks">
          <AudioTracksCarousel
            id="inspirations-tracks"
            tracks={inspirationsTracks}
            genre="Inspirations"
            onTrackClick={(track, genre) => handleTrackClick(track, inspirationsTracks, genre)}
            onAlbumClick={handleAlbumClick}
            setActiveMenuItem={setActiveMenuItem}
          />
        </Element>
        <Element name="sleep-escape-tracks">
          <AudioTracksCarousel
            id="sleep-escape-tracks"
            tracks={sleepEscapeTracks}
            genre="Sleep Escape"
            onTrackClick={(track, genre) => handleTrackClick(track, sleepEscapeTracks, genre)}
            onAlbumClick={handleAlbumClick}
            setActiveMenuItem={setActiveMenuItem}
          />
        </Element>
        {router.pathname.includes('premium') && (
          <Element name="skillful-living-tracks">
            <AudioTracksCarousel
              id="skillful-living-tracks"
              tracks={skillfulLivingTracksAlbums}
              genre="Skillful Living"
              onTrackClick={(track, genre) => handleTrackClick(track, [], genre)}
              onAlbumClick={handleAlbumClick}
              setActiveMenuItem={setActiveMenuItem}
            />
          </Element>
        )}
        <Element name="easy-listening-tracks">
          <AudioTracksCarousel
            id="easy-listening-tracks"
            tracks={easyListeningTracks}
            genre="Easy Listening"
            onTrackClick={(track, genre) => handleTrackClick(track, easyListeningTracks, genre)}
            onAlbumClick={handleAlbumClick}
            setActiveMenuItem={setActiveMenuItem}
          />
        </Element>

        <AlbumDialog
          album={selectedAlbum}
          isOpen={isAlbumDialogOpen}
          onOpenChange={handleAlbumDialogOpenChange}
          onTrackClick={track => {
            if (selectedAlbum) {
              // Don't pass the genre here, so it keeps the current activeMenuItem
              handleTrackClick(track, selectedAlbum.tracks);
            }
          }}
        />
      </Element>
      <AudioPlayer
        currentTrack={currentTrack}
        currentTrackList={currentTrackList}
        setCurrentTrack={setCurrentTrack}
        isPlayerVisible={isPlayerVisible}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <VideoDialog
        isVideoDialogOpen={isVideoDialogOpen}
        setIsVideoDialogOpen={handleCloseVideoDialog}
        currentTrack={currentTrack}
      />
    </section>
  );
};

export default TabletApp;
