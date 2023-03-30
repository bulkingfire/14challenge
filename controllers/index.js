const router = require("express").Router();



const apiRoutes123 = require("./api");


const mainRoutes = require("./homeRoutes");



router.use("/", mainRoutes);


router.use("/api", apiRoutes123);

module.exports = router;
