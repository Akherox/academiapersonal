// src/boot/axios.js

import { boot } from 'quasar/wrappers'
import axios from 'axios'

//const api = axios.create({ baseURL: 'http://localhost:3000' })
 const api = axios.create({ baseURL: 'http://10.152.46.17:3000' })
api.defaults.validateStatus = status => {
  return status >= 200 && status < 300;
};

api.interceptors.response.use(
  function(response) {
    //handleDates(response.data);
    return response;
  },
  function(error) {
    if (error.response?.status == 401) {
      // Notify.create({
      //   type: "negative",
      //   message: "É necessário efetuar o login"
      // });
      router.push("/login");
      return Promise.reject(error);
    }

    return error;
  }
);

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { axios, api }