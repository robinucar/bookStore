const User = require('../model/UserModel');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
exports.auth_register = async (req, res) => {
  //Register function
  const { firstName, lastName, email, password } = req.body;

  //TODO: VALIDATION
  const validationErr = validationResult(req);
  if (validationErr?.errors?.length > 0) {
    return res.status(400).json({ errors: validationErr.array() });
  }
  // CHECK ALREADY REGISTERED (email)

  const userData = await User.findOne({ email });
  if (userData) {
    return res
      .status(400)
      .json({ errors: [{ message: 'Users already exist' }] });
  }

  //BCRYPT PASSWORD
  const salt = await bcrypt.genSalt(10);
  newPassword = await bcrypt.hash(password, salt);

  //SAVE THE USER TO DB
  const user = new User({
    firstName,
    lastName,
    email,
    password: newPassword,
  });

  await user.save();

  //TODO: ERROR HANDLING FOR SAVING
  res.send('Register completed');
};

exports.authLogin = (req, res) => {
  //TODO: Authentication
  //TODO: Login Function
  res.send('Login completed');
};
