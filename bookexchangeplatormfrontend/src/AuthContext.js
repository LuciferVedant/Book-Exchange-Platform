import { createContext, useState, useContext, useEffect } from "react";
import { LOCALSTORAGE_TOKEN_KEY } from "./utils";

import {
  login as userLogin,
  register,
  resetpassword as reset,
} from "../src/api/index.js";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

function useValue() {
  const value = useContext(AuthContext);
  return value;
}

function CustomAuthContext({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const userToken = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
      if (userToken) {
        const user = jwtDecode(userToken);
        setUser(user);
      }
      setLoading(false);
    };

    getUser();
  }, []);

  const login = async (email, password) => {
    const response = await userLogin(email, password);

    if (response.status) {
      setUser(jwtDecode(response.data));

      localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, response.data);
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
  };

  const signup = async (name, email, password, confirmPassword) => {
    const response = await register(name, email, password, confirmPassword);

    if (response.status) {
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  };
  const resetpassword = async (newPassword) => {
    const response = await reset(newPassword);
    if (response.status) {
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  };
  return (
    <AuthContext.Provider
      value={{ login, logout, signup, resetpassword, loading, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export { useValue };
export default CustomAuthContext;
