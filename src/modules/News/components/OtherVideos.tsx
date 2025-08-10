import { OtherVideosWrapper } from './OtherVideos.styled';

import { NewsVideo } from '../types';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { HttpResponse } from 'shared/types/Http';
import CommonUtil from 'shared/utils/Common';

const OtherVideos: React.FC = () => {
  const {
    data: newsVideos,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['newsVideos'],
    queryFn: async () => {
      const response = await fetch(`${CommonUtil.getDomainURL()}/api/news`);
      const data = (await response.json()) as HttpResponse<NewsVideo[]>;
      if (!data?.records) return [];
      return data.records;
    },
    placeholderData: [],
  });

  if (isLoading && isFetching) return null;

  return (
    <OtherVideosWrapper className="relative">
      <div className="container isolate mx-auto h-full px-6 py-12 md:py-24 xl:py-36">
        <h2 className="pb-6 font-['Gilroy'] text-2xl font-[600] md:text-3xl">Other Videos</h2>
        <div className="grid h-full grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-[15px] gap-y-[30px]">
          {(newsVideos || []).map((newsVideo, newsVideoIdx) => (
            <div key={newsVideoIdx} className="flex flex-col gap-y-[16px]">
              <div className="h-screen max-h-[260px] overflow-hidden rounded-[10px]">
                <iframe
                  width="100%"
                  height="100%"
                  src={newsVideo.url}
                  title={newsVideo.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="font-['Gilroy'] text-base font-[400] text-[#333333]">
                {newsVideo.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </OtherVideosWrapper>
  );
};

export default OtherVideos;
