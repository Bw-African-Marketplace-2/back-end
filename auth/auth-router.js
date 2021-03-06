const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // ----> npm i jsonwebtoken

const Users = require("./auth-model.js");
const secrets = require("../api/secrets.js");

router.get("/", (req, res) => {
    console.log("token", req.decodedToken);
  
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });
  


//================REGISTRATION=====================
router.post("/register", (req, res) => {
  let user = req.body; // username, password

  // rounds are 2 to the N times
  const rounds = process.env.HASH_ROUNDS || 14;

  // hash the user.password
  const hash = bcrypt.hashSync(user.password, rounds);

  // update the user to use the hash
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: error.message });
    });
});

// =================LOGIN=================
router.post("/login", (req, res) => {
  let { username, password } = req.body;

  // search for the user using the username
  Users.findBy({ username })
    .then(([user]) => {
      // if we find the user, then also check that passwords match
      if (user && bcrypt.compareSync(password, user.password)) {
        // produce a token
        const token = generateToken(user);

        // send the token to the client
        res.status(200).json({ message: "Welcome!", token, user });
      } else {
        res.status(401).json({ message: "You cannot pass!" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: error.message });
    });
});

// ============= GENERATING A TOKEN=================

function generateToken(user) {
  // the data
  const payload = {
    userId: user.id,
    username: user.username,
  };
  const secret = secrets.jwtSecret;
  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
