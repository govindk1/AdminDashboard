import express from "express"
import College from "../models/college"

const router = express.Router()


//posting college data
router.post('/', async (req, res) => {

    const college = new College(req.body)

    try{
        await college.save()
    }
    catch(err){
        console.log(err)
    }

})








export default router