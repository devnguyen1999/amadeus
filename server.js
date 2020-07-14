require("dotenv").config();
var compression = require("compression");
const express = require("express");
<<<<<<< HEAD
//const favicon = require("express-favicon");  <======
=======
//const favicon = require("express-favicon");
>>>>>>> a67d6e941f07998245abd3435505c3e9cd7b274a
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
app.use(compression());

<<<<<<< HEAD
//app.use(favicon(__dirname + "/build/favicon.ico")); <========
=======
//app.use(favicon(__dirname + "/app/build/favicon.ico"));
>>>>>>> a67d6e941f07998245abd3435505c3e9cd7b274a
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port);
