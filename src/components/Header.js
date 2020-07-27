import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Collapse,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav() {
    this.setState((prevState) => ({ isNavOpen: !prevState.isNavOpen }));
  }

  toggleModal() {
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
  }

  render() {
    const { isNavOpen, isModalOpen } = this.state;
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
                    Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Modal isOpen={isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            <h3>Login</h3>
          </ModalHeader>
          <ModalBody>
            <p>Body</p>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Header;
