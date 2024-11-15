const task = require("../Modals/task");

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    await task.findByIdAndDelete(id);

    return res.send({ success: true, message: "Successfully deleted" });
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Unable to deleted", error });
  } finally {
  }
};

const createTaskBoard = async (req, res) => {
  try {
    const id = req.params.id;
    const createScrumData = await Task.findById(id);

    return res.send({ success: true, message: "Successfully deleted" });
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Unable to deleted", error });
  } finally {
  }
};

const updateTaskBoard = async (req, res) => {
  try {
    const id = req.params.id;
    const updateTaskBoard = await task.findByIdAndUpdate(id);

    return res.send({ success: true, message: "Successfully deleted" });
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Unable to deleted", error });
  } finally {
  }
};

const getTaskBoard = async (req, res) => {
  try {
    const id = req.params.id;
    const getTaskBoard = await task.find();

    return res.send({ success: true, message: "Successfully deleted" });
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Unable to deleted", error });
  } finally {
  }
};

module.exports = {
  createTaskBoard,
  updateTaskBoard,
  getTaskBoard,
  deleteTask
};
