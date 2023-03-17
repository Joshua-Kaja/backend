const express = require("express");
const cors = require("cors");
// require("dotenv").config();
const routes = require("../routes/v1/routes");
const keys = require("../keys.json");

const app = express();

app.set("keys", keys.inserviz);
require("./database/mongodb")(app.get("keys").db_name);

// Using CORS
app.use(cors());

//send post requests
app.use(express.json());

app.use("", routes);
if (process.env.NODE_ENV !== "test") {
  app.listen(process.env.PORT || 3001, () =>
    console.log("Server running on port 3001")
  );
}

module.exports = app;
