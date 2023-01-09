const router = require("express").Router(); 
const path = require("path"); 

//html route for index.html
router.get('/', (req, res) => {
    res.sendFile (path.join(__dirname, "../public/index.html")
    );
});

//html route for notes.html
router.get('/notes', (req, res) => {
    res.sendFile (path.join(__dirname, "../public/notes.html")
    );
});


module.exports = router;