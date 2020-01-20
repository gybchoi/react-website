var express = require("express");
var router = express.Router();

router.post("/login", (req, res) => {
  var access = false;
  if (req.body.id == "admin" && req.body.pwd == "1234") {
    req.session.logined = true;
    req.session.user = req.body.id;
    access = true;
  }
  access
    ? console.log(`Authorized to "${req.body.id}"`)
    : console.log("Access denied: " + req.body.id);
  res.json({ access });
});

router.get("/logout", (req, res) => {
  req.session.destroy();
});

router.get("/session", (req, res) => {
  res.json({ user: req.session.user });
});

module.exports = router;
