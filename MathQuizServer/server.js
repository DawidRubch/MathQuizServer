const express = require('express');

const app = express();



//Routes

app.get('/', (req, res) => { res.send('HomePage') });


//Server listen
app.listen(3000);
