require("dotenv").config()
const cors= require("cors");
const express = require("express");
const connectDB = require("./connectDB")
const Note = require("./Models/Notes")

const app =express();
const PORT = process.env.PORT || 8000;

connectDB();
app.use(cors());
app.use(express.urlencoded( { extended: true}));
app.use(express.json());


//get all NOTES
app.get("/api/notes",async(req,res)=>{
    try {
        const data= await Note.find({});

        if(!data){
            throw new Error ('An error accured while fetching notes.!')
        }
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json( {error: 'An error occurred while fetching notes..'})
    }
})




app.get("/",(req,res)=>{
    res.json("mi primera api")
})
app.get("*",(req,res)=>{
    res.sendStatus("404")
})

app.listen(PORT, ()=>{
    console.log(`Server is runnig on port: ${PORT}`)
})
