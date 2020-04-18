const express = require('express');

const bcrypt = require('bcrypt')

const routers = express.Router();

const User = require('../User/usermodel');


routers.post('/', async (req, res) => {

    const nameExists = await User.exists({ name: req.body.name })

    const emailExists = await User.exists({ email: req.body.email })

    const hashedPassword = await bcrypt.hash(req.body.password, 10)


    if (!nameExists && !emailExists) {

        const user = User({
            name: req.body.name, email: req.body.email, password: hashedPassword
        })

        const savedUser = await user.save()

        res.json(savedUser)
    }
    else {

        res.send("Email or name already exists.")

    }
}
)




//Export
module.exports = routers;