const express = require("express");
const { signup, login } = require("../Controller/auth");
const {
  deleteScrumBoard,
  createScrumBoard
} = require("../Controller/scrumBoard");
const {
  getTaskBoard,
  createTaskBoard,
  deleteTask,
  updateTaskBoard
} = require("../Controller/task");
const authentication = require("../Middleware/authentication");
const router = express.Router();

router.post("/signUp", signup);
router.post("/login", login);
router.use(authentication);
router.post("/getTask", getTaskBoard);
router.post("/createScrum", createScrumBoard);
router.post("/deleteScrum", deleteScrumBoard);
router.post("/createTask", createTaskBoard);
router.post("/deleteTask", deleteTask);
router.post("/updateTask", updateTaskBoard);

module.exports = router;
