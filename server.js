const express = require("express");
const path = require("path");
const app = express();



// app.configure(() => {
//   app.use(express.bodyParser());
// });

app.listen(8000, () => {
  console.log("Listening on port 8000");
});

app.use(express.json(), express.urlencoded({ extended: true }), express.static(__dirname + "public/dist/public"));

app.all('*', (req, res) => res.sendFile(path.resolve(__dirname, "public/dist/public")))


// app.use(express.static(__dirname + "/public/dist/public"));

require("./server/config/config.js");
require("./server/routes/routes.js")(app);

