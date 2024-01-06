const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    var today = new Date();
    var options = { weekday: 'long' };
    var day = today.toLocaleDateString('en-US', options);

    res.render("list", { kindOfDay: day });
});

app.post("/",function(req,res){
    const task = req.body.newEntry;
    console.log(task);
})

app.listen(3001, function() {
    console.log("It's on");
});
