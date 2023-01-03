const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const uniqueID = require("uniqid");

//api get router
router.get("/notes", (req, res) => {
    const getdata = JSON.parse(fs.readFileSync("./db/db.json"));
    res.send(data)
});

//api post router
router.post("/notes", (req, res) => {
    let noteID = uniqueID();
    const postdata = json.parse(fs.readFileSync(".db/db.json"));
    res,jason(data)
    console.log(noteID);

    const userInput = {
        title: req.body.title,
        text: req.body.text,
        id: noteID
    };
    
    db.push(userInput);
    fs.writeFileSync("./db/db.json", json.stringify(data));
});

module.exports = router;