const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Not authenticated" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("Auth error:", error);
    return res.status(500).json({ message: "Invalid or expired token" });
  }
};

module.exports = requireAuth;
