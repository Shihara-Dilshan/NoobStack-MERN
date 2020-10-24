const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

//POST A COURSE
router.post("/", async (req, res) => {
  const course = new Course({
    title: req.body.title,
    discription: req.body.description,
    price: req.body.price,
    imageUrl: req.body.imageUrl
  });

  try {
    const courseData = await course.save();
    res.json(courseData);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET SPECIFIC COURSE
router.get("/spefic/:courseId", async (req, res) => {
  try {
    const speficCourse = await Course.findById(req.params.courseId);
    res.json(speficCourse);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET ALL COURSES
router.get("/all",async (req, res) => {
  try {
    const allCourses = await Course.find();
    res.json(allCourses);
  } catch (err) {
    res.json({ message: err });
  }
});

//UPDATE SPECIFIC COURSE(add new content)
router.patch("/specific/:courseId", async (req, res) => {
  try {
    const updatedCourse = await Course.updateOne(
        { _id: req.params.courseId },
        { $push: { content : { title: req.body.content.title, description: req.body.content.description, imageUrl: req.body.content.imageUrl,  videoUrl: req.body.content.videoUrl} } }
    );
    res.json(updatedCourse);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET SPECIFIC COURSE
router.get("/spefic/:courseId", async (req, res) => {
  try {
    const speficCourse = await Course.findById(req.params.courseId);
    res.json(speficCourse);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE SPEFIC COURSE
router.delete("/:courseId", async (req, res) => {
  try {
    const delectedCourse = await Course.deleteOne({ _id: req.params.courseId });
    res.json(delectedCourse);
  } catch (err) {
    res.json({ message: err });
  }
});

//UPDATE SPEFIC COURSE
router.patch("/:courseId", async (req, res) => {
  try {
    const updatedCourse = await Course.updateOne(
      { _id: req.params.courseId },
      { $set: { title: req.body.title, description: req.body.description, price: req.body.price, imageUrl: req.body.imageUrl } }
    );
    res.json(updatedCourse);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
