require('@google-cloud/debug-agent').start({ allowExpressions: true })
const express = require('express')
const app = express()
// for testing notif

app.get('/', (req, res) => {
    res.send('<h1>Hello World.</h1>')
})

app.get('/hello', (req, res) => {
    const name = req.query.name

    res.send(`<h1>Hello ${name}</h1>`)
})

app.get('/error', (req, res) => {
    res.send(`<h1>Hello ${name}</h1>`)
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is up and listening at port: ${PORT}`)
})

module.exports = app