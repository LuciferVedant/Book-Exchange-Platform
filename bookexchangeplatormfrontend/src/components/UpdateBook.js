// import React from "react";
// import { useState, useEffect } from "react";
// import { updatebook } from "../api";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import styles from "../styles/login.module.css";
// import { useParams } from "react-router-dom";

// const UpdateBook = () => {
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [genre, setGenre] = useState("");
//   const [updatingbook, setUpdatingbook] = useState(false);
//   const { bookId } = useParams();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setUpdatingbook(true);
//     console.log(bookId);
//     const response = await updatebook(title, author, genre, bookId);
//     if (response.status) {
//       toast.success("Book Updated Successfully", { autoClose: 2000 });
//       navigate("/");
//     } else {
//       toast.error(response.message, { autoClose: 2000 });
//     }
//   };
//   return (
//     <form className="form-group" onSubmit={handleSubmit}>
//       <div className={styles.field}>
//         <input
//           placeholder="Enter Book Title"
//           type="text"
//           required
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </div>
//       <div className={styles.field}>
//         <input
//           placeholder="Enter Book Author"
//           type="text"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//         />
//       </div>
//       <div className={styles.field}>
//         <input
//           placeholder="Enter Book genre"
//           type="text"
//           required
//           value={genre}
//           onChange={(e) => setGenre(e.target.value)}
//         />
//       </div>
//       <button type="Submit" className="btn btn-primary">
//         {updatingbook ? "Updating..." : "Update Book"}
//       </button>
//     </form>
//   );
// };

// export default UpdateBook;
// UpdateBook.js
import React, { useState } from "react";
import { Form, Button, Container, Card, Spinner } from "react-bootstrap";
import { updatebook } from "../api";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [updatingBook, setUpdatingBook] = useState(false);
  const { bookId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdatingBook(true);

    try {
      const response = await updatebook(title, author, genre, bookId);
      if (response.status) {
        toast.success("Book Updated Successfully", { autoClose: 2000 });
        navigate("/");
      } else {
        toast.error(response.message, { autoClose: 2000 });
      }
    } catch (error) {
      toast.error("An error occurred while updating the book.", {
        autoClose: 2000,
      });
    } finally {
      setUpdatingBook(false);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card
        className="p-4 shadow-lg"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <Card.Body>
          <h3 className="text-center mb-4">Update Book</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBookTitle">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBookAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Book Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBookGenre">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Book Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              disabled={updatingBook}
            >
              {updatingBook ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />{" "}
                  Updating...
                </>
              ) : (
                "Update Book"
              )}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UpdateBook;
