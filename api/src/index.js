const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const teachers = require('./routes/teachers');
const students = require('./routes/students');
const mongo = require('./config/mongo');

app.use(bodyParser.json())

mongo.init();

//routes
app.get('/', (req, res) => res.send("Hello"));
app.use('/teachers' , teachers);
app.use('/students', students);


app.listen(3000, () => console.log("app is running on port 3000"));

