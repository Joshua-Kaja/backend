const mongoose = require("mongoose");
// require("dotenv").config();
mongoose.set("strictQuery", false);
const localURI = "mongodb://localhost";
const onlineURI =
  "mongodb+srv://joshuakaja00233:OuGAJVbTx4Q9fKYr@cluster0.3btyevj.mongodb.net/?retryWrites=true&w=majority";

module.exports = (db_name) => {
  return mongoose
    .connect(`${onlineURI}`)
    .then((res) => console.log("Mongodb connected"))
    .catch((err) => console.log(err));
};
