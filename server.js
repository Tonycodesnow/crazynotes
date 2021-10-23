const express = require('express');

const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;
// ===========================================================

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

require('./routes/htmlroutes.js')(app);

require('./routes/apiroutes.js')(app);

  // Listener
  // ===========================================================
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
  