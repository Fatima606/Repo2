const express=require("express");
const router=express.Router();
const {db}=require("../database/mongo")

router.post('/',(req,res)=>{
    const review=req.body.review;
    const rev={
        "review":review
    }
    console.log(review);
    db.collection("reviews").insertOne(rev,(err,res)=>
    {
        if(err) throw err;
        else{
            console.log("Review added");
        }
    });

})
module.exports=router;