import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "http://api.quizpmm.prefeiturademossoro.com.br/api",
});

export default api;
