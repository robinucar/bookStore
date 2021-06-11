const User = require('../model/UserModel');
const bcrypt = require('bcryptjs');
exports.auth_register = async (req, res) => {
  //TODO: Register function

  const { firstName, lastName, email, password } = req.body;

  //TODO: VALIDATION
  //TODO: CHECK ALREADY REGISTERED

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
