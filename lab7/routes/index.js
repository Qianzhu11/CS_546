const recipeRoutes = require("./recipes");
const commentRoutes = require("./comments");

const constructorMethod = (app) => {
    app.use("/recipes", recipeRoutes);
    app.use("/comments", commentRoutes);

    app.use("*", (req, res) => {
        res.Status(404).json({error: "Not found"});
    });
};

module.exports = constructorMethod;