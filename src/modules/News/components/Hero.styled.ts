import React from 'react';

import { styled } from 'shared/theme';

export const HeroWrapper = styled.div.attrs({})<React.HTMLAttributes<HTMLDivElement>>`
  .bg-bot {
    position: absolute;
    bottom: 0;
    height: 267px;
    width: 100%;
    background: linear-gradient(180deg, rgba(242, 242, 242, 0) 13.19%, #ededed 89.62%);
  }
  .hero-image {
    animation: heroImageAnim 800ms linear;
    animation-fill-mode: forwards;
    opacity: 0;
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
