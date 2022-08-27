import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import homeShopping from '../../assets/img/header/home-shopping.png';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';

const Header = () => {
  return (
    <MDBRow className={classes.headerRow} id="home">
      <MDBCol
        md="6"
        style={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
        <h3>Welcome!</h3>
        <h4>Pick what you suits you best</h4>
        <div>
          <NavLink
            className="btn btn-lg"
            to="/items"
            style={{
              backgroundColor: '#143F6B',
              color: '#F6F6F6',
              boxShadow: 'none',
              margin: '10px'
            }}
            role="button">
            View Items
          </NavLink>
          <NavLink
            className="btn btn-lg"
            to="/"
            style={{
              backgroundColor: '#F55353',
              color: '#F6F6F6',
              boxShadow: 'none',
              margin: '10px'
            }}
            role="button">
            About
          </NavLink>
        </div>
      </MDBCol>
      <MDBCol md="6">
        <div className="bg-image text-center">
          <img src={homeShopping} className="img-fluid " alt="Text" />
        </div>
      </MDBCol>
    </MDBRow>
  );
};

export default Header;
