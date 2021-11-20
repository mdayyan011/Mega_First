const express=require("express");



exports.student_register=[async(req,res)=>{
    try{
        console.log("Student Controller====>Register");
    }
    catch(error)
    {
        console.log(error);
    }
}]

exports.student_login=[async(req,res)=>{
    try{
        console.log("Student Controller===>Login");
    }
    catch(error)
    {
        console.log(error);
    }
}]