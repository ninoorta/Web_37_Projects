const courseModel = require('../Models/courses');

module.exports = {
    getCourses: function (req, res) {
        courseModel.find({})
            .populate('_class_id')
            .exec(function (err, data) {
                if (err) {
                    res.json({
                        err: err,
                        success: false
                    })
                }
                else {
                    res.json({
                        data: data,
                        success: true
                    })
                }

            })
    },



    createCourse: function (req, res) {
        const newCourse = new courseModel(req.body);
        newCourse.save(function (err, data) {
            if (err) {
                res.json({
                    err: err,
                    success: false
                })
            }
            else {
                res.json({
                    data: data,
                    success: true
                })
            }
        })
    },


    editCourse: function (req, res) {
        courseModel.findOneAndUpdate(
            { _id: req.params.user_id },
            { $set: req, body },
            function (err, data) {
                if (err) {
                    res.json({
                        err: err,
                        success: false
                    })
                }
                else {
                    res.json({
                        data: data,
                        success: true
                    })
                }
            }
        )
    },

    deleteCourse: function(req, res){

    }


}