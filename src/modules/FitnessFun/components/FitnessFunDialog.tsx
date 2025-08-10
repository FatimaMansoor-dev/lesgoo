import { AnimatePresence } from 'framer-motion';
import { FITNESS_FUN_CONTENTS } from 'modules/YourBrandSample/constants/fitness-fun';
import React from 'react';

import Image from 'next/image';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'src/components/ui/dialog';
import { cn } from 'src/lib/utils';

import { ChevronDown, ChevronUp, XCircle } from 'lucide-react';

interface FitnessFunDialogProps {
  open: boolean;
  onClose: () => void;
  selectedType: string;
  currentIndex: number;
  onNextFact: () => void;
}

const FitnessFunDialog: React.FC<FitnessFunDialogProps> = ({
  open,
  onClose,
  selectedType,
  currentIndex,
  onNextFact,
}) => {
  const selectedItem = FITNESS_FUN_CONTENTS.find(item => item.type === selectedType);

  if (!selectedItem) {
    return null;
  }

  const { facts } = selectedItem;

  const handleNext = () => {
    onNextFact();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        hideCloseButton
        className="sm:max-w-[600px] border-transparent text-white font-['Gilroy'] shadow-none"
      >
        <DialogHeader>
          <div className="flex justify-between mb-4 w-full items-center">
            <div className="flex gap-2 items-center">
              <Image
                className="w-10"
                src={selectedItem.icon}
                alt={selectedItem.type}
                width={50}
                height={50}
              />
              <DialogTitle>{selectedItem.type}</DialogTitle>
            </div>
            <DialogTrigger asChild>
              <XCircle className="cursor-pointer" />
            </DialogTrigger>
          </div>
        </DialogHeader>
        <div className="relative h-[160px] overflow-hidden bg-white text-black p-4 rounded-3xl flex gap-6 items-center">
          <div
            className={cn(
              'bg-[#E5E5E5] text-black font-semibold text-3xl pt-1 -rotate-12 relative flex items-center justify-center rounded-full w-14 aspect-square',
              `${selectedItem.bgColorLight}`,
              selectedItem.textColor,
              'cursor-pointer'
            )}
          >
            <p>{(currentIndex % facts.length) + 1}</p>
          </div>
          <div className="h-[100px] w-[2px] bg-[#E5E5E5]" />
          <div className="relative flex-1 h-[100px] overflow-y-scroll">
            <AnimatePresence>
              <div className="absolute top-0 h-full flex items-center">
                <p className="text-lg">{facts[currentIndex % facts.length]}</p>
              </div>
            </AnimatePresence>
          </div>
          <div>
            <ChevronUp className="cursor-pointer" onClick={handleNext} />
            <ChevronDown className="cursor-pointer" onClick={handleNext} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FitnessFunDialog;
