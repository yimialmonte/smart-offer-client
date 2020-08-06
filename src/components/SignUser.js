import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import axios from 'axios';
import { required, minLength, validEmail } from '../../validations/index';

class SingUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.hanldeSubmit = this.hanldeSubmit.bind(this);
  }

  hanldeSubmit(values) {
    const { isLogin } = this.props;
    if (isLogin) this.handleLogin(values);
    else this.handleSignUp(values);
  }

  handleSignUp(values) {
    const { name, email, password } = values;
    const { toggleModal } = this.props;

    axios
      .post('http://localhost:3000/v1/users/register', {
        name,
        email,
        password,
      })
      .then((response) => {
        alert(JSON.stringify(response.data));
        toggleModal();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleLogin(values) {
    const { email, password } = values;
    const { toggleModal } = this.props;

    axios
      .post('http://localhost:3000/v1/users/login', {
        email,
        password,
      })
      .then((response) => {
        alert(JSON.stringify(response.data));
        toggleModal();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {
      isModalOpen, toggleModal, isLogin,
    } = this.props;
    const fieldName = isLogin ? (
      ''
    ) : (
      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Control.text
          model=".name"
          name="name"
          id="name"
          className="form-control"
          validators={{
            required,
          }}
        />
        <Errors
          className="text-danger"
          model=".name"
          show="touched"
          messages={{
            required: 'The Name is required',
          }}
        />
      </FormGroup>
    );

    return (
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={this.toggleModal}>
          <h3>{isLogin ? 'Login' : 'SignUp'}</h3>
        </ModalHeader>
        <ModalBody>
          <div className="col-12">
            <LocalForm onSubmit={(values) => this.hanldeSubmit(values)}>
              {fieldName}
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Control.text
                  model=".email"
                  name="email"
                  id="email"
                  className="form-control"
                  validators={{
                    required,
                    validEmail,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".email"
                  show="touched"
                  messages={{
                    required: 'The Email is required',
                    validEmail: 'Provide a valid email',
                  }}
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
                  validators={{
                    required,
                    minLength: minLength(6),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".password"
                  show="touched"
                  messages={{
                    required: 'The Password is required',
                    minLength:
                      'The password must be greater than six characters',
                  }}
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
    );
  }
}

SingUser.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default SingUser;
