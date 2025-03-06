const express=require("express");
const app=express();
app.use(express.json());
const cors=require("cors");
app.use(cors());
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/backend")
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection error:", err));
const User=require("./user");
const port=4000;
app.post("/backend/users",async(req,res)=>{
    try{
        let Users=new User(req.body);
        let result=await Users.save();
        res.send(result); 
    }
    catch(err){
        console.log(`error detectec${err}`);
    }
    
})
app.listen(port,()=>{
    console.log(`port is running on ${port}`);
})