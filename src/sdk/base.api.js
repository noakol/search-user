import axios from "axios";

class serviceClass {
  constructor(config) {
    this.getMethod = this.getMethod.bind(this);
    this.request = this.request(config);
    this.config = config;
  }

  request = config => {
    return axios.create({
      baseURL: config.baseUrl
    });
  };

  getMethod = (url, params) => {
    return this.request
      .get(url, params)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  };
}

export default serviceClass;
