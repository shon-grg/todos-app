const User = require('../model/userModel');

// Get  all Users
exports.getAllUsers = async (req, res, next) => {
  try {
    const user = await User.find();

    res.status(201).json({
      status: 'success',
      result: user.length,
      data: {
        user,
      },
    });
  } catch (err) {
    err.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
