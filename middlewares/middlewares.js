const express= require("express");
const Route = express.Router();
const url=require("url");
Route.use(async (req,res,next)=>{
    const uuid = req.headers.uuid;
    const url_link = url.parse(req.url, true);
    const path = url_link.pathname;
    
    next();
})
module.exports=Route;