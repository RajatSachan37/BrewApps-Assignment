const express = require("express");
const bookController = require("./../controllers/bookController");

const router = express.Router();

router.use(express.json());

router.route("/add-new-book").post(bookController.addBook);
router.route("/view-all-books").get(bookController.viewAllBooks);
router.route("/view-book/:book_id").get(bookController.viewBook);
router.route("/update-book/:book_id").patch(bookController.updateBook);
router.route("/delete-book/:book_id").delete(bookController.deleteBook);

module.exports = router;
