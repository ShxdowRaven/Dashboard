var express = require("express");
var app = express();
var path = require("path");

// viewed at http://localhost:3000 or http://areez-lenovo-14w:3000/dashboard
app.get("/", function(req, res) {
    res.send("Default page");
});

app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname + "/dashboard.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname + "/notes.html"));
});

app.listen(3000, function() {
    console.log("Web server initialized");
});