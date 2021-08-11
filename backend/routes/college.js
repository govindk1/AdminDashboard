import express, { response } from "express"
import College from "../models/college.js"
import Student from "../models/student.js"

//importing names for creating fake dataset
import names from "./names.js"

const router = express.Router()


//posting college data
router.post('/', async (req, res) => {

    const college = new College(req.body)
    college.courselist = [...((req.body.courselist).split(','))]
    console.log(college)
    console.log((req.body.courselist).split(','))
    try{
        await college.save()
        res.status(200).json(college)
    }
    catch(err){
        res.status(501).message(err)
    }

})


//Listing out all the student present in particular college
//just for testing once we know the college id we will directly use it as :id
router.get('/collegestudents', async (req, res) => {

    try{
    const college = await College.findById('6113a0f3b4132542cc298a79')
    await college.populate('students').execPopulate()
    console.log(college.students)
    res.status(200).json("completed")
    }
    catch{
        res.status(404).json("not found")
    }
})


//inserting student to particular college
router.get('/insertingstudents', async (req, res) => {

    //getting all colleges;
    try{
        const college = await College.find();
        console.log(college[0]._id)

        //inserting students
        for(var j = 0; j < 100; j++){
            console.log(j)
            for(var i = 0; i < 100; i++){

                const student = new Student({
                    name: names[Math.floor(Math.random()*1000)],
                    yearofbatch: "2018",
                    collegeid: college[j]._id,
                    institute: college[j]._id,
                    skills :['Cpp', 'Java', 'Python']
                })
                try{
                    await student.save()
                }
                catch(err){
                    console.log(err)
                }
            }
       }

        res.status(200).json("completed")
    }
    catch(err){
        res.status(501).json(err)
    }


})







export default router