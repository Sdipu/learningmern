const express = require('express'); //express connection 
const { dirname } = require('path');
const app = express()// expres use
var bodyParser = require('body-parser')// taking input 

const port = 3000
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));// connecting css to server


const mongoose = require('mongoose');// require mongoose
mongoose.connect('mongodb://localhost:27017/userpswd', {useNewUrlParser: true, useUnifiedTopology: true});


// model make
const user = mongoose.model('users', { email: String , pswd: String });
const user1 = new user({ email:'akash ',pswd:'123' });
user1.save().then(() => console.log('added'));


//find model



app.get('/', (req, res) => {
  res.render("login")

});



app.set('view engine', 'ejs');


app.get('/about', (req, res) => {
  res.render("about")
  });
  app.get('/home', (req, res) => {
    res.render("home")
  })
  app.get('/register', (req, res) => {
    res.render("register")
  })
  app.get('/civil', (req, res) => {
    res.render("result")
  })
  app.get('/computer', (req, res) => {
    res.render("computer")
  })
    app.get('/electronics', (req, res) => {
      res.render("electronics")
  })



  app.post('/',(req,res)=>{
    var name =req.body.num1;
    var pswd = req.body.num2;
    console.log(name);

  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
