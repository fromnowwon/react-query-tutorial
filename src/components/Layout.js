import Navbar from './Nav';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;