const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  console.log("testinggg");
  res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(3333, () => {
  console.log("testing");
});
