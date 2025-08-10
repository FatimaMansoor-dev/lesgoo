import React from 'react';

import { styled } from 'shared/theme';

export const ServicesWrapper = styled.div.attrs({})<React.HTMLAttributes<HTMLDivElement>>`
  img {
    filter: drop-shadow(0px 15px 4px rgba(0, 0, 0, 0.25));
  }
`;
