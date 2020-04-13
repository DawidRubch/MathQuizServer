const express = require('express');

const router = express.Router();

const User = require('../User/usermodel');

router.get('/', (req, res) => {
    res.send('ImmaSavage')
})

router.post('/', async (req, res) => {

    const user = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    });

    try {
            const userLoggedin = await user.save();
            res.json(userLoggedin);
    } catch (err) {
        res.status(500).send()
        console.log(err)
    }
})


//Export
module.exports = router;