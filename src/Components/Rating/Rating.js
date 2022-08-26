import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardImage
} from 'mdb-react-ui-kit';
import classes from './Rating.module.css';

const Rating = () => {
  return (
    <MDBRow className={classes.rating}>
      <h4 className={classes.title}>See what our customers say about us</h4>
      <MDBCol sm="6">
        <MDBCard className={classes.card}>
          <MDBCardImage
            position="left"
            src="https://source.unsplash.com/IF9TK5Uy-KI/1920x1080"
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>Jennifer Connelly</MDBCardTitle>
            <MDBCardText>I love their 24/7 customer service and how helpful they are.</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm="6">
        <MDBCard className={classes.card}>
          <MDBCardImage
            src="https://source.unsplash.com/WNoLnJo7tS8/1920x1080"
            position="top"
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>Jason Momoa</MDBCardTitle>
            <MDBCardText>
              The reason I chose Stash is because of their suitable price ranges and the undeniable
              quality.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default Rating;
