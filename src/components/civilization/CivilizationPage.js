import React, { useEffect,useState } from 'react'
import MainNavbar from '../mainNavbar/MainNavbar'
import {useParams} from "react-router-dom";
import { civilizationApi } from '../../api/civilizationApi';
import './CivilizationPage.scss'
import { CivilizationCard } from './civilizationCard/CivilizationCard';
import { CircularProgress, Typography } from '@material-ui/core';


const CivilizationPage = () => {
    const params = useParams()
    const [civilization, setCivilization] = useState({})
    const [loading, setloading] = useState(true)

    useEffect( ()=>{
        setloading(true)
        async function getCivilization(){
            try {
                const data = await civilizationApi.getCivilizationById(params.id)
                setCivilization(data)
                console.log(data)
                setloading(false)
            }
            catch (err){
                console.log(err)
                setloading(false)
            }
        }
        getCivilization()

    },[params])


    return (
        <div>
        <MainNavbar/>
        <div className="home-div-all">
            {
                loading ? 
                    <CircularProgress color="secondary"/>
                    :
                    civilization ?
                        <CivilizationCard civilization={civilization}/>
                        :
                        <Typography variant='h3'>Couldn't connect to server</Typography>
            }
        </div>
    </div>
    )
}

export default CivilizationPage
