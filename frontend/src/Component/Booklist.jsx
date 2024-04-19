import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";

function Booklist() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    loadBook();
  }, []);

  function loadBook() {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        console.log(res);
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:5000/${id}`);
      loadBook();

      //   setBooks((b) => b.filter((element, id) => element.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="BookList">
      <div className="col-md-12">
        <br />
        <h2 className="display-4 text-center">Books List</h2>
      </div>
      <div className="display-4 text-center">{books.length}</div>
      <div className="col-md-11">
        <Link className="btn btn-info float-right" to="/new">
          + Add New Book
        </Link>
        <br />
        <br />
        <hr />
      </div>
      <div className="list">
        {books.map((book) => (
          <div key={book._id}>
            <BookCard book={book} />
            <button onClick={() => handleDelete(book._id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Booklist;
