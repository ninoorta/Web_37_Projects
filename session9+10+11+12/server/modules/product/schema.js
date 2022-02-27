const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, `Require 'title'`]
    },
    categories: [{
        type: ObjectId,   // contains many object ids
        ref: 'categories'   // MODEL_NAME
    }]
})


module.exports = schema