var express = require('express');
var API_KEY;
var fs = require('fs');
var GoogleUrl = require( 'google-url' );
var app = express();
var API_KEY;
fs.readFile('api_key.txt', 'utf8', function(err, contents) {
            if(err)throw err;
            API_KEY = contents;
});

app.use('/',express.static(__dirname + '/public'));

app.get('/:data//:url', function(req, res){
    var protocol = req.params.data;
    var address = req.params.url;
    var url = protocol + "//" + address;
    var urlregex =new RegExp( /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi );
    console.log(url);
    var urlObject = {};
    var googleUrl = new GoogleUrl( { key: API_KEY});
        if(urlregex.test(url))
        googleUrl.shorten( url, function( err, shortUrl ) {
        // shortUrl should be http://goo.gl/BzpZ54 
            if(err){
                console.log(err);
                urlObject["error"] = "invalid URL";
                res.json(urlObject);
                res.end();
            } 
            urlObject["original_url"] = url;
            urlObject["short_url"] = shortUrl;
            res.json(urlObject);
            res.end();
        
        } );
        else{
            urlObject["error"] = "invalid URL";
            res.json(urlObject);
            res.end();
        }
   
});

app.get('/:data', function(req, res){
    var urlObject = {};
    urlObject["error"] = "invalid URL";
    res.json(urlObject);
    res.end();
});
app.get('/:data/:anything', function(req, res){
    var urlObject = {};
    urlObject["error"] = "invalid URL";
    res.json(urlObject);
    res.end();
});

app.listen(process.env.PORT, process.env.IP,function () {
  console.log('Go to Window > Share > open Application!');
});
