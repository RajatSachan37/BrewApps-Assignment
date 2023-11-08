const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = 3000 || process.env.PORT;
const bookRouter = require("./routes/bookRoutes");

app.use("/api/", bookRouter);

mongoose
  .connect("<INSERT MONGODB CONNECTION STRING HERE>")
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Brewapps Assignment");
});

app.all("*", (req, res) => {
  res.send(`Can't find ${req.originalUrl} on this server`);
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
