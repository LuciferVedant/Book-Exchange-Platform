import { LOCALSTORAGE_TOKEN_KEY } from "../utils";
import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export const login = async (email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:3200/api/users/signin",
      { email, password }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const register = async (name, email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:3200/api/users/signup",
      { name, email, password }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const resetpassword = async (newPassword) => {
  try {
    const response = await axios.put(
      "http://localhost:3200/api/users/resestpassword",
      {
        newPassword,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getbooks = async () => {
  try {
    const response = await axios.get("http://localhost:3200/api/book/getbooks");
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const postbooks = async (title, author, genre) => {
  try {
    const response = await axios.post(
      "http://localhost:3200/api/book/postbooks",
      { title, author, genre }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const updatebook = async (title, author, genre, bookId) => {
  try {
    const response = await axios.put(
      `http://localhost:3200/api/book/updatebook?title=${title}&author=${author}&genre=${genre}&bookId=${bookId}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const deletebook = async (bookId) => {
  try {
    const response = await axios.delete(
      `http://localhost:3200/api/book/deletebook?bookId=${bookId}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
