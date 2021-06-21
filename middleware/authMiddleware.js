const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  //get token
  const token = req.header('token');
  //return error if token does not exist
  if (!token) {
    return res.status(401).json({ msg: 'No token' });
  }
  //verify token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
    console.log('decodedToken', decodedToken);
    if (err) {
      return res.status(401).json({ msg: 'Invalid token' });
    } else {
      req.decodedUser = decodedToken.userData;
      next();
    }
  });
};

module.exports = authMiddleware;
