import React from 'react'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
      <>
        <Outlet />
        <footer>Rick and Morty</footer>
      </>
    );
  };

export default Layout
