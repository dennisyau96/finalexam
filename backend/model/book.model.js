const mongoose = require("mongoose");
const schema = mongoose.Schema;
const bookSchema = new schema({
  title: { type: String, required: true },
  author: {
    type: String,
    required: true,
  },
  description: { type: String },
});
const BookRecord = mongoose.model("BookRecord", bookSchema);
module.exports = BookRecord;
