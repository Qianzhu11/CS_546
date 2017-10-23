const express = require("express");
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;

router.get("/recipes", async (req, res) => {
    try {
        const recipeList = await recipeData.getAllRecipe();
        res.json(recipeList);
    } catch (e) {
        res.status(500).json({error: e});
    }
});

router.get("/recipes/:id", async (req, res) => {
    try {
        const recipe = await recipeData.getRecipeById(req.params.id);
        res.json(recipe);
    } catch (e) {
        res.status(404).json({error: "Recipe not found"});
    }
});

router.post("/recipes", async (req, res) => {
    const recipeData = req.body;
    try {
        const {id, title, ingredients, steps, comments} = recipeData;
        const newRecipe = await recipeData.addRecipe()

        res.json(newRecipe);
    } catch (e) {
        res.status(500).json({error: e});
    }
});

router.put("/recipes/:id", async (req, res) => {
    const updatedData = req.body;
    try {
        await recipeData.getRecipeById(req.params.id);
    } catch (e) {
        res.status(404).json({error: "Recipe not found"});
    }

    try {
        const updatedRecipe = await recipeData.updateRecipe(req.params.id, updatedData);
        res.json(updatedRecipe);
    } catch (e) {
        res.status(500).json({error: e});
    }
});

router.delete("/recipes/:id", async (req, res) => {
    try {
        await recipeData.getRecipeById(req.params.id);
    } catch (e) {
        res.status(404).json({error: "Recipe not found"});
    }
    try {
        await recipeData.removeRecipe(res.params.id);
    } catch (e) {
        res.status.json({error: e});
    }
});

module.exports = router;