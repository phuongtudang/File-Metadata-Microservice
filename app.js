var express = require("express");
var app = express();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });



app.set("view engine", "ejs");

app.get('/', function(req, res){
    res.render('index');
});

app.post('/get-file-size', upload.single('file'), function(req, res){
    res.json({
        size: req.file.size});    
});




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is runnning!!");
})