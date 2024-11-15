const scrumBoard = require("../Modals/scrumBaord");

const deleteScrumBoard = async (req, res) => {
  try {
    const id = req.params.id;
    await scrumBoard.findByIdAndDelete(id);

    return res.send({ success: true, message: "Successfully deleted" });
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Unable to deleted", error });
  } finally {
  }
};

const createScrumBoard = async (req, res) => {
  try {
    const id = req.params.id;
    const createScrumData = await scrumBoard.findById(id);

    return res.send({ success: true, message: "Successfully deleted" });
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Unable to deleted", error });
  } finally {
  }
};

module.exports = {
  deleteScrumBoard,
  createScrumBoard
};
