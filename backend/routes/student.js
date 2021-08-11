import express from "express"
import Student from "../models/student.js"

const router = express.Router()


//posting student data
router.post('/', async (req, res) => {

    const student = new Student({
        ...req.body,
        institute : req.body.collegeid,
    })
    student.skills = [...((req.body.skills).split(','))]
    console.log(student)
    try{
        await student.save()
        res.status(200).json(student)
    }
    catch(err){
        res.status(501).message(err)
    }

})


//Listing out the college details of single student
//just for testing once we know the student id we will use it as :id
router.get('/student_college_details', async (req, res) => {

    try{
    const student = await Student.findById('6113a2aa21f65927307b83ff')
    await student.populate('institute').execPopulate()
    console.log("g", student.institute)
    res.status(200).json("completed")
    }
    catch{
        res.status(404).json("not found")
    }
})







export default router