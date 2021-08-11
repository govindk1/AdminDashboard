import  React  from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const columns = [
    { field: 'id', headerName: "ID", width: 230 },
    { field: 'name', label: 'Name', minWidth: 190 },
    { field: 'city', label: 'City', minWidth: 190 },
    { field: 'state', label: 'State', minWidth: 190},
    { field: 'noofstudents', label: 'TotalStudents',minWidth: 190},
    {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell:  (params) => {
        return (
            <React.Fragment>
            <Link to={"/college/" + params.row.id} style={{textDecoration:"none"}}>
                <Button variant="outlined" color="secondary">
                    View
                </Button>
            </Link>
    
            </React.Fragment>
        );
        }
    }
];

let rows = [];
for(var i = 0; i < 100; i++){
    let obj = {}
    

    let collegeData = JSON.parse(localStorage.getItem('collegestudents'))[i]
    console.log(collegeData)
    let collegeName = (Object.keys(collegeData)[0])
    let collegeCity = (collegeData[collegeName][0].city)
    let collegeState = (collegeData[collegeName][0].state)
    let numberofStudents = (collegeData[collegeName][0].noofstudents)
    let collegeId = (collegeData[collegeName][0]._id)

    
    // console.log( JSON.parse(localStorage.getItem('collegestudents'))[i][((Object.keys(JSON.parse(localStorage.getItem('collegestudents'))[i]))[0])][0]._id )
    obj['id'] = collegeId
    obj['name'] = collegeName
    obj['city'] = collegeCity
    obj['state'] = collegeState
    obj['noofstudents'] = numberofStudents
    rows.push(obj)

}


export default function DataTable() {



  return (
    <div className="collegelist" style={{height:"400px"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
  

}



