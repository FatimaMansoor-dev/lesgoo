import Lock from 'modules/Lock';
import React, { useEffect, useMemo } from 'react';

import { useRouter } from 'next/router';

import { ROUTES } from 'shared/constants/Routes';
import { useThemeStore } from 'shared/store/Theme';
import { Themes } from 'shared/types/Theme';

import { RootLayoutWrapper } from './RootLayout.styled';

const RootLayout: React.FC<{ children: any }> = ({ children }) => {
  const router = useRouter();

  const setTheme = useThemeStore(state => state.setTheme);

  const routesWithDarkTheme = useMemo(
    () => [
      ROUTES.SPASCAPE,
      ROUTES.PRIVACY,
      ROUTES.TERMS,
      ROUTES.GLOBAL_PARTNERS,
      ROUTES.NEWS,
      ROUTES.CONTACT.INDEX,
      ROUTES.CONTACT.MEDIA_INQUIRIES,
      ROUTES.CONTACT.GLOBAL_PARTNERS,
    ],
    []
  );

  useEffect(() => {
    if (routesWithDarkTheme.includes(router.pathname)) {
      setTheme(Themes.Dark);
    } else {
      setTheme(Themes.Light);
    }
  }, [router.pathname, setTheme, routesWithDarkTheme]);

  return (
    <RootLayoutWrapper className="relative">
      <Lock>{children}</Lock>
    </RootLayoutWrapper>
  );
};

export default RootLayout;
