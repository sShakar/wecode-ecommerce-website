import React, { Fragment } from 'react';
import Navbar from '../Components/Navbar/Navbar';

const MainLayout = () => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>Main</main>
      <footer>Footer</footer>
    </Fragment>
  );
};

export default MainLayout;
