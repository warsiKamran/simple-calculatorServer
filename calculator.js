const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// bodyParser -> we can parse the http request.
// urlencoded -> get access to the form data.

//for normal-calculator
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


//for bmi-calculator
app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var result = weight/(height*height);

    res.send("Your BMI is: " + result);
});

app.listen("3000", function(){
   console.log("server started at 3000");
});

