const express = require('express')


const app = express()
const path = require('path')
const publicPath = path.join(__dirname,'..','public')

app.use(express.static(publicPath))
const port = process.env.PORT  || 3002

const path1 =`${publicPath}/index.html`

app.get('*',(req,res)=>{
    res.sendFile(path.join(publicPath,'index.html'))
})

app.listen(port ,()=>{
    console.log(path1)
console.log(`Running on ${port}`)
})

