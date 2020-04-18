const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv/config');


app.use(express.json());

app.get('/', (req, res) => {
    res.send(process.env.DUPA)
})


//Import Routes
const registerRoute = require('./routes/register');

const loginRoute = require('./routes/login');

app.use('/register', registerRoute);

app.use('/login', loginRoute);


//Db connection
require('dotenv/config');
mongoose.connect(process.env.DBCONNECTION,

    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })


mongoose.connection.on('connected', () => {
    console.log('Connected to db')
})


const port = 3000


//Server listen
app.listen(port, () => {
    console.log('Listening at port ' + port)
});
