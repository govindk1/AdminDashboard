import express from "express"
import Student from "../models/student"

const router = express.Router()


//posting student data
router.post('/', async (req, res) => {

    const student = new Student({
        ...req.body,
        institute : req.body.id,
        collegeid : req.body.id
    })

    try{
        await student.save()
    }
    catch(err){
        console.log(err)
    }

})








export default router