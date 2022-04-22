const router = require('express').Router();
const commentController = require("../controllers/comment.controller");

router.post('/addComment',commentController.addComment)
router.delete('/deleteComment/:id',commentController.deleteComment)
module.exports = router;