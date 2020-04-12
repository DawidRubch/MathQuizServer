const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

app.use(express.json())

const users = []

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', async (req, res) => {
    try {

        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { name: req.body.name, password: hashedPassword }

        console.log(hashedPassword)
        users.push(user)
        res.status(201).send()
    } catch (err) {
        res.status(500).send()
        console.log(err)
    }
})

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name === req.body.name)

})

//Server listen
app.listen(3000)
