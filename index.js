const express = require('express');

const app = express()
const testdata = require('./test.json')

const PORT = process.env.PORT || 5000


app.get('/',(req,res)=>{
    res.send("App is Testing")
})

app.get('/test',(req,res)=>{
    res.send(testdata)
})

app.listen(PORT,()=>{
    console.log(`App is running in ${PORT}`)
})