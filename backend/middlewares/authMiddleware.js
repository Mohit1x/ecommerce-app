const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decode;

    next();
  } catch (error) {
    console.log("error at auth middleWare :", error);
    return res.status(500).json({ message: "Invalid or expired token" });
  }
};

module.exports = requireAuth;
