import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import OfferDetails from './OfferDetails';

function Offers({ offers }) {
  return (
    <Row>
      {offers && offers.map((offer) => (
        <Col sm={12} md={6} lg={4} key={offer._id}>
          <OfferDetails offer={offer} />
        </Col>
      ))}
    </Row>
  );
}

Offers.propTypes = {};

export default Offers;
