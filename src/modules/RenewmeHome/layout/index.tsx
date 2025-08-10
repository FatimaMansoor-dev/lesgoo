import React from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="lg:w-[346px] ">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 overflow-hidden ">
        <Header />
        <main className="flex-1 overflow-auto sm:p-8 p-4">{children}</main>
      </div>
    </div>
  );
};
export default Layout;
