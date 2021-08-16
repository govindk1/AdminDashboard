import React from 'react'
import "./Home.css"
import Charts1 from '../charts/Charts1'
import Charts2 from '../charts/Charts2'
import Collegestatewisedetails from '../../pages/Collegestatewisedetails/Collegestatewisedetails'

function Home() {
    
    return (
        <div className="home">
            <Charts1 />
            <Charts2 />
            <Collegestatewisedetails />
        </div>
    )
}

export default Home
