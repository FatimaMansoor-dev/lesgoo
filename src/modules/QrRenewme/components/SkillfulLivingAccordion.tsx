import React, { useState } from 'react';

import { cn } from 'src/lib/utils';

import { ChevronDown } from 'lucide-react';

const colors = ['bg-[#01C1C6]', 'bg-[#9AC17E]', 'bg-[#F07E58]', 'bg-[#B38DB2]'];

const SkillfulLivingAccordion: React.FC<{
  items: { subItem: string; subItemDescription: string }[];
  primaryColor: string;
}> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full flex flex-col">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'transition-all duration-500 ease-in-out rounded-t-[3rem] cursor-pointer',
            colors[index % colors.length],
            index !== 0 && '-mt-24',
            activeIndex !== index && 'rounded-b-[3rem]',
            // If last item is open, round the bottom
            items.length - 1 === index && activeIndex === index ? 'rounded-b-[3rem]' : ''
          )}
          onClick={() => toggleItem(index)}
        >
          <div
            className={cn(
              'flex justify-between items-start p-10 pb-4',
              activeIndex === index ? '' : 'rounded-[3rem]'
            )}
          >
            <h2 className="font-semibold text-white text-xl">{item.subItem}</h2>
            <div
              className={cn(
                'transition-transform duration-500 ease-in-out',
                activeIndex === index ? 'rotate-180' : ''
              )}
            >
              <ChevronDown size={24} className="text-white" />
            </div>
          </div>
          <div
            className={cn(
              'transition-all duration-500 ease-in-out mb-[5rem]',
              activeIndex === index ? 'max-h-screen' : 'max-h-0',
              activeIndex === index ? 'opacity-100' : 'opacity-0',
              'px-10 pb-8 text-white'
            )}
          >
            <p>{item.subItemDescription}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillfulLivingAccordion;
