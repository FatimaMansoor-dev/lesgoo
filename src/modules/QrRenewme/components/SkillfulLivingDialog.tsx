import React from 'react';

import Image from 'next/image';

import { Dialog, DialogClose, DialogContent } from 'src/components/ui/dialog';
import { cn } from 'src/lib/utils';

import { ChevronLeft } from 'lucide-react';

import { SKILLFUL_LIVING_CONTENTS } from '../constants/skillful-living';
import SkillfulLivingAccordion from './SkillfulLivingAccordion';

interface SkillfulLivingDialogProps {
  open: boolean;
  onClose: () => void;
  content: typeof SKILLFUL_LIVING_CONTENTS[0]; // Type based on one of the items in SKILLFUL_LIVING_CONTENTS
}

const SkillfulLivingDialog: React.FC<SkillfulLivingDialogProps> = ({ open, onClose, content }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="w-full h-full p-6 bg-white font-['Gilroy'] flex flex-col overflow-y-auto rounded-none"
        hideCloseButton
      >
        <div className="flex items-start justify-between">
          <div className="mb-10">
            <Image
              src={content.iconSeal}
              alt={content.type}
              width={70}
              height={70}
              className="w-14 object-cover mb-4 rounded-full"
            />
            <h2 className="text-2xl font-semibold">{content.type}</h2>
            <p className="text-sm text-zinc-600 max-w-[220px]">{content.description}</p>
          </div>
          <DialogClose asChild>
            <button
              onClick={onClose}
              className={cn(
                'p-2 bg-transparent text-gray-500 rounded-full',
                content.bgSealColor,
                content.textPrimaryColor,
                content.outlineColor
              )}
            >
              <ChevronLeft size={24} />
            </button>
          </DialogClose>
        </div>
        <SkillfulLivingAccordion items={content.items} primaryColor={content.bgPrimaryColor} />
      </DialogContent>
    </Dialog>
  );
};

export default SkillfulLivingDialog;
