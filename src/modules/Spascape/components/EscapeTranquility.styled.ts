import React from 'react';

import { styled } from 'shared/theme';

export const EscapeTranquilityWrapper = styled.div.attrs({})<React.HTMLAttributes<HTMLDivElement>>`
  & > h1 {
    background: linear-gradient(180deg, #00cacc 0%, #009699 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;
