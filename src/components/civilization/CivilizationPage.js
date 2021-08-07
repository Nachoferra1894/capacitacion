import React from 'react'
import MainNavbar from '../MainNavbar'
import {useParams} from "react-router-dom";

const Civilization = () => {
    const name = useParams()
    return (
        <div>
        <MainNavbar/>
        <div className="home-div-all">
            <div className="home-div-cards">
         
            </div>
        </div>
    </div>
    )
}

export default Civilization
