const express = require("express");
const cors = require("cors");
const connectedDb = require("./Modals/MongoConnect");
const { configDotenv } = require("dotenv");
configDotenv();
const app = express();
app.use(cors());
const router = require("./routes/route");

app.use(express.json());
app.use("/api", router);
connectedDb().then(() => {
  app.listen(8000, () => {
    console.log("Server started on port 8000");
  });
});
