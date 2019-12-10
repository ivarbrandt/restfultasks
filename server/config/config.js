const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/REST",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
    .then(console.log("Succesfully connected to MongoDB"))
    .catch(err => res.json(err))
);
