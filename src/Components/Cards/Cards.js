import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardImage
} from 'mdb-react-ui-kit';
import classes from './Cards.module.css';

const Cards = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      return await axios('https://api.storerestapi.com/products')
        .then((response) => setItems(response.data.data))
        .catch((error) => console.log('Something went wrong ' + error));
    };

    getItems();
  }, []);
  console.log(items);

  const renderCards = (card, index) => {
    return (
      <MDBCol sm="3" key={index}>
        <MDBCard className={classes.cards}>
          <MDBCardImage src={card.image} position="top" />
          <MDBCardBody>
            <MDBCardTitle>{card.title}</MDBCardTitle>
            <MDBCardText>{card.description}</MDBCardText>
            <MDBCardText>${card.price}</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  };
  return <MDBRow>{items.map(renderCards)}</MDBRow>;
};

export default Cards;
