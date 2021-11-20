const express = require("express");
const middlewares = require("../middlewares/middlewares");
const StudentControllers=require("../controllers/StudentControllers");
const TeacherControllers=require("../controllers/TeacherControllers");

const app = express();
app.use(middlewares);

 // **********TEACHER**********

app.use("/register/teacher",TeacherControllers.teacher_register);
app.use("/login/teacher",TeacherControllers.teacher_login);

// **********STUDENT**********
app.use("/register/student",StudentControllers.student_register);
app.use("/login/student",StudentControllers.student_login);


module.exports= app;