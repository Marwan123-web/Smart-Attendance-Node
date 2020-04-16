const mongoose = require('mongoose');
const courseSchema = mongoose.Schema({
    courseCode: {
        type: String,
        required: 'Please Enter Course Code'
    },
    courseName: { type: String, required: 'Please Enter course Name' },
    courseDepartment: { type: String, enum: ['Information Systems', 'Internet Technology', 'Computer Science', 'BIO'], required: 'Please Enter Course Department' },
    creaditHours: { type: Number, required: 'Please Enter course hours' },
    grades: [
        {
            type: { type: String },
            grade: { type: String }
        }
    ],

    tasks: [
        {
            type: { type: String },
            path: { type: String }
        }
    ],
    lectures: [
        {
            lectureNumber: { type: Number },
            lectureLocation: { type: String },
            lectureTime: { type: Date, default: Date.now() },
            beacon_id: { type: String }
        }
    ]
});
module.exports = mongoose.model('course', courseSchema);