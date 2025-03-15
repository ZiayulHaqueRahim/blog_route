import React from 'react';

import Footer from './Components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';

export default function Layout(){
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
};

