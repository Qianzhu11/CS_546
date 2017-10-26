const express = require('express');
const router = express.Router();
const data = require("../data");
const commentData = data.comments;

router.get("/recipe/:recipeId", async (req, res) => {
    try {
        const comment = await commentData.getCommentByRecipeId(req.params.id);
        res.json(comment);
    } catch (e) {
        res.status(404).json({error: "Comment not found"});
    }
});

router.get("/:commentId", async (req,res) => {
    try {
        const comment = await commentData.getCommentByCommentId(req.params.id);
        res.json(comment);
    } catch (e) {
        res.status(404).json({error: "Comment not found"});
    }
});

router.post("/:recipeId", async (req, res) => {
    const commentInfo = req.body;

    if (!commentInfo) {
        res.status(400).json({error: "You must provide data to create a comment"});
        return;
    }

    if (!commentInfo.poster) {
        res.status(400).json({error: "You must provide a poster"});
        return;
    }

    if (!commentInfo.comment) {
        res.status(400).json({error: "You must provide a comment"});
        return;
    }

    try {
        const newComment = await commentData.addComment(
            commentInfo.id,
            commentInfo.poster,
            commentInfo.comment
        );
        res.json(newComment);
    } catch (e) {
        res.sendStatus(500);
    }
});

router.put("/:recipeId/:commentId", async (req, res) => {
    const commentInfo = req.body;

    if (!commentInfo) {
        res.status(400).json({error: "You must provide data to update a comment"});
        return;
    }

    if (!commentInfo.poster) {
        res.status(400).json({error: "You must provide a poster"});
        return;
    }

    if (!commentInfo.comment) {
        res.status(400).json({error: "You must provide a comment"});
        return;
    }

    try {
        await commentData.getCommentByCommentId(req.params.id);
    } catch (e) {
        res.status(404).json({error: "Comment not found"});
        return;
    }

    try {
        const updatedComment = await commentData.updateComment(req.params.id, commentInfo);
        res.json(updatedComment);
    } catch (e) {
        res.sendStatus(500);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await commentData.getCommentByCommentId(req.params.id);
    } catch (e) {
        res.status(404).json({error: "Comment not found"});
        return;
    }

    try {
        await commentData.removeComment(res.params.id);
        res,sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
        return;
    }
});

module.exports = router;