const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')
const mongoose = require('mongoose');

// address 'mongodb' was defined in docker-compose
// mydb is the database name, it will be created automatically if it doesn't exist
mongoose.connect('mongodb://mongodb:27017/mydb', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error!'));
db.once('open', () => {
    console.log('Connected!');
})

const { Counter } = require('../models/counter');

const server = app.listen(port, () => {
    console.log(`Node.js server is listening at port ${port}`);
});

app.use(cors())

app.get('/', async (req, res) => {
    const count = await Counter.countDocuments();
    res.send(`${count} requests total.`);
});

app.get('/stat/', async (req, res) => {
    const datetime = (new Date()).toString();
    const clientInfo = req.headers['user-agent'];
    await Counter.insertMany([{ dateTime: datetime, clientInfo: clientInfo }]);
    const count = await Counter.countDocuments();
    res.send(`+1! ${count} requests total.`);
});


app.get('/about/', (req, res) => {
    res.send('<h3> Hello, sundalik</h3>');
});

