const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, 'A todo must have a name'],
  },
  description: {
    type: String,
    require: [true, 'A todo must have a description'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

// Update the 'updatedAt' field before saving the document
todoSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
