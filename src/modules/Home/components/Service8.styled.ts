import React from 'react';

import { styled } from 'shared/theme';

export const Service8Wrapper = styled.div.attrs({})<React.HTMLAttributes<HTMLDivElement>>`
  .bg {
    height: 500px;
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(0, 192, 197, 0.5) 0%,
      rgba(243, 243, 243, 0) 80.42%
    );
  }

  ${({ theme }) => theme.screens.smallMedia} {
  }
  ${({ theme }) => theme.screens.mediumMedia} {
    .bg {
      height: 700px;
      width: 700px;
      background: radial-gradient(
        50% 50% at 50% 50%,
        rgba(240, 126, 89, 0.25) 0%,
        rgba(243, 243, 243, 0) 80.42%
      );
    }
  }
  ${({ theme }) => theme.screens.largeMedia} {
  }
  ${({ theme }) => theme.screens.xLargeMedia} {
    .bg {
      height: 1000px;
      width: 1000px;
    }
  }
  ${({ theme }) => theme.screens.xxLargeMedia} {
  }
`;
