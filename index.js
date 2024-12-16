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
app.get("/findMessages",(req,res)=>{
  return res.status(200).json({"messages":messages})
})
app.post("/message",(req,res)=>{
  const {text,user} = req.body;
  const timeStamp = new Date().toISOString
  if(!text || !user){
    return res.status(400).json({ "error": "Please provide a valid input" })
  }
  const mes = {"user":user,"text":text,"timestamp":timeStamp}
  messages.push(mes);
  return res.status(200).json({"message":mes})
})


module.exports = { app, messages };
