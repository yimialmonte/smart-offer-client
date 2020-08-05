import React, { Component } from 'react';
import axios from 'axios';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Collapse,
  Button,
} from 'reactstrap';
import SignUser from './SignUser';

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
    this.hanldeSubmit = this.hanldeSubmit.bind(this);
    this.setLogin = this.setLogin.bind(this);
  }

  setLogin() {
    this.setState({ isLogin: true });
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
  }

  toggleNav() {
    this.setState((prevState) => ({ isNavOpen: !prevState.isNavOpen }));
  }

  toggleModal() {
    this.setState({ isLogin: false });
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
  }

  hanldeSubmit(values) {
    const { name, email, password } = values;
    axios
      .post('http://localhost:3000/v1/users/register', {
        name,
        email,
        password,
      })
      .then((response) => {
        alert(JSON.stringify(response.data));
        this.toggleModal();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { isNavOpen, isModalOpen, isLogin } = this.state;
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
                  <a href="/" className="nav-link">
                    Home
                  </a>
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
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    SignUp
                  </Button>
                </NavItem>
              </Nav>
              <Nav className="ml-5" navbar>
                <NavItem>
                  <Button outline onClick={this.setLogin}>
                    Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <SignUser
          isModalOpen={isModalOpen}
          toggleModal={this.toggleModal}
          hanldeSubmit={this.hanldeSubmit}
          isLogin={isLogin}
        />
      </>
    );
  }
}

export default Header;
