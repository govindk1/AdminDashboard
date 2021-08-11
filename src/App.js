import React, {useState, useEffect} from 'react';
import './App.css';
import Spinner from './component/layout/Spinner/Spinner';
import axios from "axios"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

//importing components
import Topbar from './component/topbar/Topbar';
import Sidebar from "./component/sidebar/Sidebar.js"

//importing pages
import CollegeList from './pages/CollegeList/CollegeList';

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

    if(localStorage.getItem('collegestudents') === null){
      allcollegestudents();
    }
    else{
      Setloading(1);
    }
  }, [])


  return loading === 0 ? <Spinner /> :(
    <div>
      <Router>
        <Topbar />

        <div className="container">
            <Sidebar />
         


          <Switch>
            <Route exact path="/college">
          
              <CollegeList />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
