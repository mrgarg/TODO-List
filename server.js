const express = require('express')
const server = express()
const toDoRoute = require('./routes/todos')

server.use(express.json())
server.use(express.urlencoded({extended:true}))


server.use('/',express.static(__dirname+"/public"))
server.use('/todos',toDoRoute)


server.listen(5000,()=>{
    console.log("Server started at http://localhost:5000")
})