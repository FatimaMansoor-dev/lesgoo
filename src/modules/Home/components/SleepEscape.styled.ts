import React from 'react';

import { styled } from 'shared/theme';

export const SleepEscapeWrapper = styled.div.attrs({})<React.HTMLAttributes<HTMLDivElement>>`
  .bg {
    height: 115%;
    width: 100vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(180deg, rgba(225, 236, 216, 0.9) 0%, rgba(75, 94, 127, 0.9) 100%);
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
