const jwt = require("jsonwebtoken");
const user = require("../Modals/user");

module.exports = async (req, res, next) => {
  try {
    const token = req.header("token");
    if (!token)
      return res.json({
        message: "user is not authorized"
      });
    const { userEmail } = jwt.verify(token, process.env.JWT_KEY);

    const usr = await user.findOne({ email: userEmail }).exec();

    req.user = usr;
    next();
  } catch (error) {
    console.log("error", error);
    res.status(405).send({ success: false });
  }
};
