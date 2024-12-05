import React, { useEffect, useState } from "react";
import { deletebook, getbooks } from "../api/index.js";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useValue } from "../AuthContext.js";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const [Books, setBooks] = useState([]);
  const welcomeShownRef = useRef(false);
  const { user } = useValue();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getbooks();
      if (response.status) {
        setBooks(response.data);

        if (!welcomeShownRef.current) {
          toast.success("Welcome to Book Platform App", { autoClose: 2000 });
          welcomeShownRef.current = true;
        }
      } else {
        toast.error(response.message, { autoClose: 2000 });
      }
    };
    fetchBooks();
  }, []);

  const handleUpdate = (bookId) => {
    navigate(`/updatebook/${bookId}`);
  };

  const handleDeleteButton = async (e, bookId) => {
    e.preventDefault();
    console.log(bookId);
    const response = await deletebook(bookId);
    console.log(response);
    if (response.status) {
      toast.success("Book Deleted Successfully", { autoClose: 2000 });
      navigate("/");
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookId));
    } else {
      toast.error(response.message, { autoClose: 2000 });
    }
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">List of All the Books</h1>
      <Row>
        {Books.map((book) => (
          <Col key={book._id} xs={12} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  by {book.author}
                </Card.Subtitle>
                <Card.Text>Genre: {book.genre}</Card.Text>
              </Card.Body>

              {user && user.userID === book.owner && (
                <Card.Footer className="d-flex justify-content-between">
                  <Button
                    variant="primary"
                    className="btn-sm"
                    onClick={() => {
                      handleUpdate(book._id);
                    }}
                  >
                    Update
                  </Button>

                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={(e) => handleDeleteButton(e, book._id)}
                  >
                    Delete
                  </Button>
                </Card.Footer>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
