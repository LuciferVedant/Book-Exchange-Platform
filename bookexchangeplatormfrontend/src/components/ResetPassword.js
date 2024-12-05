import React, { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { useValue } from "../AuthContext.js";
import { toast } from "react-toastify"; // Optional: To show notifications
import { useNavigate } from "react-router-dom"; // Optional: To redirect after resetting password
import { resetpassword } from "../api";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { user } = useValue();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
  }

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    // Simple validation checks
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    const response = await resetpassword(password);
    if (response.success) {
      toast.success("Password reset successfully!", { autoClose: 2000 });
      navigate("/");
    } else {
      toast.error(response.message, { autoClose: 2000 });
      navigate("/resetpassword");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card
        className="p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleResetPassword}>
            <Form.Group className="mb-3" controlId="formNewPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Reset Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ResetPassword;
