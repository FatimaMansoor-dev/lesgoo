import React from 'react';

import { styled } from 'shared/theme';

export const OtherVideosWrapper = styled.div.attrs({})<React.HTMLAttributes<HTMLDivElement>>`
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
