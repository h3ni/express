const express = require("express");
const app = express();
const PORT = 5000;

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server is running on ${PORT}`);
});

const time = new Date();
const hours = time.getHours();
const day = time.getDay();

if (hours >= 9 && hours < 18) {
  app.use(express.static("open"));
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/open/home.html");
  });
  app.get("/our-services", (req, res) => {
    res.sendFile(__dirname + "/open/service.html");
  });
  app.get("/contact-us", (req, res) => {
    res.sendFile(__dirname + "/open/contact.html");
  });
} else {
  app.use(express.static("closed"));
  app.get("/*", (req, res) => {
    res.sendFile(__dirname + "/closed/index.html");
  });
}
