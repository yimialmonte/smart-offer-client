import React, { Component } from 'react';
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
    const { offers: {products, loading} } = this.props;
    return (
      <div>
        {loading ? <Loader /> : <Offers offers={products} />}
      </div>
    );
  }
}

const mapStateToprops = (state) => ({
  offers: state.offers,
});

const mapDispatchToPros = (dispatch) => ({
  fetchoffers: () => dispatch(getOffers()),
});

export default withRouter(connect(mapStateToprops, mapDispatchToPros)(Home));
