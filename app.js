const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/home.html',function(req,res){
  res.sendFile(path.join(__dirname+'/home.html'));
  //__dirname : It will resolve to your project folder.
});


router.get('/about.html',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/contact.html',function(req,res){
  res.sendFile(path.join(__dirname+'/contact.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');