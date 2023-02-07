import React from 'react';
import Header from './components/Header';

import s from './styles.module.scss';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Header />
      <main className={s.main}>{children}</main>
    </>
  );
};

export default DefaultLayout;
