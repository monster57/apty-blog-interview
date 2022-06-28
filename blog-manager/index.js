

const express = require('express')
const app = express();
const routes = require('./routes/blogRoutes');
var bp = require('body-parser');

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))



app.use('/', routes );


app.listen('3000');