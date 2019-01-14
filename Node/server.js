let express = require('express');
let app = new express();
const fs = require('fs');


app.get('/', (req,res) => {
    fs.readFile('../WebApp/index.html', (err,data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        if(err){
            res.send(err);
            res.end();
        }else{
            res.write(data);
            res.end()
        }
    });
});

app.listen(3001);