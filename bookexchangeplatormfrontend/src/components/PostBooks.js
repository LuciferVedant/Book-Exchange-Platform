import React, { useState } from "react";
import { postbooks } from "../api";
import { useNavigate } from "react-router-dom";
import { useValue } from "../AuthContext";
import { Form, Button, Container, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
const PostBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const navigate = useNavigate();
  const { user } = useValue();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!user) {
      return navigate("/login");
    }
    const response = await postbooks(title, author, genre);
    if (response.status) {
      toast.success("Book Posted Successfully", { autoClose: 2000 });
      setTitle("");
      setAuthor("");
      setGenre("");
      navigate("/");
    } else {
      toast.error(response.message, { autoClose: 2000 });
    }
  };
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Post a New Book</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAuthor">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGenre">
          <Form.Label>Book Genre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="success" type="submit" disabled={loading}>
          {loading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Posting Book...
            </>
          ) : (
            "Post Book"
          )}
        </Button>
      </Form>
    </Container>
  );
};

export default PostBooks;
