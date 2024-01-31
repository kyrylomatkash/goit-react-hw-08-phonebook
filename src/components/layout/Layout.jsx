// Імпорт бібліотек і компонентів
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBar } from 'components/app-bar/AppBar';
import { Suspense } from 'react';
// Основна функція компоненту
export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={2500} position="top-center" />
    </>
  );
};
