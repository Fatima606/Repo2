const express=require("express");
const router=express.Router();
const {transporter}=require("../Nodemailer/nodemailer");
const {db}=require('../database/mongo')

router.post('/',(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const number=req.body.number;
    const date=req.body.date;
    const time=req.body.time;
    const mailOptions={
        from:'fatima zafar <fz4644444@gmail.com>',
        to:email,
        subject:"Hacking",
        html:"<p>hacked</p>"
    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if (error) throw error;
        else{
            console.log("email sent");
        }
    })
    const data={
        "name":name,
        "email":email,
        "number":number,
        "date":date,
        "time":time,
    }

    console.log(name,email,number,date,time);
    db.collection('users').insertOne(data,(err,res)=>{
        if (err) throw err;
        else{
            console.log("Data Added");
        }
    })
})
module.exports=router;