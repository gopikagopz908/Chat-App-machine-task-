import jwt from 'jsonwebtoken';

export const generateToken = (userId, options = {}) => {
  const payload = {
    id: userId,
    ...options.payload,
  };

  return jwt.sign(
    payload,
    process.env.JWT_SECRET || 'defaultsecretkey',
    {
      expiresIn: options.expiresIn || '30d',
    }
  );
};

export const verifyToken=(token,secret)=>{
    try {
        return jwt.verify(token,secret)
    } catch (error) {
       console.log(error) 
       return null
    }
}