import React from 'react';

import { styled } from 'shared/theme';

interface WellnessWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  imageOption: {
    gap: number;
    left: number;
    width: number;
  };
}

export const WellnessWrapper = styled.div.attrs({})<WellnessWrapperProps>`
  .wellness-img-placeholder {
    gap: ${({ imageOption }) => imageOption.gap}px;

    & > div {
      max-width: ${({ imageOption }) => imageOption.width}px;
    }
  }

  ${({ theme }) => theme.screens.smallMedia} {
  }
  ${({ theme }) => theme.screens.mediumMedia} {
  }
  ${({ theme }) => theme.screens.largeMedia} {
  }
  ${({ theme }) => theme.screens.xLargeMedia} {
  }
  ${({ theme }) => theme.screens.xxLargeMedia} {
  }
`;
