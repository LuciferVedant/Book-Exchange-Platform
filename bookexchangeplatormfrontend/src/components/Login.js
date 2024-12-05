import React, { useState } from "react";
import { useValue } from "../AuthContext.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, Button, Card, Container, Spinner } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const { login, user } = useValue();
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoggingIn(true);

    if (!email || !password) {
      toast.error("Please Enter all the fields mentioned", { autoClose: 2000 });
      setLoggingIn(false);
      return;
    }

    const response = await login(email, password);
    if (response.success) {
      toast.success("Successfully Logged In", { autoClose: 2000 });
      navigate("/");
    } else {
      toast.error(response.message, { autoClose: 2000 });
    }

    setLoggingIn(false);
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card className="p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <Card.Body>
          <h3 className="text-center mb-4">Log In</h3>
          <Form onSubmit={handleSubmit}>
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

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              disabled={loggingIn}
            >
              {loggingIn ? (
                <Spinner
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                "Log In"
              )}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
