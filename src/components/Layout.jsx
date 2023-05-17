import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

export const Layout = () => {
  return (
    <div>
      <Header position="sticky" />
      

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
