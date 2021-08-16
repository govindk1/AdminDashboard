import React, {useState, useEffect} from 'react';
import './App.css';
import Spinner from './component/layout/Spinner/Spinner';
import axios from "axios"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

//importing components
import Topbar from './component/topbar/Topbar';
import Sidebar from "./component/sidebar/Sidebar.js"
import Home from './component/Home/Home';

//importing pages
import CollegeList from './pages/CollegeList/CollegeList';
import CollegeInfo from './pages/CollegeInfo/CollegeInfo';
import StudentProfile from './pages/StudentProfile/StudentProfile';
import CollegeStatewisedetails from "./pages/Collegestatewisedetails/Collegestatewisedetails"
import DupCollegeInfo from './pages/CollegeInfo/DupCollegeInfo';


function App() {

  const [loading, Setloading] = useState(0);

  useEffect(() => {

    async function allcollegestudents(){
      try{
        const res = await axios.get('http://127.0.0.1:5000/college/allcollegestudents')
        localStorage.setItem('collegestudents', JSON.stringify(res.data))
        Setloading(1);
      }
      catch(err){
        console.log(err)
      }
    }


    //structure {state : [college_count, [[college1], [college2] ..]]}
    async function collegeStateWise(){
      let obj = {}
      for(var i = 0; i < 100; i++){
        
        let collegeData = JSON.parse(localStorage.getItem('collegestudents'))[i]
        let collegeName = (Object.keys(collegeData)[0])
        let collegeState = (collegeData[collegeName][0].state)
        let collegeId = (collegeData[collegeName][0]._id)
        if(collegeState in obj){
          obj[collegeState] = [obj[collegeState][0]+1, [...obj[collegeState][1], {collegename:collegeName, collegeid:collegeId}]]
        }
        else{
          obj[collegeState] = [1, [{collegename:collegeName, collegeid:collegeId}]]
        }

        
      }
      localStorage.setItem('collegeStateWise', JSON.stringify(obj))
    }

    async function courseslist(){
      let obj = {}
      for(var i = 0; i < 100; i++){
        
        let collegeData = JSON.parse(localStorage.getItem('collegestudents'))[i]
        let collegeName = (Object.keys(collegeData)[0])

        let courselist = collegeData[collegeName][0].courselist
        for(var j = 0; j < courselist.length; j++){
          if(courselist[j].trim() in obj){
            obj[courselist[j].trim()] += 1
          }
          else{
            obj[courselist[j].trim()] = 1
          }
        }
        

        
      }
      localStorage.setItem('courseslist', JSON.stringify(obj))
    }

    async function final_(){
      if(localStorage.getItem('collegestudents') === null){
        try{
           await allcollegestudents();
           await collegeStateWise()
           await courseslist() 
        }
        catch{

        }
      

      }

      if(localStorage.getItem('collegeStateWise')===null){
        await collegeStateWise()
      }

      if(localStorage.getItem('courseslist')===null){
        await courseslist() 
      }
      
      Setloading(1);
      
      
    }

    final_();

    
    
    
    
  }, [])


  return loading === 0 ? <Spinner /> :(
    <div>
      <Router>
        <Topbar />

        <div className="container">
            <Sidebar />
         


          <Switch>

            <Route exact path='/'>
              <Home />
            </Route>
            
            <Route exact path="/college">
              <CollegeList />
            </Route>
            <Route exact path="/collegestatewise">
              <CollegeStatewisedetails />
            </Route>
            <Route exact path="/college/:collegeid">
              <CollegeInfo />
            </Route>
            <Route exact path="/dupcollege/:collegeid">
              <DupCollegeInfo />
            </Route>
            <Route exact path="/studentprofile/:collegestudentid">
              <StudentProfile />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
