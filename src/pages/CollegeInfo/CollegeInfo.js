import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "./CollegeInfo.css"
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import {Link} from "react-router-dom"


function titleCase(str) {
    
    if(str){
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');}
  }


  function CollegeInfo() {

    const {collegeid} = useParams()
    const [collegeDetails, setcollegeDetails] = useState({name:'', city:'', state:'', noofstudents:''})

    //finding college details
    useEffect(() => {
        for(var i = 0; i < 100; i++){
        
    
            let collegeData = JSON.parse(localStorage.getItem('collegestudents'))[i]
            
            let collegeName = (Object.keys(collegeData)[0])
            let collegeCity = (collegeData[collegeName][0].city)
            let collegeState = (collegeData[collegeName][0].state)
            let numberofStudents = (collegeData[collegeName][0].noofstudents)
            let collegeId = (collegeData[collegeName][0]._id)
    
            if(collegeid === collegeId){
                
                setcollegeDetails({...collegeDetails, name:collegeName, city:collegeCity, state:collegeState, noofstudents:numberofStudents})
                break;
            }
    
        
        }
    }, [])


   
    //finding student details
    const columns = [
        { field: 'id', headerName: 'ID', width: 300 },
        {field: 'name', headerName: 'Name', width: 180, editable: true,},
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell:  (params) => {
            return (
                <React.Fragment>
                <Link to={"/studentprofile/" + params.row.id  + '-' +  collegeid } style={{textDecoration:"none"}}>
                    <Button variant="outlined" color="primary">
                        View
                    </Button>
                </Link>
        
                </React.Fragment>
            );
            }
        },
      ];
      
      const rows = [
    
      ];


      //filling rows
      for(var i = 0; i < 100; i++){
        
    
        let collegeData = JSON.parse(localStorage.getItem('collegestudents'))[i]
        
        let collegeName = (Object.keys(collegeData)[0])
        let collegeId = (collegeData[collegeName][0]._id)

        if(collegeid === collegeId){
            
            for(var j = 0; j < 100; j++){   

            let obj = {}

            obj['id'] = collegeData[collegeName][1][j]._id
            obj['name'] = collegeData[collegeName][1][j].name
                
            rows.push(obj)
      
            }
            break;
        }

    
    }

      

    return (
        <div className="collegeInfo">
            <div className="collegeTitleContainer">
                <h1 className="collegeTitle">View College Details</h1>
            </div>
      <div className="collegeContainer">
        <div className="collegeShow">
 
          <div >
            <div style={{marginBottom:"12px"}}>
            <span className="collegeShowTitle" >College Details</span>
            </div>

            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div className="collegeShowInfo">
                    <span className="collegeTitle" style={{fontWeight:"504"}}>Name</span>
                </div>
                <div className="collegeShowInfo">
                    <span className="collegeShowInfoTitle">{titleCase(collegeDetails.name)}</span>
                </div>
            </div>

            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div className="collegeShowInfo" >
                    <span className="collegeTitle" style={{fontWeight:"504"}}>City</span>
                </div>
                <div className="collegeShowInfo" >
                    <span className="collegeShowInfoTitle">{titleCase(collegeDetails.city)}</span>
                </div>
            </div>

            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div className="collegeShowInfo">
                    <span className="collegeTitle" style={{fontWeight:"504"}}>State</span>
                </div>
                <div className="collegeShowInfo">
                    <span className="collegeShowInfoTitle">{titleCase(collegeDetails.state)}</span>
                </div>
            </div>

            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div className="collegeShowInfo">
                    <span className="collegeTitle"  style={{fontWeight:"504"}}>Noofstudents</span>
                </div>
                <div className="collegeShowInfo" >
                    <span className="collegeShowInfoTitle">{collegeDetails.noofstudents}</span>
                </div>
            </div>
            <div style={{marginTop:"15px"}}>
                <span className="collegeShowTitle">Similar College</span>
            </div>
            
 
 
          </div>
        </div>
        <div className="studentDetails">
          <div style={{marginBottom:"15px"}}>
            <span className="studentTitle1">StudentDetails</span>
          </div>
          <div style={{ height: 400, width: '100%' }}>
          <DataGrid
          rows={rows}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
          />
            </div>
        </div>
      </div>
    </div>
    )
}

export default CollegeInfo




