const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv/config');


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Imma savage');
})


app.get('/users', (req, res) => {
    res.json(req.body);
})



//Import Routes
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');

app.use('/register', registerRoute);
app.use('/login', loginRoute);




//Db connection
require('dotenv/config');
mongoose.connect(process.env.mongodbConnection,

    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to db'));



//Server listen
app.listen(3000);
