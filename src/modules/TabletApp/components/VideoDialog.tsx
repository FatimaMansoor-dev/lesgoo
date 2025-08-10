// src/modules/TabletApp/components/VideoDialog.tsx
import React from 'react';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Dialog, DialogContent } from 'src/components/ui/dialog';

interface Track {
  title: string;
  category: string;
  image: string;
  className: string;
  audio?: string;
  video?: string;
}

interface VideoDialogProps {
  isVideoDialogOpen: boolean;
  setIsVideoDialogOpen: (isOpen: boolean) => void;
  currentTrack: Track | null;
}

const VideoDialog: React.FC<VideoDialogProps> = ({
  currentTrack,
  isVideoDialogOpen,
  setIsVideoDialogOpen,
}) => {
  let videoPath = `${imageDomainUrl}/TabletApp/Videos/${currentTrack?.video}`;

  // If current track video field has utfs.io domain, then it is a video link, dont use the path with imageDomainUrl
  if (currentTrack?.video?.includes('utfs.io')) {
    videoPath = currentTrack?.video;
  }

  return (
    <Dialog open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
      <DialogContent className="sm:max-w-[800px] bg-transparent border-transparent rounded-none p-0">
        <div>
          {currentTrack?.video && (
            <video autoPlay src={videoPath} controls className="w-full rounded-xl" />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDialog;
