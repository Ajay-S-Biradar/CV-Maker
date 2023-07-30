const express = require('express')
const path = require('path')
const pug = require('pug')

const port = process.env.PORT || 8000

const app = express()
app.use(express.urlencoded({extended:true}))
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname)))

var info1;
var info2

app.get('/',(req,res) =>{
    res.render('personalinfo')
})

app.post('/',(req,res)=>{
    info1 =  req.body
    console.log(req.body)
    res.redirect('/further')
})

app.get('/further',(req,res) =>{
    res.render('next')
})

app.post('/further',(req,res)=>{
    info2 =  req.body
    console.log(req.body)
    setTimeout(() => {
        res.redirect('/resume')
      }, 3000);
    
})

app.get('/resume', (req, res) => {
    setTimeout(() => {
      res.render('resume');
    }, 3000);
  });

app.get('/api/data1',(req,res)=>{
    res.json(info1)
})
app.get('/api/data2',(req,res)=>{
    res.json(info2)
})

app.listen(port,()=>{
    console.log("runnnig")
})
