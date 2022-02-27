const express = require('express')
const bodyParser = require('body-parser')

const api = require('./api')

const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json()) 

app.use(express.static('public'))    // Liên kết để sử dụng file trong folder public

app.set('view engine', 'ejs')
app.set('views', './public')

app.use('/api', api)   // Sử dụng api vừa import từ file api.js

app.listen(port, () => console.log(`Example app listening on port ${port}!`))