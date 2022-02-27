const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullname:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    _class_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    }]
});


module.exports = mongoose.model('User', userSchema);

