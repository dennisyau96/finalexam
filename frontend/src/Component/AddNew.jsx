import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AddNew() {
  const [TAtitle, setTAtitle] = useState("");
  const [TAauthor, setTAauthor] = useState("");
  const [TAdes, setTAdes] = useState("");
  const navigate = useNavigate();
  function handleAdd() {
    axios
      .post("http://localhost:5000/", {
        title: TAtitle,
        author: TAauthor,
        description: TAdes,
      })
      .then(() => {
        console.log("added");
        setTAauthor("");
        setTAdes("");
        setTAtitle("");
      })

      .catch((err) => [console.log(err)]);
  }

  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link className="btn btn-info float-left" to="/">
              Show Book List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <p className="lead text-center">Create new book</p>
            <form
              onSubmit={() => {
                handleAdd();
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  value={TAtitle}
                  onChange={(e) => {
                    setTAtitle(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={TAauthor}
                  onChange={(e) => {
                    setTAauthor(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  value={TAdes}
                  onChange={(e) => {
                    setTAdes(e.target.value);
                  }}
                />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
