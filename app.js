const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); 

var task = [];

app.get("/", function(req, res) {
    var today = new Date();
    var options = { 
        weekday: 'long',
        day: "numeric",
        month: "long"
     };
    var day = today.toLocaleDateString('en-US', options);

    res.render("list", {
         kindOfDay: day,
         newListItem: task
        });
});

app.post("/",function(req,res){
    task.push(req.body.newEntry);

    res.redirect("/");

    // console.log(task);
})

app.listen(3001, function() {
    console.log("It's on");
});
