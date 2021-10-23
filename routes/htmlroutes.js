const path = require("path");
const router = require('express').utils();

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Export the router


module.exports = router;