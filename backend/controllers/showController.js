const express = require("express");
const router = express.Router();

const {
  getAllShows,
  getShowById,
  createShow,
  deleteShowById,
  updateShowById,
} = require("../queries/shows");

const {
  checkName,
  checkBoolean,
  checkURL,
} = require("../validations/checkShows");

router.get("/", async (req, res) => {
  const shows = await getAllShows();

  if (shows) {
    res.json(shows);
  } else {
    res.status(500).send({ error: "Server error!" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const singleShow = await getShowById(id);

  if (singleShow.length === 0) {
     return res.status(404).send({ error: "Show cannot be found!" });
  } else {
   return res.json(singleShow[0]);
  }
});

router.post("/", checkName, checkBoolean, async (req, res) => {
  const createdShow = await createShow(req.body);

  res.json(createdShow);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleteSingleShow = await deleteShowById(id);

    res
      .status(200)
      .json({ message: "Show deleted successfully", deleteSingleShow });
  } catch (error) {
    res.status(404).json({ message: "Data not found", error: error.message });
  }
});

router.put("/:id", checkName, checkBoolean, checkURL, async (req, res) => {
  const updatedShow = await updateShowById(req.params.id, req.body);

  if (updatedShow === 0) {
    return res
      .status(404)
      .json({ error: true, message: "Update is not found!" });
  } else {
    return res.json(updatedShow[0]);
  }
});

module.exports = router;
