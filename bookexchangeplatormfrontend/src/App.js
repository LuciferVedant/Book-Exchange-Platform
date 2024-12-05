import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout.js";
import Home from "./components/Home.js";
import Register from "./components/Register.js";
import UpdateBook from "./components/UpdateBook.js";
import Login from "./components/Login.js";
import PostBooks from "./components/PostBooks.js";
import ResetPassword from "./components/ResetPassword.js";

function App() {
  const routes = createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/postbook" element={<PostBooks />} />
        <Route path="/updatebook/:bookId" element={<UpdateBook />} />
      </Route>
    </>
  );
  const router = createBrowserRouter(routes);
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
