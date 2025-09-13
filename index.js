const express  = require('express');
const app = express();

const dotenv  = require('dotenv');
dotenv.config();

const ejsMate = require('ejs-mate');
const path  = require('path');

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);

app.set('views', path.join(__dirname, 'views'));

const sixosRoutes = require('./routes/sixos');

app.use('/', sixosRoutes);

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`App is Listening on Port ${PORT}`)
});