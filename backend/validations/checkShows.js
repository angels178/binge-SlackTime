const checkName = (req, res, next) => {
  const { name } = req.body;

  console.log(req.body);
  if (!name) {
    res.status(404).json({ error: "Name is required" });
  } else {
    next();
  }
};

const checkBoolean = (req, res, next) => {
  const { is_favorite } = req.body;

  if (typeof is_favorite !== "boolean") {
    res.status(404).json({ error: "is_favorite must be a boolean value" });
  } else {
    next();
  }
};

const checkURL = (req, res, next) => {
  const { url } = req.body;
  if (url.substring(0, 7) === "http://" || url.substring(0, 8) === "https://") {
    return next();
  } else {
    res
      .status(400)
      .json({ error: "You forgot to start your url with http:// or https://" });
  }
};

module.exports = { checkName, checkBoolean, checkURL };
