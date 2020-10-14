const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//POST A POST
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const postData = await post.save();
    res.json(postData);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET SPECIFIC CODE
router.get("/spefic/:postId", async (req, res) => {
  try {
    const speficPosts = await Post.findById(req.params.postId);
    res.json(speficPosts);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET ALL POSTS
router.get("/all", async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.json(allPosts);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE SPEFIC POST
router.delete("/:postId", async (req, res) => {
  try {
    const delectedPost = await Post.deleteOne({ _id: req.params.postId });
    res.json(delectedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//UPDATE SPEFIC POST
router.patch("/:postId", async (req, res) => {
  try {
    const delectedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(delectedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
