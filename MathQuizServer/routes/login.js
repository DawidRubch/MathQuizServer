
const express = require('express');

const router = express.Router();

const User = require('../User/usermodel')
const bcrypt = require('bcrypt')



router.use(express.json());


router.post('/', async (req, res) => {
    const user = await User.find({ name: req.body.name })


    try {
        if (user == '') {
            res.send('User doesnt exists')

        }
        else {
            if (await bcrypt.compare(req.body.password, user[0]['password'])) {
                res.send('Success')
            }
            else {
                res.send('Not Allowed')
                console.log(user[0]['password'])
                console.log(req.body.password)
            }
        }
    }
    catch{
        res.send('Something went wrong')
    }
}
















    // const user = users.find(
    //     user => user.email === req.body.name || user.name === req.body.name
    // )
    // if (user == null) {
    //     return res.status(400).send('Cannot find user')
    // }

    // try {
    //     if (await bcrypt.compare(req.body.password, user.password)) {
    //         res.send('Success')
    //     } else {
    //         res.send('Not Allowed')
    //     }
    // } catch (err) {
    //     res.status(500).send()
    //     console.log(err)
    // }
)


module.exports = router;