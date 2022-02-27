const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 9000;

// const middleware1 = (req, res, next) => {
//     console.log('from middleware 1', req.method);
//     next();
// }

// const middleware2 = (req, res, next) => {
//     console.log('from middleware 2', req.path);
//     next();
// }

// app.use(middleware1);
// app.use(middleware2);

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    // req.body, req.method, req.header, req.query, ...
    // console.log(req);

    // res.send, res.end(), res.json(), res.status()
    // console.log(res);

    console.log('from handler')
    res.status(200)
        .send('Hello world!');
});

app.post('/test', (req,res) => {
    console.log(req.body);
    res.send('Post to /test !');
})


app.listen(port, (err) => {
    if (err) {
        console.error('Server open failed!');
        console.error(err);
    } else {
        console.log('Server is running at port', port);
    }
});




// 
