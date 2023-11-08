const Book = require("./../models/bookModel");

exports.addBook = async (req, res) => {
  try {
    const newBook = await Book.create({
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
    });

    res.status(201).json({
      status: "success",
      message: "Book added successfully",
      data: {
        book: newBook,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Book addition unsuccessful",
      Error: err,
    });
  }
};

exports.viewAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    if (!books.length) {
      return res.status(400).json({
        status: "fail",
        message: "no books found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        books: books,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.viewBook = async (req, res) => {
  try {
    const book = await Book.findById({
      _id: req.params.book_id,
    });
    if (!book) {
      return res.status(400).json({
        status: "fail",
        message: `No book corresponding to id: ${req.params.book_id} was found`,
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        book: book,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      {
        _id: req.params.book_id,
      },
      {
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary,
      },
      {
        new: true,
      }
    );

    if (!updatedBook) {
      return res.status(400).json({
        status: "fail",
        message: `No book corresponding to id: ${req.params.book_id} was found`,
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        updatedBook: updatedBook,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete({
      _id: req.params.book_id,
    });
    if (!deletedBook) {
      return res.status(400).json({
        status: "fail",
        message: `No book corresponding to id: ${req.params.book_id} was found`,
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        deletedBook: deletedBook,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
