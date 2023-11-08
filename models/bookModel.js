const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book's title is required"],
  },
  author: {
    type: String,
    required: [true, " Book's author is required"],
  },
  summary: {
    type: String,
    required: [true, "Book's summary is required"],
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
