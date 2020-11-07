import React from 'react';
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

function OfferDetails({ offer }) {
  return (
    <Card className="my-5 p-3 rounded">
      <Link to={`/offer/${offer._id}`}>
        <CardImg
          width="450px"
          top
          src={`${offer.image}`}
          alt="Card image cap"
        />
      </Link>
      <CardBody>
        <CardTitle tag="h5">{offer.name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {offer.brand}
        </CardSubtitle>
        <CardText>
          <big className="text-danger">Discount: -{offer.percentDiscount}%</big>
        </CardText>
        <CardText>{offer.description}</CardText>
        <Button>Buy Now</Button>
      </CardBody>
    </Card>
  );
}

export default OfferDetails;
