const express = require("express");
const app = express()
const path =require('path')
const publicPath = path.join(__dirname,'..','public')

app.use(express.static(publicPath))

app.get('*',(req,res)=>{
    res.sendFile(path.join(publicPath,'index.html'))
})
app.listen(8000,()=>{
    console.log('server started .... ')
})