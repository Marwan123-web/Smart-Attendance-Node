const User = require('../models/user');
const Course = require('../models/course');
const Grade = require('../models/grade');

// const attendanceModel = require('../module/attendance');


class adminService {

    // ------------------------Student Services ----------------------------------------
    static getUserData(id) {
        return User.findOne({ _id: id });
    }

    static getAllUsers() {
        return User.find();
    }
    static getUserByRole(role) {
        return User.find({ role: role });
    }
    static getUserById(id) {
        return User.findOne({ _id: id });
    }

    static getUserByName(UserName, role) {
        return User.findOne({ name: { $regex: UserName, $options: 'i' }, role })
    }

    static deleteUser(id) {
        return User.findOneAndDelete({ _id: id });
    }

    static getUserCourses(id) {
        return User.findOne({ _id: id }, { _id: 1, name: 1, courses: 1 })
    }

    static addUserCourse(id, courseCode) {
        return User.findOne({ _id: id }).updateOne(
            {}, // your query, usually match by _id
            { $push: { courses: courseCode } }, // item(s) to match from array you want to pull/remove
            { multi: true } // set this to true if you want to remove multiple elements.
        );
    }

    static deleteUserCourse(UserId,courseCode) {
        return User.findOne({ _id: UserId }).updateOne(
            { courses: courseCode }, // your query, usually match by _id
            { $pull: { courses: { $in: [courseCode] } } }, // item(s) to match from array you want to pull/remove
            { multi: true } // set this to true if you want to remove multiple elements.
        )
    }

    // ---------------------------------------------------------
    static getAllCourses() {
        return Course.find();
    }
    static getDepartmentCourses(department) {
        return Course.find({ courseDepartment: department });
    }

    static getCourseByCode(code) {
        return Course.findOne({ courseCode: code })
    }

    static getCourseByName(courseName) {
        return Course.findOne({ courseName: { $regex: courseName, $options: 'm' } });
    }

    static deleteCourse(code) {
        return Course.findOneAndDelete({ courseCode: code });
    }

    static addCourseGrades(code, gradetype, coursegrade) {
        var grade = { type: gradetype, grade: coursegrade };
        Course.findOne({ courseCode: code }).updateOne(
            { courseCode: code }, // your query, usually match by _id
            { $push: { grades: grade } }, // item(s) to match from array you want to pull/remove
            { multi: true } // set this to true if you want to remove multiple elements.
        )
    }
    static deleteCourseGrade(code, type) {
        Course.findOne({ courseCode: code }).updateOne(
            { courseCode: code }, // your query, usually match by _id
            { $pull: { grades: { type: type } } }, // item(s) to match from array you want to pull/remove
            { multi: true } // set this to true if you want to remove multiple elements.
        )
    }

    static getCourseUsers(courseCode, role) {
        return User.find({ role, courses: { $in: [courseCode] } }, { _id: 1, name: 1, });

    }

    static getCourseGrades(courseCode) {
        return Grade.find({ courseId: courseCode });
    }


}
module.exports = adminService;