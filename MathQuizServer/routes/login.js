
const express = require('express');

const router = express.Router();


router.post('/', async (req, res) => {
    const user = users.find(
        user => user.email === req.body.name || user.name === req.body.name
    )
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }

    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
        } else {
            res.send('Not Allowed')
        }
    } catch (err) {
        res.status(500).send()
        console.log(err)
    }
})


module.exports = router;