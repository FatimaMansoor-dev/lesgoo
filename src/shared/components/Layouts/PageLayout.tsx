import React from 'react';
import { useInView } from 'react-intersection-observer';

import { useScroll } from 'shared/hooks/useScroll';

import AuthenticatedRoute from '../AuthenticatedRoute';
import Footer from '../Partials/Footer';
import Navbar from '../Partials/Navbar';
import { PageLayoutWrapper } from './PageLayout.styled';
import { useRouter } from 'next/router';

interface Props {
  children: any;
  showFooter?: boolean;
  showHeader?: boolean;
}

const PageLayout: React.FC<Props> = ({ children, showFooter = true, showHeader = true }) => {
  const { ref: topRef } = useInView();
  const { ref: pageLayoutRef } = useScroll();
  const router = useRouter();
  const removeMarginRoutes = ['/contact', '/contact/global-partners', '/news', '/contact/media-inquiries'];
  const currentRoute = router.pathname;
  const removedMargin = removeMarginRoutes.includes(currentRoute);

  return (
    <AuthenticatedRoute>
      <PageLayoutWrapper ref={pageLayoutRef} className="relative flex h-full w-full flex-col">
        <div ref={topRef} className="absolute top-0 h-1 w-full"></div>
        {showHeader && <Navbar />}
        <div className={`${removedMargin ? '' : 'mt-[-4rem]'} h-full w-full`}>{children}</div>
        {showFooter && <Footer />}
      </PageLayoutWrapper>
    </AuthenticatedRoute>
  );
};

export default PageLayout;
