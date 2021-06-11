exports.auth_register = (req, res) => {
  //TODO: Register function

  const { firstName, lastName, email, password } = req.body;
  console.log('FIELDS: ', firstName, lastName, email, password);
  //TODO: VALIDATION
  //TODO: CHECK ALREADY REGISTERED
  //TODO: CRPYT PASSWORD
  //TODO: SAVE THE USER TO DB
  res.send('Register completed');
};

exports.authLogin = (req, res) => {
  //TODO: Authentication
  //TODO: Login Function
  res.send('Login completed');
};
