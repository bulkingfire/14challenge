const routerasdf = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

routerasdf.post("/", withAuth, async (req, res) => {
  try {
    const posting123 = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(posting123);
  } catch (err) {
    res.status(400).json(err);
  }
});
routerasdf.delete("/:id", withAuth, async (req, res) => {
  try {
    const writtingdata = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!writtingdata) {
      res.status(404).json({ message: "ERRORS!!!!!!" });
      return;
    }

    res.status(200).json(writtingdata);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = routerasdf;
