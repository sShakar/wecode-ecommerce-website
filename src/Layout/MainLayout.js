import React, { Fragment } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Carousel from '../Components/Carousel/Carousel';
import Rating from '../Components/Rating/Rating';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
  return (
    <Fragment>
      <header>
        <Navbar />
        <Header />
      </header>
      <main>
        <Carousel />
        <Rating />
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default MainLayout;
