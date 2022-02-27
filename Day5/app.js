const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./api');
const app = express()
const port = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// set folder contain files view
app.set('views', path.join(__dirname, '/public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/question', function(req, res) {
  var options = {
    root: path.join(__dirname, 'public')
  }
  res.sendFile('/question.html', options);
})

app.use(express.static('./public'))
app.use('/api', api);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))




//  ---------------------------------------------------------------------

// http method : 
// app.get('/', (req, res) => res.send('Hello World!'))

// app.post('/', function (req, res){
    
// })

// app.put('/', function (req, res){

// })

// app.delete('/', function (req, res){

// })

