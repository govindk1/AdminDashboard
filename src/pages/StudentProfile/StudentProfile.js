import React, {useState, useEffect} from 'react'
import './StudentProfile.css'
import {Avatar} from "@material-ui/core"
import {useParams} from "react-router-dom"

function StudentProfile() {

    const {collegestudentid} = useParams()

    const studentid = collegestudentid.split('-')[0]
    const collegeid = collegestudentid.split('-')[1]
    console.log(studentid, collegeid)


    const [studentDetails, setstudentDetails] = useState({collegename:'',name:'', yearofbatch:'', skills:''})

    //finding college details
    useEffect(() => {
        for(var i = 0; i < 100; i++){
        
    
            let collegeData = JSON.parse(localStorage.getItem('collegestudents'))[i]
            
            let collegeName = (Object.keys(collegeData)[0])

            let collegeId = (collegeData[collegeName][0]._id)
    
            if(collegeid === collegeId){
                
                //setcollegeDetails({...studentDetails, name:collegeName, city:collegeCity, state:collegeState, noofstudents:numberofStudents})
                
                for(var j = 0; j < 100; j++){   

                    if(studentid === collegeData[collegeName][1][j]._id){
                        
                        setstudentDetails({...studentDetails, collegename:collegeName,name:collegeData[collegeName][1][j].name, yearofbatch:collegeData[collegeName][1][j].yearofbatch, skills:collegeData[collegeName][1][j].skills})
                        break;
                    }
                }
                
                break;
            }
    
        
        }
    }, [])


    return (
        <div className="studentprofile">
                  
        
            <div className="StudentShow">
                <div style={{flex:"1"}}>
                    <div style={{marginBottom:"12px"}}>
                        <span className="studentShowTitle" >Student Details</span>
                    </div>

                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div className="studentShowInfo">
                            <span className="studentTitle" style={{fontWeight:"504"}}>Name</span>
                        </div>
                        <div className="studentShowInfo">
                            <span className="studentShowInfoTitle">{studentDetails.name}</span>
                        </div>
                    </div>

                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div className="studentShowInfo">
                            <span className="studentTitle" style={{fontWeight:"504"}}>CollegeName</span>
                        </div>
                        <div className="studentShowInfo">
                            <span className="studentShowInfoTitle">{studentDetails.collegename}</span>
                        </div>
                    </div>


                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div className="studentShowInfo">
                            <span className="studentTitle" style={{fontWeight:"504"}}>Yearofbatch</span>
                        </div>
                        <div className="studentShowInfo">
                            <span className="studentShowInfoTitle">{studentDetails.yearofbatch}</span>
                        </div>
                    </div>

                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div className="studentShowInfo">
                            <span className="studentTitle" style={{fontWeight:"504"}}>Skills</span>
                        </div>
                        <div className="studentShowInfo">
                            <span className="studentShowInfoTitle">{studentDetails.skills}</span>
                        </div>
                    </div>
                </div>

                {/**<div  style={{marginBottom:"15px", flex:"1", display:"flex", justifyContent:'space-around', marginTop:"7%"}}>
                   <Avatar />
    </div>**/}
                
            </div>
                    
                    
                

               
           
        </div>
  
        
    )
}

export default StudentProfile
