const express = require('express');
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({ extended: true })
);

const route = require('./Route/router');
const db = require('./config/database');
db();
const PORT = 5000;

app.use('/api',route);

app.listen(PORT,()=>{
    console.log('siuuu')
})
