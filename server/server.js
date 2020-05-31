const express = require('express')
const app = express()
const path = require('path')
const publicPath = path.join(__dirname,'..','public')

app.use(express.static(publicPath))
const port = 3000

app.get('*',(req,res)=>{
res.sendFile(path.join(publicPath,'index.html'))
})

app.listen(port ,()=>{
console.log(`Running on ${port}`)
})

