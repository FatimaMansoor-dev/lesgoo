import React from 'react';

import { styled } from 'shared/theme';

export const WhatPeopleAreSayingWrapper = styled.div.attrs({})<
  React.HTMLAttributes<HTMLDivElement>
>`
  .bg {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background: radial-gradient(
      111.91% 157.37% at 50% 157.37%,
      rgba(255, 255, 255, 0) 0%,
      #eaeaea 127%
    );
  }
`;
