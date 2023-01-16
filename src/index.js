const express = require('express')
const app = express()
const mongoose = require('mongoose')


app.use(express())

mongoose.connect('')
.then(()=>console.log("connected to mongodb.."))
.catch((err)=>console.log(err))

app.use('/',routes)

app.listen('3001',()=>(console.log("running on port 3001")))