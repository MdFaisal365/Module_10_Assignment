const express = require('express');
const { CreateStudent, SelectStudent, UpdateStudent, DeleteStudent } = require('../Controllers/StudentController');
const { StudentLogin } = require('../Controllers/StudentJWT');
const { CreateWork, SelectWork, UpdateWork, DeleteWork } = require('../Controllers/Student.WorkController');
const { SavedOTP } = require('../Controllers/OTPController');



const Router = express.Router();


// Student login route:
Router.post('/StudentLogin', StudentLogin);




// Routing-in-point: Student Crud
Router.post('/StudentCreate', CreateStudent);
Router.get('/SelectStudent/:id', SelectStudent);
Router.put('/UpdateStudent/:id', UpdateStudent);
Router.delete('/DeleteStudent/:id', DeleteStudent);




// Routing-in-point: work Crud
Router.post('/WorkCreate', CreateWork);
Router.get('/SelectWork/:id', SelectWork);
Router.put('/UpdateWork/:id', UpdateWork);
Router.delete('/DeleteWork/:id', DeleteWork);



//checked otp routing-in-point:
Router.post('/CheckeOTP', SavedOTP);


module.exports = Router;