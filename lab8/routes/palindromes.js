const express = require("express");
const route = express.Router();
const data = require("../data");
const palindrome = data.palindrome;

router.get("/static", (req, res) => {
    res.render("palindrome/static", {});
});

router.get("/server", (req, res) => {
    res.render("palindrome/server", {});
});