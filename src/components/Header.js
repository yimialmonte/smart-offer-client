import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Collapse,
  Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import SignUser from './SignUser';
import { postSignIn, postLogout } from '../stores/users/userActionCreators';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      isLogin: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.setLogin = this.setLogin.bind(this);
    this.userLogout = this.userLogout.bind(this);
  }

  setLogin() {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
      isLogin: true,
    }));
  }

  userLogout() {
    const { postLogout, user } = this.props;
    postLogout(user.token);
  }

  toggleNav() {
    this.setState((prevState) => ({ isNavOpen: !prevState.isNavOpen }));
  }

  toggleModal() {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
      isLogin: false,
    }));
  }

  render() {
    const { isNavOpen, isModalOpen, isLogin } = this.state;
    const { postSignIn, user } = this.props;
    return (
      <>
        <Navbar style={{ backgroundColor: '#f1f1f1' }} expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand href="/" className="mr-auto">
              <img
                src="../assets/img/logo.png"
                alt="Company Logo"
                width="45%"
              />
            </NavbarBrand>
            <Collapse navbar isOpen={isNavOpen}>
              <Nav navbar>
                <NavItem>
                  <NavLink exact to="/" className="nav-item nav-link">Home</NavLink>
                </NavItem>
                <NavItem>
                  <a href="/" className="nav-link">
                    Offers
                  </a>
                </NavItem>
                <NavItem>
                  <a href="/" className="nav-link">
                    Promotions
                  </a>
                </NavItem>
                <NavItem>
                  <a href="/" className="nav-link">
                    Publish
                  </a>
                </NavItem>
                <NavItem>
                  <NavLink exact to="/about" className="nav-item nav-link">About</NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  {user.token ? (
                    ''
                  ) : (
                    <Button outline onClick={this.toggleModal}>
                      SignUp
                    </Button>
                  )}
                </NavItem>
              </Nav>
              <Nav className="ml-5" navbar>
                <NavItem>
                  {user.token ? (
                    <Button outline onClick={this.userLogout}>
                      Logout
                    </Button>
                  ) : (
                    <Button outline onClick={this.setLogin}>
                      Login
                    </Button>
                  )}
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <SignUser
          isModalOpen={isModalOpen}
          toggleModal={this.toggleModal}
          isLogin={isLogin}
          postSignIn={postSignIn}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  postSignIn: (email, password) => dispatch(postSignIn(email, password)),
  postLogout: (token) => dispatch(postLogout(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
