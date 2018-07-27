var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    sass = require("node-sass")

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var prefixes = ["insta", "up", "re", "air", "mega", "go", "cu", "open", "cloud"];
var suffixes = ["tastic", "ify", "ly", "ily", "y", "ery", "ize", "ious", "al", "ance", "ism", "spot"];
var endwords = ["guru", "lab", "labs", "now", "space", "cloud"];
var generateNames = function(str) {
    // Clean string of all non-word characters
    str = str.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, '');
    var words = str.split(" ");
    var names = [];
    words.forEach(word => {
        prefixes.forEach(prefix => {
            names.push(prefix + word);
        });
        suffixes.forEach(suffix => {
            names.push(word + suffix);
        });
        endwords.forEach(endword => {
            names.push(word + " " + endword);
        });
    });
    return names;
}

app.get("/", function (req, res) {
    res.render("index");
})

app.post("/submit", function(req, res) {
    namesArray = generateNames(req.body.query);
    res.render("index", {names: namesArray});
})

app.listen(4000, function () {
    console.log("brandapp server is up on 4000")
})
