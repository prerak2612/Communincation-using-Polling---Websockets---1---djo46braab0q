const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello World!");
});

const messages = [];

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post("/message", (req, res) => {
  const { text, user } = req.body;
  if (!text || !user) {
    return res.status(400).json({ error: "Please provide a valid input" });
  }
  const timeStamp = new Date().toISOString;
  const mes = { "user": user, "text": text, "timestamp": timeStamp };
  messages.push(mes);
  return res.status(200).json({ "message": mes });
});
app.get("/findMessages", (req, res) => {
  return res.status(200).json({ "messages": messages });
});

module.exports = { app, messages };
