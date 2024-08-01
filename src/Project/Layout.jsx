// Project/Layout.jsx

import React from 'react';
import NAveeeee from './NAveeeee.jsx';
import Footer from './Footer.js';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <NAveeeee />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
