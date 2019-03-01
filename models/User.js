const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Users Schema
const UserSchema = new Schema({
  id: {
    type: Number,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  address: {
    street: {
      type: String,
      required: false
    },
    suite: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: false
    },
    zipcode: {
      type: String,
      required: false
    },
    geo: {
      lat: {
        type: String,
        required: false
      },
      lng: {
        type: String,
        required: false
      }
    }
  },
  phone: {
    type: String,
    required: false
  },
  website: {
    type: String,
    required: false
  },
  // password: {
  //   type: String,
  //   required: true
  // },
  company: {
    name: { type: String, required: false },
    catchPhrase: { type: String, required: false },
    bs: { type: String, required: false }
  }
});

// Here we are creating a new "Collection" called "Users" in the mongodb database that we have connected to in server.js and "User" is the reference to that collection in our project, this will contain all the entries which are called "documents" in the collection. This "User" is also a constructor function to create a new entry or document in the collection.
module.exports = User = mongoose.model("Users", UserSchema);
