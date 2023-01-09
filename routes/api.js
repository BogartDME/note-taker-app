const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const uniqueID = require("uniqid");

//api get router
router.get("/notes", (req, res) => {
    const noteInfo = JSON.parse(fs.readFileSync("./db/db.json"));
    res.send(noteInfo)
});

//api post router
router.post("/notes", (req, res) => {
    let noteID = uniqueID();
    const noteInfo = JSON.parse(fs.readFileSync("./db/db.json"));
    res.json(noteInfo)
    console.log(noteID);

    const userInput = {
        title: req.body.title,
        text: req.body.text,
        id: noteID
    };
    
    noteInfo.push(userInput);
    fs.writeFileSync("./db/db.json", JSON.stringify(noteInfo));
});

module.exports = router;