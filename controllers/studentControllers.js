
/**
 * @desc get all student data 
 * @name GET /student/
 * @access public 
 */
const getAllStudents = (req, res) => {
    res.render('index');
}


/**
 * @desc get all student data 
 * @name GET /student/
 * @access public 
 */
 const getSingleStudent = (req, res) => {
    res.render('show');
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
    console.log(req);
    res.redirect('/student');
    
}



// exports controllers 
module.exports = {
    getAllStudents, 
    createStudent, 
    getSingleStudent, 
    showStudentForm
}