const express  = require('express');
const app = express();

const path  = require('path');


app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res)=>{
    res.render('sixos/home')
});

app.listen(3000, ()=>{
    console.log('app is listening on port 3000')
})