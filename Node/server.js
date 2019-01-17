let express = require('express');
let app = new express();
let axios = require('axios');
let shell = require('shelljs');
const {spawn} = require('child_process')
let cors = require('cors');
let path = require('path');
const API_KEY = '511de09aed6883d2488a6a5ec9fde6a7';
const weatherAPIUrl = `https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`;

app.use(cors());
app.get('/', async (req,res) => {

// await axios.get(weatherAPIUrl)
//     .then(response => {
//         console.log(response.data);
//         res.send(response.data)
//     });
//
});


app.get('/close', (req,res) => {
    console.log("trying to close browser");
    res.send();
});
app.get('/clock', (req,res) => {
    const deploySh = spawn('./clock.sh');
   res.send();
});

app.listen(3001);