const express=require("express");



exports.teacher_register=[async(req,res)=>{
    try{
        console.log("Controller====>Register");
    }
    catch(error)
    {
        console.log(error);
    }
}]

exports.teacher_login=[async(req,res)=>{
    try{
        console.log("Controller===>Login");
    }
    catch(error)
    {
        console.log(error);
    }
}]