var express = require("express");
const { readCSV } = require("../readcsv");
var router = express.Router();

/* GET users listing. */
router.get("/", readCSV);

module.exports = router;
