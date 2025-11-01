const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req,res)=> res.json({ok:true}));
app.get('/api/hello', (req,res)=> res.json({msg:"hello from api"}));

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on ${port}`));
