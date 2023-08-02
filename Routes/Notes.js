const router = require('express').Router();

const Note = require("./Models/Notes");

//get all NOTES
router.get("/", async (req, res) => {
    try {
      const data = await Note.find({});
  
      if (!data) {
        throw new Error("An error accured while fetching notes.!");
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching notes.." });
    }
  });
  
  //get  NOTES byId
  router.get("/:id", async (req, res) => {
    try {
      const notaId = req.params.id;
  
      const data = await Note.findById(notaId);
  
      if (!data) {
        throw new Error("An error accured while fetching notes.!");
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching notes.." });
    }
  });
  
  
  //post  NOTES 
   router.post("/", async (req, res) => {
    try {
      const {title, description, date} = req.body;
  
      const data = await Note.create({title, description,date});
  
      if (!data) {
        throw new Error("An error accured while create notes.!");
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching notes.." });
    }
  });
  
  //put  NOTES 
  router.put("/:id", async (req, res) => {
    try {
      const notaId=req.params.id
      const {title, description, date} = req.body;
  
      const data = await Note.findByIdAndUpdate(notaId,{title, description,date});
  
      if (!data) {
        throw new Error("An error accured while update notes.!");
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching notes.." });
    }
  });
  
  //delete  NOTES 
  router.delete("/:id", async (req, res) => {
    try {
      const notaId=req.params.id
  
      const data = await Note.findByIdAndDelete(notaId);
  
      if (!data) {
        throw new Error("An error accured while delete notes.!");
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching notes.." });
    }
  });

  module.exports = router