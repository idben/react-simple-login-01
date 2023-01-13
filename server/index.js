const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const fs = require("fs");
const users = JSON.parse(fs.readFileSync("./fakeData.json", 'utf8'));




app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  })
)

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

// api
app.post('/login', async (req, res)=>{
  try{
    const user = users.find((user)=>(user.email === req.body.email));
    if(!user){
      res.status(404).send('auth failed');
      return false;
    }
    const vaildPassword = (req.body.password === user.password)?true:false;
    if(!vaildPassword){
      res.status(400).json('auth failed');
      return false;
    }
    res.status(200).json(user);
  }catch(error){
    res.status(500).json(error);
  }
});

app.listen(8800, ()=>{
  console.log('backend server is running.')
})