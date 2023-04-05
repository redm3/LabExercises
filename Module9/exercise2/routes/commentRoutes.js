let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get('/', (req, res) => {
    Controllers.commentController.getComments(res);
})

router.post('/create', (req, res) => {
    Controllers.commentController.createComments(req.body, res)
})


module.exports = router;