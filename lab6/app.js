const express = require("express");
let app = express();
let configRoutes = require("./routes");

app.get("/",(req,res)=>{
    res.send("");
});

configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});
