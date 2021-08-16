import "./sidebar.css";
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Link } from "react-router-dom";

export default function Sidebar() {

  const makeactive =  (e) => {
    
    const li = document.getElementsByClassName("sidebarListItem");
    
    for(var i = 0; i < li.length; i++){
      li[i].classList.remove("active")
    }
    e.target.classList.add("active")
  }

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" onClick={makeactive} className="link">
              <li className="sidebarListItem">
                <HomeIcon className="sidebarIcon" color="primary"/>
                Home
              </li>
            </Link>
            <Link to="/college" onClick={makeactive} className="link">
              <li className="sidebarListItem">
                <ListAltIcon className="sidebarIcon" color="primary"/>
                CollegeList
              </li>
            </Link>
            <Link to="/collegestatewise" onClick={makeactive} className="link">
              <li className="sidebarListItem">
                <ListAltIcon className="sidebarIcon" color="primary"/>
                CollegeState
              </li>
            </Link>
          </ul>
        </div>


      </div>
    </div>
  );
}