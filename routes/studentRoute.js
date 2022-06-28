const express = require('express');
const { getAllStudents, createStudent, getSingleStudent, showStudentForm, deleteStudent } = require('../controllers/studentControllers');
const router = express.Router();
const multer = require('multer');
const path = require('path');
 
 
// multer config 
const storage = multer.diskStorage({
    destination : (req, file, cb) => {

        cb(null, path.join(__dirname, '../assets/upload/')); 
    },
    filename : (req, file, cb) => {
        cb(null, Date.now()+'_'+ file.originalname );
    }
});

// load multer 
const studentMulter = multer({
    storage : storage
}).single('photo');



// student route 
router.get('/delete/:id', deleteStudent);  
router.get('/create', showStudentForm); 
router.get('/', getAllStudents); 
router.post('/', studentMulter,  createStudent);  
router.get('/:id', getSingleStudent); 
 


// export router 
module.exports = router;