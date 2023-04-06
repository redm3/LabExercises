const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.userController.getComments(res);
})

router.post('/create', (req, res) => {
    Controllers.userController.createComments(req.body, res)
})

module.exports = router;