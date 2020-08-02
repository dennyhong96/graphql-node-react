const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  genre: {
    type: String,
    enum: ["Fantasy", "Sci-Fi"],
    required: true,
  },
  authorId: {
    type: mongoose.Schema.ObjectId,
    ref: "Author",
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
