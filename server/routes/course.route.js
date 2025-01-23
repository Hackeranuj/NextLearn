const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { createCourse, getCreatorCourses, editCourse, getCourseById, createLecture, getCourseLecture, editLecture, removeLecture, getLectureById, togglePublish, getPublishCourse, searchCourse } = require("../controllers/course.controller");
const upload = require("../utils/multer")

const router = express.Router();

// course create route
// router.route('/').post(createCourse);
router.post("/", isAuthenticated, createCourse);
router.get("/search", isAuthenticated, searchCourse);
router.get("/published-courses", getPublishCourse);
router.get("/", isAuthenticated, getCreatorCourses);
router.put("/:courseId", isAuthenticated, upload.single("courseThumbnail"), editCourse);
router.get("/:courseId", isAuthenticated, getCourseById);
router.post("/:courseId/lecture", isAuthenticated, createLecture);
router.get("/:courseId/lecture", isAuthenticated, getCourseLecture);
router.post("/:courseId/lecture/:lectureId", isAuthenticated, editLecture);
router.delete("/lecture/:lectureId", isAuthenticated, removeLecture);
router.get("/lecture/:lectureId", isAuthenticated, getLectureById);
router.patch("/:courseId", isAuthenticated, togglePublish);

module.exports = router;
// 8:33:00