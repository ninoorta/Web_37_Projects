const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

const router = require('./router')

const app = express()
const port = 9000
const publicPath = path.resolve(__dirname, '../public')


// let path1 = path.join(__dirname, 'public')          // __dirname +  public
// let path2 = path.resolve(__dirname, 'public')

// console.log(publicPath);

// middlewares
app.use(bodyParser.json())


// routing
// static routing (hosting)
// console.log(__dirname);  // giá trị hiện tại thư mục của file


app.use('/', express.static(publicPath))
// app.use('/', express.static('../public'))
// C:\\Users\\admin\\Desktop\\Web37\\Project 2\\public    
// not this: C:\Users\admin\Desktop\Web37\Project 2\public



// apis routing
app.use('/api', router)

// app.post('/test-error', (req, res) => {
//     throw new Error('Error from test-error!')
// })


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
        console.log('Server opened at port: ' + port);
    }
})
