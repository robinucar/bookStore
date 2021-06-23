const User = require('../model/UserModel');

exports.getProfileInfo = async (req, res) => {
  try {
    const user = await User.findById(req.decodedUser._id).select('-password');
    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updatedProfileInfo = async (req, res) => {
  //TODO: UPDATE PROFILE FN.

  res.send('Profile Updated');
};
