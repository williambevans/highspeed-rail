const router = require("express").Router();
const messageRoutes = require("./messages");

// messages routes
router.use("/messages", messageRoutes);

module.exports = router;
