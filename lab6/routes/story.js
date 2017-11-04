const express=require("express");
const router=express.Router();

const storyData={
    "storyTitle": "In the woods",
    "story": "Thanks so much for sharing your darling cottage in the woods. The views of the lake are just spectacular and the cottage is very warm and charming. We loved sitting on the deck in the evening with a glass of claret, watching the ducks and listening to the crickets and frogs. The beds are very comfortable and the furnishings are nice. We'll definitely be back."
}

router.get("/",(req,res)=>{
    res.json(storyData);
});

router.post("/",(req,res)=>{
    res.status(501).send();
});

module.exports=router;