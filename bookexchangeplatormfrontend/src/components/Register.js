import React, { useState } from "react";
import { useValue } from "../AuthContext.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, Button, Card, Container, Spinner } from "react-bootstrap";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signingUp, setSigningUp] = useState(false);
  const { user, signup } = useValue();
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSigningUp(true);

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please Enter all the fields mentioned", { autoClose: 2000 });
      setSigningUp(false);
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Password does not match with confirm password");
      setSigningUp(false);
      return;
    }

    const response = await signup(name, email, password);

    if (response.success) {
      toast.success(`${name} Signed Up Successfully`, { autoClose: 2000 });
      navigate("/login");
    } else {
      toast.error(response.message, { autoClose: 2000 });
    }

    setSigningUp(false);
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card className="p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <Card.Body>
          <h3 className="text-center mb-4">Sign Up</h3>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              disabled={signingUp}
            >
              {signingUp ? (
                <Spinner
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                "Sign Up"
              )}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
