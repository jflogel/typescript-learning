var express = require('express');

var app = express();
app.use(express.static("app"));

app.listen(process.env.PORT || 3000);
console.log("NodeJS web server running on 0.0.0.0:3000");
