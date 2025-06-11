import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
  const token = req.cookies?.token;
  console.log(token, 'tokennnnnnnnnnnnnnnnnnnnnnn');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token in cookies' });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded,"decooooooooooooooooooooooooooooo")
  } catch (error) {
    console.log('Token verification error:', error.message);
    return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
  }

  req.user = {
    userId: decoded.id,
  };

  next();
};
