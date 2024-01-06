const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); 

let task = [];
let itask = [];

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
         newListItem: task,
         listName: "normal"
        });
});

app.post("/",function(req,res){
    let lst = req.body.list;
    console.log(lst);

    if(lst === "incognito")
    {
        itask.push(req.body.newEntry);
        res.redirect("/incognito");
    }
    else{
        task.push(req.body.newEntry);
        res.redirect("/");
    }

    // console.log(task);
})

app.get("/incognito", function(req,res){
    res.render("list",{
        kindOfDay: "Incognito Tasks",
        newListItem: itask,
        listName: "incognito"
    })
})


app.listen(3001, function() {
    console.log("It's on");
});
