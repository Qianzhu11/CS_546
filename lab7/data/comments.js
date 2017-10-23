const mongoCollections = require("../config/mongoCollections");
const comments = mongoCollections.comments;
const recipes = require("./recipes");
const uuid = require('node-uuid');

let exportedMethods = {

    async getCommentByRecipeId(id) {
        const recipe = await recipes.getRecipeById(id);
        const allComments = new Array[recipe.comments.length];
        for (let i = 0; i < recipe.comments.length; i++) {
            commentArray[i] = {_id: recipe.comments[i]._id, recipeId: recipe._id, recipeTitle: recipe.title, poster: recipe.poster, comment: recipe[i].comments.comment};
        }

        if (!comment) throw "Comment not found";
        return allComments;
    },

    async getCommentByCommentId(id) {
        const commentCollection = await comments();
        const allRecipes = await recipes.getAllRecipes();
        const theRecipe;
        const theComment;
        for (let i = 0; i < allRecipes.length; i++) {
            for (let j = 0; j < allRecipes[i].comments.length; j++) {
                if (allRecipes[i].comments[j]._id === id) {
                    theRecipe = allRecipes[i];
                    theComment = allRecipes[i].comments[j].comment;
                }
            }
        }
        const comment = {_id: id, recipeId: theRecipe._id, recipeTitle: theRecipe.title, poster: theRecipe.poster, comment: theComment};
        if (!id) throw "Comment not found";
        return comment;
    },

    async addComment(id, poster, comment) {
        const commentCollection = await comments();

        const newComment = {
            _id: uuid.v4,
            poster: poster,
            comment: comment
        };

        const newInsertInformation = await commentCollection.insertOne(newComment);
        const newId = newInsertInformation.insertedId;
        return await this.getCommentByCommentId(newId);
    },

    async updateComment(id, updatedComment) {
        const commentCollection = await comments();

        const updatedCommentData = {};

        if (updatedComment.poster) {
            updatedCommentData.poster = updatedComment.poster;
        }

        if (updatedComment.comment) {
            updatedCommentData.comment = updatedComment.comment;
        }

        let updateCommand = {
            $set: updatedCommentData
        };

        const query = {
            _id: id
        };

        await commentCollection.updateOne(query, updateCommand);
    },

    async removeComment(id) {
        const commentCollection = await comments();
        const deletionInfo = await commentCollection.removeOne({_id: id});

        if(deletionInfo.deletedCount === 0) {
            throw `Could not delete comment with id of ${id}`;
        }
    },
}
