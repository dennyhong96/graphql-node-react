const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    validate: {
      validator: (v) => v >= 0,
    },
  },
});

module.exports = mongoose.model("Author", authorSchema);
