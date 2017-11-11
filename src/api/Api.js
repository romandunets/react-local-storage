import axios from 'axios';

export default class Api {
  static getClient() {
    var config = {
      baseURL: process.env.API_HOST
    };

    /*if (localStorage.getItem('token') !== null) {
      let token = localStorage.getItem('token');
      config.headers = { Authorization: `Bearer ${token}` };
    }*/
    config.headers = { Id: "4dd6cff6-fba5-4330-ac44-a9bc94890a65" }; // TODO: secure authentication

    return axios.create(config);
  }
}
