// Project/Layout.jsx

import React from 'react';
import NAveeeee from './NAveeeee.jsx';
import Footer from './Footer.js';
import { Outlet } from 'react-router-dom';
import Information from './Information.js'
const Layout = () => {
  return (
    <div>
      <NAveeeee />
      <Outlet />
      <Footer />
      <Information/>
    </div>
  );
};

export default Layout;
