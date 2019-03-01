const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Posts Schema
const PostsSchema = new Schema({
  userId: {
    type: Number,
    required: false
  },
  id: {
    type: Number,
    reqiured: false
  },
  title: {
    type: String,
    rquired: false
  },
  body: {
    type: String,
    required: false
  }
});

module.exports = Posts = mongoose.model("posts", PostsSchema);
