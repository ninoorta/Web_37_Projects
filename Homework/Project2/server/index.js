const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();
const port = 8080;
const router = require('./router')

const publicPath = path.join(__dirname, '../public')

// middlewares
app.use(bodyParser.json())


// routing

app.use('/', express.static(publicPath))


// apis routing
app.use('/api', router)




// error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500)
        .send(err.message)
})


// listen
app.listen(port, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Server is running at port: " + port);
        
    }
})
