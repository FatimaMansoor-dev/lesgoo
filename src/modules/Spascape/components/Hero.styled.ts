import React from 'react';

import { styled } from 'shared/theme';

export const HeroWrapper = styled.div.attrs({})<React.HTMLAttributes<HTMLDivElement>>`
  .hero-image {
    animation: heroImageAnim 800ms linear;
    animation-fill-mode: forwards;
    opacity: 0;

    img {
      filter: drop-shadow(0px 15px 4px rgba(0, 0, 0, 0.25));
    }
  }
  .hero-text {
    animation: fadeAnim 800ms linear;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  .hero-buttons {
    animation: fadeAnim 800ms linear;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  /* Animations */
  @keyframes heroImageAnim {
    from {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeAnim {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${({ theme }) => theme.screens.smallMedia} {
  }
  ${({ theme }) => theme.screens.mediumMedia} {
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
