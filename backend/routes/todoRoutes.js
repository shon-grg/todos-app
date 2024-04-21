const express = require('express');
const todoController = require('../controller/todoController');
// const authController = require('../controller/authController');

const router = express.Router();

// router.use(authController.protect);

router
  .route('/')
  .get(todoController.getAllTodos)
  .post(todoController.createTodo);

router
  .route('/:id')
  .get(todoController.getTodo)
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo);

module.exports = router;
