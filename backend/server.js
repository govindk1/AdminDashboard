import express from "express"
import cors from "cors"
import  "./db/mongoose.js"

//user router
import collegeRouter from "./routes/college"
import studentRouter from "./routes/student" 



const PORT = 5000;

//configuring app
const app = express()
app.use(express.json())
app.use(cors())




app.use('/college', collegeRouter)
app.use('/student', studentRouter)

app.listen((PORT) => {
    console.log(`Port  is running on ${PORT}`)
})



