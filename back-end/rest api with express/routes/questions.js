const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

const verify = require("./verifyToken");


//POST A QUESTION
router.post("/new", verify, async (req, res) => {
    const question = new Question({
        auther: req.body.auther,
        autherUniqueId: req.body.autherUniqueId,
        title: req.body.title,
        views: 0,
        description: req.body.description,
        image: req.body.image,
        category: req.body.category,
    });

    try {
        const questionData = await question.save();
        res.json(questionData);
    } catch (err) {
        res.json({ message: err });
    }
});


//UPDATE SPEFIC POST
router.patch("/updateviews/:questionId", async (req, res) => {
  try {
    const updatedQuestion = await Question.updateOne(
      { _id: req.params.questionId },
      { $set: { views: req.body.views } }
    );
    res.json(updatedQuestion);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET USER'S QUESTIONS
router.get("/viewbyuser/:userId",async (req, res) => {
    try {
        const userQuestions = await Question.find({ autherUniqueId: req.params.userId}).sort({_id:-1}) ;
        res.json(userQuestions);
    } catch (err) {
        res.json({ message: err });
    }
});

//GET ALL QUESTIONS
router.get("/all",async (req, res) => {
    try {
        const allQuestions = await Question.find({}).sort({_id:-1}) ;
        res.json(allQuestions);
    } catch (err) {
        res.json({ message: err });
    }
});

//UPDATE SPECIFIC QUESTION(add new comment)
router.patch("/:questionId", async (req, res) => {
    try {
        const updatedQuestion = await Question.updateOne(
            { _id: req.params.questionId },
            { $push: { comments : { auther: req.body.comments.auther, autherUniqueId: req.body.comments.autherUniqueId, comment: req.body.comments.comment} } }
        );
        res.json(updatedQuestion);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
