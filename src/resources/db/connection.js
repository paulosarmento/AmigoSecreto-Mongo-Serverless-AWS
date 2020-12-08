const mongoose = require("mongoose");

let conn = null;

// UihstddX7yKHg4BE

const URI =
  "mongodb+srv://secret:UihstddX7yKHg4BE@cluster0.qozqv.mongodb.net/secret?retryWrites=true&w=majority";

module.exports = async () => {
  if (!conn) {
    conn = mongoose.connect(URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    await conn;
  }
};
