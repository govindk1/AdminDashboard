import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "./Collegestatewisedetails.css"





export default function CollegeStatewisedetails() {

    function titleCase(str) {
        return str.toLowerCase().split(' ').map(function(word) {
            return word.replace(word[0], word[0].toUpperCase());
        }).join(' ');
        }

const useRowStyles = makeStyles({
    root: {
        '& > *': {
        borderBottom: 'unset',
        },
    },
    });
    
    
    
    function Row(props) {
    
    
    
    const { row } = props;
    
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    
    return (
        <React.Fragment>
        <TableRow className={classes.root}>
            
            <TableCell component="th" scope="row">
            {titleCase(row.statename)}
            </TableCell>
            <TableCell >{row.percentage}%</TableCell>
            <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
        </TableCell>
            
        </TableRow>
        <TableRow >
            <TableCell style={{paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box marginLeft={0}>
                <Typography variant="h5" gutterBottom component="div" >
                    <h4>CollegeDetails</h4>
                </Typography>
                <Table size="small" aria-label="purchases">
                    <TableHead >
                    <TableRow >
                        <TableCell>CollegeName</TableCell>
                        <TableCell>CollegeId</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody >
                    {row.history.map((historyRow) => (
                        <TableRow key={historyRow.date} >
                        <TableCell component="th" scope="row">
                            {titleCase(historyRow.collegename)}
                        </TableCell>
                        <TableCell>
                        <Link to={"/college/" + historyRow.collegeid} style={{textDecoration:"none"}}>
                            <Button variant="outlined" color="primary">
                            View
                            </Button>
                        </Link>
                        </TableCell>
                        
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </Box>
            </Collapse>
            </TableCell>
        </TableRow>
        </React.Fragment>
    );
    }
    
    
    
    
    let rows = []
    
    const res = JSON.parse(localStorage.getItem('collegeStateWise'))
        
    console.log("result", res)
    let total = 0;
    for(var key in res){
        total += res[key][0]
    }
    
    for(key in res){
    
        rows = [...rows, {statename:key, percentage:Math.round((res[key][0]/total)*100), history: res[key][1]}]
    }
      
  return (
    <div className="collegestatewisedetails">
        <TableContainer component={Paper} >
        <Table aria-label="collapsible table">
            <TableHead>
            <TableRow>
                
                <TableCell ><h3>State Name</h3></TableCell>
                <TableCell><h3>Course Wise College Percentage</h3></TableCell>
                <TableCell />
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <Row key={row.name} row={row} />
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}
