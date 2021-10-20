const express = require('express');
const { writeFile, copyFile } = require('./utils/writefile.js');
const fs = require('fs');

const path = require('path');

const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;
// ===========================================================

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// Data
app.get("/api/notes", (req, res) => {
    const notes = require("./db/db.json")
    res.json(notes)
});

// Routes
// ===========================================================
app.post("/api/notes", {

})
  // Listener
  // ===========================================================
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
