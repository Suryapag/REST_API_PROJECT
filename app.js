const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
app.use(express.json());

app.get('/health', (req,res)=> res.json({ok:true}));
app.get('/api/hello', (req,res)=> res.json({msg:"Hi Laalu!"}));
app.get('/api/stream', (req,res)=>{
    const filePath = path.join(__dirname, 'content', 'Text.txt');
    const stream = fs.createReadStream(filePath, {encoding:'utf8'});
    stream.on('open', () => {
      stream.pipe(res)
    })
    stream.on('error', (err) => {
      res.end(err)
    })
    return;
  })
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on ${port}`));
// check Hosting 

module.exports = app;