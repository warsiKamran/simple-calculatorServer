const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// bodyParser -> we can parse the http request.
// urlencoded -> get access to the form data.

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

    // console.log(req.body.num1);  gives the first number
    // console.log(req.body);          gives the whole body

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;

    console.log(result);
    res.send("sum of two numbers is " + result);
});

app.listen("3000", function(){
   console.log("server started at 3000");
});

