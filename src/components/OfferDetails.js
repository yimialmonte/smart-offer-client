import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function OfferDetails({
  offer: {
    _id, brand, image, name, percentDiscount, description,
  },
}) {
  return (
    <Card className="my-5 p-3 rounded">
      <Link to={`/offer/${_id}`}>
        <CardImg width="450px" top src={`${image}`} alt="Card image cap" />
      </Link>
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {brand}
        </CardSubtitle>
        <CardText className="text-danger">
          Discount: -
          {percentDiscount}
          %
        </CardText>
        <CardText>{description}</CardText>
        <Button>Buy Now</Button>
      </CardBody>
    </Card>
  );
}

OfferDetails.propTypes = {
  offer: PropTypes.shape({
    products: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        percentDiscount: PropTypes.number.isRequired,
      }).isRequired,
    ),
    loading: PropTypes.bool,
  }).isRequired,
};

export default OfferDetails;
