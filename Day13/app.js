// getting-started.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect to db gameScore
mongoose.connect('mongodb://localhost/gameScore', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    // we're connected!
});

const userSchema = new mongoose.Schema({
    username: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);

const roundSchema = new mongoose.Schema({
    scores: {
        type: [Number]
    }
});

const Round = mongoose.model('Round', roundSchema);

const gameSchema = new mongoose.Schema({
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    rounds: {
        type: [roundSchema]
    }
});

const Game = mongoose.model('Game', gameSchema);

// Create user
app.post('/users', function (req, res) {
    const newUser = new User(req.body);
    newUser.save(function (err, data) {
        if (err) {
            res.json({
                message: err
            })
        } else {
            res.json({
                message: 'Create User success',
                data: data
            });
        }

    });
})


// Create game

app.post('/games', function (req, res) {
    const newGame = new Game(req.body);
    newGame.save(function (err, data) {
        if (err) {
            res.json({
                message: err
            })
        } else {
            res.json({
                message: 'Create Game success',
                data: data
            });
        }

    });
})


app.get('/games/:gameId', function(req, res){
    Game.findById({ _id: req.params.gameId })
    .populate('users')
    .exec(function(err, data){
        if(!err){
            res.json({
                success: true,
                data: data
            })
        } else {
            console.log(err)
            res.json({
                success: false
            })
        }
    })
})


// app.post('/games', function (req, res) {
//     let newGame = new Game(req.body);
//     // const response = await newGame.save();
//     // console.log(response);
//     newGame.save(function (err, data) {
//         if(!err){
//             res.json({
//                 success: true,
//                 data: data
//             })
//         } else {
//             console.log(err);
//             res.json({
//                 success: false
//             })
//         }
//     });
// });


app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), function () {
    console.log(`Server start on ${app.get('port')}`);
});