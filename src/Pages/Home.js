import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import getOffers from '../stores/offers/offerActions';
import Offers from '../components/Offers';

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
    const { loading, offers } = this.props;
    return (
      <>
        {loading ? (<h1>Home Page</h1>) : (
          <Offers offers={offers.offers} />
        )}
      </>
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
