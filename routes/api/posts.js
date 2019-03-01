const express = require("express");
const router = express.Router();

//Requiring the  Post Model
const Posts = require("../../models/Posts");
const keys = require("../../config/keys");

//Router APIS

//@route GET api/posts/test
//@desc Test route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "Post Router works fine" }));

//@route Get api/posts/allPosts
//@desc Fetch all posts
//@access Public
router.get("/allPosts", (req, res) => {
  Posts.find({}, (err, docs) => {
    console.log(docs);
    if (docs.length > 0) return res.send(docs);
    else {
      return res.send({ error: "No Posts exist" });
    }
  });
});

module.exports = router;
