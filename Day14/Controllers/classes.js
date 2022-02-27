const classModel = require('../Models/classes');

module.exports = {
    getClasses: function (req, res) {
        classModel.find({})
            .populate('_course_id')
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



    createClass: function (req, res) {
        const newClass = new classModel(req.body);
        newClass.save(function (err, data) {
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


    editClass: function (req, res) {
        classModel.findOneAndUpdate(
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

    deleteClass: function(req, res){

    }


}