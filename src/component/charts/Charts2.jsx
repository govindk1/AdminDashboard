import React from 'react'

import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    YAxis, 
   
  } from "recharts";

function Charts2() {

    const res = JSON.parse(localStorage.getItem('courseslist'))
    let data = []
 
    let total = 0;
    for(var key in res){
        total += res[key]
    }

    for(key in res)
        //console.log((res[key][0]/total)*100)
        data = [...data, {name:key, percentage:(res[key]/total)*100}]
    //const data = []

    console.log(data)
    return (
       
            <div style={{marginTop:"20px"}}>
                <div className="chart" >
                    <div style={{marginBottom:"20px",  transform: "translate(60px)"}}>
                        <h3 className="chartTitle">Course Wise College percentage</h3>
                    </div>
                    <LineChart width={1200} height={300} data={data}>
                    <Line type="monotone" dataKey="percentage" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>

        
                </div>
            </div>
      
    )
}

export default Charts2
