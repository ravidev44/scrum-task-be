const Users = require("../Modals/user");

const signup = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  try {
    const findUser = await Users.findOne({ email });
    if (findUser) {
      return res.send({ message: "This email already exists" });
    }
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) throw new Error(err);
      else {
        const data = new Users({
          name,
          email,
          ispremium: false,
          password: hash,
          total: 0
        });
        const result = await data.save();
        return res.send(result);
      }
    });
  } catch (err) {
    res.status(500).send({
      message: "Some error occured, Please try after some time.",
      error: err
    });
  }
};

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  const generateToken = () => {
    return jwt.sign({ userEmail }, process.env.JWT_KEY);
  };
  try {
    const user = await Users.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).send({
        message: "This email is not registered",
        login: false
      });
    }

    const result = await bcrypt.compare(userPassword, user.password);
    if (result) {
      res.send({
        message: "Login successfully",
        login: true,
        token: generateToken()
      });
    } else {
      res.status(401).send({
        message: "Password incorrect",
        login: false
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Some error occured, Please try after some time.",
      login: false
    });
  }
};

module.exports = { login, signup };
