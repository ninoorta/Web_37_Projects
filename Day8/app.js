// getting-started.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect to db class manager
mongoose.connect('mongodb://localhost/classManager', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
// we're connected!
});

var userSchema = new mongoose.Schema({
    username: {
        // validation for schema
        type: String,
        required: [true, 'Username is required']
    },
    age: {
        type: Number,
        required: [true, 'Age is required']
    },
    _class_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    }
  });


  var classSchema = new mongoose.Schema({
      class_name:{
          type: String,
          required: true
      }
  });


  var User = mongoose.model('User', userSchema);
  var Class = mongoose.model('Class', classSchema);

  app.post('/api/create-user', function(req, res) {
    const newUser = new User(req.body);
    newUser.save(function(err, data){
        if(err){
            res.json({
                message: err
            })
        } else {
            res.json({
                message: 'Create user success',
                data: data
            });
        }
       
      });
  })

  app.get('/api/user', function(req, res){
    User.find({
        username: req.params.username
    })
    .populate('_class_id')
    .exec(function(err, data){
        if(err){
            res.json({
                message: err
            })
        } else {
            res.json({
                data: data
            });
        }
    })
  })

  app.post('/api/create-class', function(req, res) {
    const newClass = new Class(req.body);
    newClass.save(function(err, data){
        if(err){
            res.json({
                message: err
            })
        } else {
            res.json({
                message: 'Create user success',
                data: data
            });
        }
       
      });
  })

  

app.listen(3000, () => console.log('Example app listening on port 3000!'));