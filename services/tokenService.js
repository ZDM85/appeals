const jwt = require("jsonwebtoken");

class TokenService {
  generateToken(payload) {
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "12h" });
    return { token };
  }
}

module.exports = new TokenService();
