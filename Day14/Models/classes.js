const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    class_name: {
        type: String,
        required: true,
    },
    _course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
});


module.exports = mongoose.model('Class', classSchema);

