import React, { useState } from 'react';

import { Button } from 'src/components/ui/button';
import { Dialog, DialogClose, DialogContent } from 'src/components/ui/dialog';
import { cn } from 'src/lib/utils';

import { Loader2, X } from 'lucide-react';

const RenewMeAdsDialog: React.FC = () => {
  const [isRenewMeAdsDialogOpen, setIsRenewMeAdsDialogOpen] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <Dialog open={isRenewMeAdsDialogOpen} onOpenChange={() => setIsRenewMeAdsDialogOpen(false)}>
      <DialogContent
        hideCloseButton
        className="font-['Gilroy'] p-0 px-6 bg-transparent border-transparent overflow-hidden flex items-center justify-center shadow-none"
      >
        <Loader2
          className={cn(
            'animate-spin text-white',
            isVideoLoaded ? 'opacity-0 hidden' : 'opacity-100'
          )}
          size={32}
        />
        <div className="flex flex-col items-end">
          {isVideoLoaded && (
            <DialogClose asChild>
              <Button className="flex gap-1 items-center text-black bg-white px-3 rounded-md w-fit mb-4 hover:bg-white hover:text-black">
                <p>Close</p>
                <X className="cursor-pointer" size={18} />
              </Button>
            </DialogClose>
          )}
          <video
            className={cn(
              'rounded-md',
              isVideoLoaded ? 'opacity-100 relative' : 'opacity-0 hidden'
            )}
            autoPlay
            onLoadedData={handleVideoLoaded}
            playsInline
          >
            <source
              src="https://utfs.io/f/f3c7a541-c89f-4c7c-a3e5-4eeddd2d3f89-7ea5jg.mov"
              type="video/mp4"
            />
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RenewMeAdsDialog;
