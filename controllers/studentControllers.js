const Student = require("../models/studentModel");

/**
 * @desc get all student data 
 * @name GET /student/
 * @access public 
 */
const getAllStudents = async (req, res) => {

    let students = await Student.find();
    res.render('index', { students }); 
}





/**
 * @desc get all student data 
 * @name GET /student/
 * @access public  
 */
 const getSingleStudent =  async (req, res) => {
    let id = req.params.id;

 
    let singleData = await Student.findById(id);
    console.log(singleData);
    res.render('show', { singleData });  
}

/**
 * @desc get all student data 
 * @name GET /student/
 * @access public 
 */
 const showStudentForm = (req, res) => {
    res.render('create');
}


/**
 * @desc get all student data 
 * @name GET /student/
 * @access public 
 */
 const createStudent = (req, res) => {

    // store data to DB
    Student.create({
        ...req.body, 
        photo : req.file.filename
    });


    // redirect to home page 
    res.redirect('/student');
    
}

const deleteStudent =  async (req, res) => {
    let id = req.params.id;

    await Student.findByIdAndDelete(id);

    res.redirect('/student');
}



// exports controllers 
module.exports = {
    getAllStudents, 
    createStudent, 
    getSingleStudent, 
    showStudentForm, 
    deleteStudent
}