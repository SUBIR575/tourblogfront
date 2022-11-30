import axios from "axios";

const Api = axios.create({
  //baseURL: "http://localhost:5000/",
  baseURL:"https://guarded-ravine-75071.herokuapp.com/",
});
Api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
         
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("request config", config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default Api;
