const express = require("express")
const uuid = require("uuid")
const app = express()
const tableData = require("./src/data.js")

const port = 8888

let userToken

app.post('/login', (req, res) => {
    userToken = uuid.v4()
    res.send({
        token: userToken,
        nickName: 'zc817'
    })
})

app.post('/logout', (req, res) => {
    userToken = null
    res.send({
        success: true
    })
})

app.get('/tableData', (request, res) => {
    if (request.headers.authorization == userToken) {
        res.send(tableData)
    } else {
        res.sendStatus(401)
    }
})

app.listen(
    port, 
    () => console.log(`app is listening at port ${port}`)
)