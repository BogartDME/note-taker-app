const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const uniqueID = require("uniqid");


//api post router
router.post("/notes", (req, res) => {
    let noteID = uniqueID();
    const noteInfo = JSON.parse(fs.readFileSync("./db/db.json"));
    res.json(noteInfo)
    console.log(noteID);
});   
//api get router
router.get("/notes", (req, res) => {
    const noteInfo = JSON.parse(fs.readFileSync("./db/db.json"));
    res.send(noteInfo)
    
    const userInput = {
        title: req.body.title,
        text: req.body.text,
        id: noteID
    };
});

// //api post router
// router.post("/notes", (req, res) => {
//     let noteID = uniqueID();
//   const userInput = {
//         title: req.body.title,
//         text: req.body.text,
//         id: noteID
//     };
//     let noteInfo = JSON.parse(fs.readFileSync("./db/db.json")) || []
// noteInfo.push(userInput)
// fs.readFileSync("/db/db.json",JSON.stringify(noteInfo))
//     res.json(noteInfo)
//     console.log(noteID);
// }); 
  
// //api get router
// router.get("/notes", (req, res) => {
//   let noteInfo = JSON.parse(fs.readFileSync("./db/db.json"));
//     res.json(noteInfo)
    
  
// });

//delete
router.delete('/notes/:id', (req, res) => {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8")); // 
    let  = savedNotes.filter(x=>x.id!=req.params.id) 
fs.writeFileSync("./db/db.json", JSON.stringify(noteID));
});



// noteInfo.push(userInput);
// fs.writeFileSync("./db/db.json", JSON.stringify(noteInfo));


module.exports = router;