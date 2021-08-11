import "./sidebar.css";
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <HomeIcon className="sidebarIcon" color="primary"/>
              Home
            </li></Link>
            <Link to="/college" className="link">
            <li className="sidebarListItem">
              <ListAltIcon className="sidebarIcon" color="primary"/>
              CollegeList
            </li></Link>
          </ul>
        </div>


      </div>
    </div>
  );
}