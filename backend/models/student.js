import mongoose from "mongoose"
const Schema = mongoose.Schema;


const studentSchema = new Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },

    yearofbatch : {
        type : String,
    },

    collegeid : {
        type : String,
        required : true
    },

    institute:{
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        //it is referring to the model college like one to many relationship from college(one)->student(many)
        ref : 'College'
    },

    skills:[{
        type:String,
    }],

})


const Student = mongoose.model('Student', studentSchema)
export default Student;

