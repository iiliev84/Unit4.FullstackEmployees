import express from "express";
const app = express();
export default app;

// TODO: this file!

//Body parsing middleware
app.use(express.json())


//Routing
app.route('/').get((req,res)=>{
    res.send("Welcome to the Fullstack Employees API.")
})

//Error handling middleware
app.use((err,req,res,next)=>{
    console.log(err)
    res.status(500).send("An error occurerd " + err)
})
