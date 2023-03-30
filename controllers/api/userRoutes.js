const router0987 = require("express").Router();
const { User } = require("../../models");

router0987.post("/", async (req, res) => {
  try {
    const bulkingfire = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = bulkingfire.id;
      req.session.logged_in = true;

      res.status(200).json(bulkingfire);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router0987.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Error email or passwords do not match try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Error email or passwords do not match try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You made it!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router0987.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router0987;
