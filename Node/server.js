let express = require('express');
let app = new express();
let path = require('path');
const fs = require('fs');


app.get('/', (req,res) => {
    // fs.readFile('../WebApp/index.html', (err,data) => {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     if(err){
    //         res.send(err);
    //         res.end();
    //     }else{
    //         res.write(data);
    //         res.end()
    //     }
    // });
    res.sendFile(path.join(__dirname + '/../WebApp/index.html'));
});

app.listen(3001);