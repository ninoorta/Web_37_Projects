require('./connect-mongo')
require('./mongo-demo')

const express = require('express')
const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()
const port = 9000


// middlewares
app.use(bodyParser.json())
// app.use(cookieParser())
app.use(session({
    secret: 'My secret string',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}))



// routes
app.get('/', (req, res) => {
    // // console.log('req cookies', req.cookies);
    // if(!req.cookies.id){
    //     res.cookie('id', Date.now())
    // }
    // res.send(req.cookies.id)

    // if(!req.session.time){
    //     req.session.time = Date.now()
    // }

    // res.json(req.session)

    let reqCount = req.session.count || 0
    req.session.count = reqCount + 1

    if (req.session.count > 20) {
        res.send('You request too many times!')
    } else {
        res.send(`You request ${req.session.count} times!`)
    }


})



app.use((err, req, res, next) => {
    let message = err.message
    res.status(500)
        .json({
            message
        })
})


// listen

app.listen(port, (err) => {
    console.log(err ? err : `Server is running at port : ${port}`);

})