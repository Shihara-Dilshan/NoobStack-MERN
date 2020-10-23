const express = require("express");
const router = express.Router();
const Question = require("../models/Question");


//POST A QUESTION
router.post("/new", async (req, res) => {
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

//GET ALL QUESTIONS
router.get("/all",async (req, res) => {
    try {
        const allQuestions = await Question.find({}).sort({_id:-1}) ;
        res.json(allQuestions);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;
