import mongoose from "mongoose"
const Schema = mongoose.Schema;


const collegeSchema = new Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },

    yearfounded : {
        type : String,
    },

    city : {
        type : String,
        required : true
    },

    state:{
        type: String,
        required : true
    },

    country:{
        type: String,
        required : true
    },

    noofstudents:{
        type: Number,
        required : true
    },
   
    courselist : [{
        type:String,
    }]
})

//finds all students related to college
collegeSchema.virtual('students', {
    ref:'Student',
    localField: '_id',
    foreignField: 'institute'
})


const College = mongoose.model('College', collegeSchema)
export default College;