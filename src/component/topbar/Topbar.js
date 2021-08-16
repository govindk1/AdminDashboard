import React from "react";
import "./topbar.css";
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';




export default function Topbar() {
  

  const loaddata = () => {
    localStorage.clear();
    window.location.reload(false)
 
  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">lamaadmin</span>
        </div>
        <div className="topRight">
        <Button
            variant="outlined"
            color="primary"
            onClick = {loaddata}
            endIcon={<UpdateIcon />}>
            update Database
        </Button>
        </div>
    </div>
    </div>
  );
}