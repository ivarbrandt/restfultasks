const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/REST", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to the database"))
  .catch(err =>
    console.log("Something went wrong when connecting to the database", err)
  );
