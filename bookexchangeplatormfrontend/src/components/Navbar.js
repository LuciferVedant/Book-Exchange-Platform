// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useValue } from "../AuthContext";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { user, logout } = useValue();
//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };
//   return (
//     <nav class="navbar navbar-expand-lg bg-body-tertiary ">
//       <div class="container-fluid">
//         <a class="navbar-brand" href="#">
//           Book Exchange Platform
//         </a>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//             <li class="nav-item">
//               <a class="nav-link active" aria-current="page" href="#">
//                 Home
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">
//                 Link
//               </a>
//             </li>
//             <li class="nav-item dropdown">
//               <a
//                 class="nav-link dropdown-toggle"
//                 href="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Dropdown
//               </a>
//               <ul class="dropdown-menu">
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     Action
//                   </a>
//                 </li>
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     Another action
//                   </a>
//                 </li>
//                 {/* <li><hr class="dropdown-divider"></li> */}
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     Something else here
//                   </a>
//                 </li>
//               </ul>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link disabled" aria-disabled="true">
//                 Disabled
//               </a>
//             </li>
//           </ul>
//           {/* <form class="d-flex" role="search">
//       <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
//       <button class="btn btn-outline-success" type="submit">Search</button>
//     </form> */}
//         </div>
//       </div>
//     </nav>
//   );
//   // return (
//   //   <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//   //     <div className="container">
//   //       <Link className="navbar-brand" to="/">
//   //         Book Exchange
//   //       </Link>
//   //       <button
//   //         className="navbar-toggler"
//   //         type="button"
//   //         data-toggle="collapse"
//   //         data-target="#navbarNav"
//   //         aria-controls="navbarNav"
//   //         aria-expanded="false"
//   //         aria-label="Toggle navigation"
//   //       >
//   //         <span className="navbar-toggler-icon"></span>
//   //       </button>
//   //       <div className="collapse navbar-collapse" id="navbarNav">
//   //         <ul className="navbar-nav ml-auto">
//   //           {user && (
//   //             <li className="nav-item">
//   //               <Link className="nav-link" to="/postbooks">
//   //                 Post Book
//   //               </Link>
//   //             </li>
//   //           )}
//   //           {/* <li className="nav-item">
//   //             <Link className="nav-link" to="/matchmaking">
//   //               Matchmaking
//   //             </Link>
//   //           </li> */}
//   //           {user ? (
//   //             <>
//   //               <li className="nav-item">
//   //                 <span className="nav-link">Welcome, {user.name}</span>
//   //               </li>
//   //               <li className="nav-item">
//   //                 <button
//   //                   className="btn btn-outline-light"
//   //                   onClick={handleLogout}
//   //                 >
//   //                   Logout
//   //                 </button>
//   //               </li>
//   //             </>
//   //           ) : (
//   //             <li className="nav-item ">
//   //               <Link className="btn btn-outline-light" to="/login">
//   //                 Login
//   //               </Link>
//   //             </li>
//   //           )}
//   //         </ul>
//   //       </div>
//   //     </div>
//   //   </nav>
//   // );
// };

// export default Navbar;

// src/components/Navbar.js

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "bootstrap";
// import { useValue } from "../AuthContext";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { user, logout } = useValue();
//   // Handle user logout
// const handleLogout = () => {
//   logout();
//   navigate("/");
// };

//   return (
//     <nav className="navbar navbar-expand-lg bg-secondary fixed-top ">
//       <Link className="navbar-brand" to="/">
//         Book Exchange
//       </Link>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav mr-auto">
//           {/* Navbar links go here if needed */}
//         </ul>
//         <ul className="navbar-nav ml-auto">
// {user ? (
//   <>
//     <span className="navbar-text mr-3">Hello, {user.username}</span>
// <Button variant="outline-danger" onClick={handleLogout}>
//   Logout
// </Button>
//   </>
// ) : (
//   <>
//     <li className="nav-item">
//       <Link className="nav-link" to="/login">
//         Login
//       </Link>
//     </li>
//     <li className="nav-item">
//       <Link className="nav-link" to="/signup">
//         Register
//       </Link>
//     </li>
//   </>
// )}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
import { useValue } from "../AuthContext";
import NavLink from "react-bootstrap/esm/NavLink";

import { toast } from "react-toastify";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  const navigate = useNavigate();
  const { user, logout } = useValue();

  const handleLogout = () => {
    toast.success(` Logged out Successfully`);
    logout();
    navigate("/");
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Book Platform Exchange</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {user && (
              <>
                <Nav.Link href="/postbook">PostBook</Nav.Link>
                <Nav.Link href="/resetPassword">ResetPassword</Nav.Link>
              </>
            )}

            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            {user ? (
              <Button variant="outline-danger" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">SignUp</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
