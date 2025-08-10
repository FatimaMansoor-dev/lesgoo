import React from 'react';

import { styled } from 'shared/theme';

export const PageLayoutWrapper = styled.div.attrs({})`
  // Default Mobile

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
` as unknown as React.FC<
  React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
>;
