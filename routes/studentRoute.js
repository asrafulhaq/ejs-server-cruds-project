const express = require('express');
const { getAllStudents, createStudent, getSingleStudent, showStudentForm } = require('../controllers/studentControllers');
const router = express.Router();

// student route 
router.get('/create', showStudentForm); 
router.get('/', getAllStudents); 
router.post('/', createStudent); 
router.get('/:id', getSingleStudent); 
 


// export router 
module.exports = router;