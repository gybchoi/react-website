var express = require("express");
var app = express();
var router = require("./server_modules/router");
var sessionParser = require("express-session");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  sessionParser({
    secret: "admin",
    resave: true,
    saveUninitialized: true
  })
);
app.use("/", router);

const port = 4000;

app.listen(4000, () => {
  console.log(`Server Listening on port ${port}.`);
});
