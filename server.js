const express = require('express');
const { lstat } = require('fs');

const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
// ===========================================================

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// Data


// Routes
// ===========================================================

  // Listener
  // ===========================================================
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
