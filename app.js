const express = require('express')
const path = require('path')
const pug = require('pug')

const app = express() 
app.use(express.urlencoded({extended:true}))
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname)))

app.get('/',(req,res) =>{
    res.render('1')
})
var data
app.post('/',(req,res)=>{
    console.log(req.body)
    data = req.body
    res.render('resume')
})

app.get('/api/data',(req,res)=>{
    res.json(data)
})

app.listen(4000,()=>{
    console.log('running')
})