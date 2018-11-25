const express=require('express');
const app=express();

const http=require('http');
const port = 3000;

app.listen(port, function(){
    app.get('/', (req, res) => res.send('Hello nabafzar!'))
  });


  module.export;