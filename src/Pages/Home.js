import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import getOffers from '../stores/offers/offerActions';
import Offers from '../components/Offers';
import Loader from '../components/Loader';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchoffers } = this.props;
    fetchoffers();
  }

  render() {
    const {
      offers: { products, loading },
    } = this.props;
    return <div>{loading ? <Loader /> : <Offers offers={products} />}</div>;
  }
}

const mapStateToprops = (state) => ({
  offers: state.offers,
});

const mapDispatchToPros = (dispatch) => ({
  fetchoffers: () => dispatch(getOffers()),
});

Home.propTypes = {
  fetchoffers: PropTypes.func.isRequired,
  offers: PropTypes.shape({
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

export default withRouter(connect(mapStateToprops, mapDispatchToPros)(Home));
