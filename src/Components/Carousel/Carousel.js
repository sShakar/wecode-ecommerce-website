import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption
} from 'mdb-react-ui-kit';
import classes from './Carousel.module.css';

const Carousel = () => {
  return (
    <div className={classes.bg}>
      <MDBCarousel className={classes.carousel} fade>
        <MDBCarouselInner>
          <MDBCarouselItem className="active">
            <MDBCarouselElement src="https://source.unsplash.com/FK81rxilUXg/1920x1080" alt="..." />
            <MDBCarouselCaption>
              <h5>Shop whenever you feel like it!</h5>
              <p>
                You can shop with us anytime you like and we will still be at your full service.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement src="https://source.unsplash.com/_3Q3tsJ01nc/1920x1080" alt="..." />
            <MDBCarouselCaption>
              <h5>Choose between out various categories!</h5>
              <p>We offer our customer a wide range of categories to choose between.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
};

export default Carousel;
