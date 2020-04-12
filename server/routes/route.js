const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminControllers');
const TeacherStudentController = require('../controllers/teacher-student-Controllers');


router.post('/login', adminController.login); //mo4trk m3 admin w student w teacher

router.get('/profile', adminController.profile); //mo4trk m3 admin w student w teacher

// ------------------------------------------------------------------------------------------------
// --------------------------------------Admin Only----------------------------------------------
// ------------------------------------------------------------------------------------------------

// ----------------POST Requests----------------

router.post('/add/user', adminController.addUser);

router.post('/add/user/course/:id', adminController.addUserCourse);

router.post('/add/course', adminController.addCourse);

router.post('/add/course/grade', adminController.addCourseGrade);

router.post('/add/grade', adminController.addGrade); //mo4trk m3 teacher



// ----------------GET Requests----------------
router.get('/users', adminController.getAllUsers);

router.get('/users/:role', adminController.getUserByRole);


router.get('/user', adminController.getUser);

router.get('/user/:id/profile', adminController.getUserProfile);


router.get('/user/:id/courses', adminController.getUserCourses);

router.get('/courses', adminController.getAllCourses);

router.get('/courses/:courseDepartment', adminController.getDepartmentCourses);


router.get('/course', adminController.getCourse);

router.get('/course/users', adminController.getCourseUsers); //mo4trk m3 teacher w student

router.get('/course/students/grades', adminController.getStudentsGrades); //mo4trk m3 teacher w student


// ----------------PUT Requests----------------

router.put('/update/user', adminController.updateUser);

router.put('/update/course', adminController.updateCourse);

router.put('/update/student/garde', adminController.updateGrade);


// ----------------DELETE Requests----------------

router.delete('/delete/user/:id', adminController.deleteUser);

router.delete('/delete/user/course/:id/:courseCode', adminController.deleteUserCourse);

router.delete('/delete/course/:courseCode', adminController.deleteCourse);

router.delete('/delete/course/grade', adminController.deleteCourseGrade);


// ------------------------------------------------------------------------------------------------
// --------------------------------------Teacher Only----------------------------------------------
// ------------------------------------------------------------------------------------------------

// ----------------POST Requests----------------

router.post('/add/course/task', TeacherStudentController.addTask);

router.post('/add/course/lecture', TeacherStudentController.addLecture);

router.post('/add/course/attendance', TeacherStudentController.addAttendance);


// ----------------GET Requests----------------
router.get('/my/courses', TeacherStudentController.myCourses); //mo4trk m3 student

router.get('/course/tasks', TeacherStudentController.getTasks); //mo4trk m3 student

router.get('/course/attendance/sheet', TeacherStudentController.viewAttendance);



// ----------------DELETE Requests----------------

router.delete('delete/task', TeacherStudentController.deleteTask);





// ------------------------------------------------------------------------------------------------
// --------------------------------------Student Only----------------------------------------------
// ------------------------------------------------------------------------------------------------


// ----------------POST Requests----------------

router.post('/course/attend/me', TeacherStudentController.attendme);



// ----------------GET Requests----------------
router.get('/course/my/grades', TeacherStudentController.myGrades);

router.get('/course/my/attendance', TeacherStudentController.viewMyAttendance);








































// router.post('/login', adminController.login);

// router.get('/user/:userId', adminController.allowIfLoggedin, adminController.getUser);

// router.get('/users', adminController.allowIfLoggedin, adminController.grantAccess('readAny', 'profile'), adminController.getUsers);

// router.put('/user/:userId', adminController.allowIfLoggedin, adminController.grantAccess('updateAny', 'profile'), adminController.updateUser);

// router.delete('/user/:userId', adminController.allowIfLoggedin, adminController.grantAccess('deleteAny', 'profile'), adminController.deleteUser);

module.exports = router;