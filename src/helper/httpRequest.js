import axios from 'axios';

const baseUrl = 'http://localhost:3000/v1/';

const postRequest = (uri, data, header, callSuccess, callFail) => {
  axios
    .post(baseUrl + uri, data, header)
    .then((response) => {
      callSuccess(response);
    })
    .catch((error) => {
      callFail(error);
    });
};

const getRequest = (uri, callSuccess, callFail) => {
  axios
    .get(baseUrl + uri)
    .then((response) => {
      callSuccess(response);
    })
    .catch((error) => {
      callFail(error);
    });
};

export default {
  postRequest,
  getRequest,
};
