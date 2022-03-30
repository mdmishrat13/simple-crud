const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express()

app.use(cors());
app.use(express.json())

const users = [
]

app.get('/users',(req,res)=>{
    res.send(users)
    
})
app.post('/users',(req,res)=>{
    const newData=req.body;
    newData.id= users.length;
    users.push(newData)
    res.json(newData)
})

app.listen(port,()=>console.log('listening to port',port))