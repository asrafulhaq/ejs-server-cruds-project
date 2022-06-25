const mongoose = require('mongoose'); 


// create a mongo DB Connection 
const mongoDBConnect = async () => {

    try {

       await mongoose.connect(process.env.MONGO_STRING);

       console.log(`MongoDB server is ready `.bgBlue.black);


    } catch (err) {
        console.log(`${err}`.bgRed.black);
    }

}


// export connection 
module.exports = mongoDBConnect;