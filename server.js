const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cryptoJS = require("crypto-js");

//Users DataBase
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
console.log("vine1");

// //Middleware to use
// let decryptJS = async (req, res, next) => {
//   if (req.body.encoded) {
//     let bytes = cryptoJS.AES.decrypt(
//       req.body.encoded,
//       "TrackleeProjectSecretKey"
//     );
//     let decryptedData = JSON.parse(bytes.toString(cryptoJS.enc.Utf8));
//     console.log(decryptedData);
//     req.body = { ...decryptedData };
//     console.log("req body here", req.body);
//   }
//   next();
// };

//creating an instance of express
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongo from Mongoose

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to Mongo now."))
  .catch(err => console.log("Error", err));

// Passport middleware
//app.use(passport.initialize());

// Passport config
//require("./config/passport")(passport);

// Use Routes
//app.use("/users", decryptJS, users);
app.use("/users", users);
app.use("/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
