const express = require('express')
const fs = require('fs')

const router = express.Router();

// 1 api <=> 1 route = http method + url
 
router.route('/question')
    .get(function (req, res) {
        fs.readFile('./data.txt', 'utf8', function (err, data) {
            if (err) {
                res.send(err)
            } else {
                const questions = data.split('\n').filter(question => question !== '')
                const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
                res.render('question',{ question: randomQuestion})
            }
        })
    })
    .post(function (req, res) {
        const question = `${req.body.question}\n`
        fs.appendFile('./data.txt', question, function (err, data) {
            if (err) {
                res.send(err)
            } else {
                res.send('Succeeded!')
            }
        })
    })


router.route('/answer')
    .get(function(req,res) {
        // Do method = get nên không dùng req.body mà phải dùng req.query
        // const answer = req.query.answer == 1 ? 'Có/Đúng' : 'Không/Sai';
        res.render('answer', { answer : req.query.answer })
    })
    

// router.route('/question/:id')
//     .get(function(req,res){
//         fs.json
//     })

module.exports = router