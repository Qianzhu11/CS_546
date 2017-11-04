const express=require("express");
const router=express.Router();
const aboutData={
    "name":"Qian Zhu",
    "biograpgy":"My name is Qian Zhu, and I have a variety of interests. Actually, I have been tired with studying at school. I would like to do something as I like",
    "favoriteShows": ["The Voice", "Hippop in China", "Running Man", "Where Are We Going? Dad"],
    "hobbies": ["Hiking", "Horsing", "Playing Mahjong"]
}

router.get("/",(req,res)=>{
    res.json(aboutData);
});

router.post("/",(req,res)=>{
    res.status(501).send();
});

module.exports=router;