import React, { Fragment } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Cards from '../../Components/Cards/Cards';
import classes from './ItemsLayout.module.css';

const ItemsLayout = () => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main className={classes.layout}>
        <Cards />
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default ItemsLayout;
