var express = require("express");
var router = express.Router();
const controller = require("../controllers/mail.controller");

/* GET mail listing. */
router.get("/", controller.getMails);

/* POST mail */
router.post("/", controller.sendMail);

module.exports = router;
