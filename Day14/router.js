const express = require('express');

const userControllers = require('./Controllers/users');
const classControllers = require('./Controllers/classes');
const courseControllers = require('./Controllers/courses')

const router = express.Router();

router.route('users').get(userControllers.getUsers)
router.route('users').post(userControllers.createUser)
router.route('/users/:user_id').put(userControllers.editUser)
router.route('/users/:user_id').delete(userControllers.deleteUser);


router.route('classes').get(classControllers.getClasses)
router.route('classes').post(classControllers.createClass)
router.route('/classes/:class_id').put(classControllers.editClass)
router.route('/classes/:class_id').delete(classControllers.deleteClass);

router.route('courses').get(courseControllers.getCourses)
router.route('courses').post(courseControllers.createCourse)
router.route('/courses/:class_id').put(courseControllers.editCourse)
router.route('/courses/:class_id').delete(courseControllers.deleteCourse);


module.exports = router;