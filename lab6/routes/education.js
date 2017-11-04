const express=require("express");
const router=express.Router();
const educationData=[
    {
      "schoolName": "Commercial Kindergarten",
      "degree": "Going to primary school",
      "favoriteClass": "My favorite class is the art class, teacher would give us lots of time to paint by ourselves.",
      "favoriteMemory": "I was honored the first prize in the writting competition."
    },
    {
      "schoolName": "DongMen Primary School",
      "degree": "Going to junior high school",
      "favoriteClass": "My favorite class in primary school is music class. Students all would sing together or a single one was selected to present.",
      "favoriteMemory": "I was elected to be the captain of the school basketball team and led our team to be the 2nd place in the whole provience."
    },
    {
      "schoolName": "Experimental Junior High School",
      "degree": "Going to senior high school",
      "favoriteClass": "My favorite class is math class, just because I was good at math.",
      "favoriteMemory": "In junior high school, we usually had lots of time after, so wo wolud like to play cards together. Since then, my friends and I are interested in playing cards and mahjong."
    },
    {
        "schoolName": "Deron High School",
        "degree": "High school diploma",
        "favoriteClass": "There is no favorite class since the high school life is so boring, and we had to study all the day from morning till night.",
        "favoriteMemory": "Maybe physics class is some kind of interesting than the others beacause the teacher would like to talk a lot of his funny experience."
      }
]

router.get("/",(req,res)=>{
    res.json(educationData);
});

router.post("/",(req,res)=>{
    res.status(501).send();
});

module.exports=router;