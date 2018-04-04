const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('*', (req,res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(3002, _ => {
    console.log('Web server running on port 3002')
})