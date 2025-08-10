import React from 'react';

import { styled } from 'shared/theme';

export const HeroWrapper = styled.div.attrs({})<React.HTMLAttributes<HTMLDivElement>>`
  .bg-1 {
    position: absolute;
    width: 577.4px;
    height: 577.4px;
    left: calc(50% - 150px);
    top: 10%;
    transform: translateX(-50%);
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(0, 192, 197, 0.25) 0%,
      rgba(243, 243, 243, 0) 80.42%
    );
  }
  .bg-2 {
    position: absolute;
    width: 577.4px;
    height: 577.4px;
    left: calc(50% + 150px);
    top: 10%;
    transform: translateX(-50%);
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(240, 126, 89, 0.25) 0%,
      rgba(243, 243, 243, 0) 80.42%
    );
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
  }
  ${({ theme }) => theme.screens.xxLargeMedia} {
  }
`;
