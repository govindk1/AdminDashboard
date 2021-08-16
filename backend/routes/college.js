import express, { response } from "express"
import College from "../models/college.js"
import Student from "../models/student.js"

//importing names for creating fake dataset
import names from "../utils/names.js"

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

//get college info
router.get('/getcollegeinfo/:id', async (req, res) => {

    try{
        const college = await College.findById(req.params.id)
        res.status(200).json(college)
    }

    catch{
            res.status(404).json("not found")
    }

})


//Listing out all the student present in particular college
//just for testing once we know the college id we will directly use it as :id
router.get('/collegestudents', async (req, res) => {

    try{
    const college = await College.findById('6113a94f8ea8503030c71ee2')
    await college.populate('students').execPopulate()
    console.log(college.students)
    res.status(200).json("completed")
    }
    catch{
        res.status(404).json("not found")
    }
})


//getting all the student list from all the college
//saving result = [{college_name:[{college_details}, {[{student_details},{}]} ]},  college_name:]
router.get('/allcollegestudents', async (req, res) => {

    let result = []
    try{
    
        const colleges = await College.find();
        
        for(let i = 0; i < 100; i++){
            console.log(i)
            try{
                const college = await College.findById(colleges[i]._id)
                await college.populate('students').execPopulate()
                
                //making temo_obj 
                let temp_obj = {}
                temp_obj[college.name] = [college, college.students]
                
                //pushing object to array
                result.push(temp_obj)
            }
            catch(err){

            }
            
        }
      
        res.status(200).json(result)
    }
    catch(err){
        res.status(501).json(err);
    }


})


//inserting student to particular college
router.get('/insertingstudents', async (req, res) => {

    //getting all colleges;
    try{
        const college = await College.find();

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