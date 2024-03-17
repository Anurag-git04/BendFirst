//step 1 create a folder
// step 2 move into folder
// step3 npm init -y
// steo 4 open folder using vscode
// step 5 npm i express
// step 6 create server.js

//server Instatiate
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
//Specificaly parse Json data & a
app.use(bodyParser.json());

// activate the server on 3000 port 
app.listen(8000, ()=>{
    console.log("Server start at port number  3000")
});

//Routes
app.get('/', (request,response)=>{
    response.send("Hello Jee , kaise ho saare");
})

app.post('/api/car', (request,response)=>{
    const{name,brand} = request.body;
    console.log(name)
    console.log(brand)
    response.send("Car submitted successfully")
}) 

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser : true,
    useUnifiedTopology:true
})
.then(()=> {console.log("Connection Succesfull")})
.catch( (error)=> {console.log("Recive an Error")} );

