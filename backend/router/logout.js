const express=require('express')
const router = express.Router();

router.post("/",(req,res)=>{
    console.log("hi")
    res.clearCookie("token");
    res.json({
        success: true,
        message: "Logged out"
    });
})
module.exports=router