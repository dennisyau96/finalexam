const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const uri = "mongodb+srv://yaumingleuk2:123456abc@dennisdb.7w21oc1.mongodb.net/";
const BookRecord = require("./model/book.model");
const router = express.Router();

app.use(express.json());
app.use(cors());
app.use("/", router);

//endpoint
//get all books
router.get("/", async (req, res) => {
  try {
    const data = await BookRecord.find();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});
//get one book
router.get("/:id", async (req, res) => {
  try {
    const data = await BookRecord.findById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});
//post a new book
router.post("/", async (req, res) => {
  try {
    const newBook = await BookRecord.create({
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
    });
    res.status(200).json("added");
  } catch (err) {
    console.log(err);
  }
});
//update a book
router.put("/:id", async (req, res) => {
  try {
    const book = await BookRecord.findByIdAndUpdate(req.body.id, {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
    });
    res.status(200).json("updated");
  } catch (err) {
    console.log(err);
  }
});

//delete a book

router.delete("/:id", async (req, res) => {
  try {
    const deleteBook = await BookRecord.findByIdAndDelete(req.params.id);
    res.status(200).json("delete a book");
  } catch (err) {
    console.log(err);
  }
});

mongoose
  .connect(uri)
  .then(() => {
    console.log("connected to db");
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`connected to port ${port}`);
    });
  });
