const mailer=require("nodemailer");

let transporter=mailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:"fz4644444@gmail.com",
        pass:"duilufrrpwzfemdu"
    }
})
module.exports={transporter};