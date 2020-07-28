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
  FormGroup,
  Label,
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.hanldeSubmit = this.hanldeSubmit.bind(this);
  }

  toggleNav() {
    this.setState((prevState) => ({ isNavOpen: !prevState.isNavOpen }));
  }

  toggleModal() {
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
  }

  hanldeSubmit(values) {
    const { name, email, password } = values;
    alert(`${name} ${email} ${password}`);
    this.toggleModal();
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
                    SignUp
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Modal isOpen={isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            <h3>SignUp</h3>
          </ModalHeader>
          <ModalBody>
            <div className="col-12">
              <LocalForm onSubmit={(values) => this.hanldeSubmit(values)}>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Control.text
                    model=".name"
                    name="name"
                    id="name"
                    className="form-control"
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Control.text
                    model=".email"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  <Control
                    type="password"
                    model=".password"
                    name="password"
                    id="password"
                    className="form-control"
                  />
                </FormGroup>
                <FormGroup>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </FormGroup>
              </LocalForm>
            </div>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Header;
