var express = require("express");
var request = require("request");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("search");
});

app.get("/requests", function(req, res){
  var query = req.query.title;
  request("https://api.themoviedb.org/3/search/movie?api_key=9d9781d220644216c18018842d4d5b5f&query="+query, function(error, response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);
      res.render("results", {data:data});
    }
  });
});

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Movie Search App has started!!!");
});