import React, { useEffect,useState } from 'react'
import {useParams} from "react-router-dom";
import { civilizationApi } from '../../api/civilizationApi';
import { CircularProgress, Typography } from '@material-ui/core';
import MainNavbar from '../../components/mainNavbar/MainNavbar';
import { CivilizationCard } from '../../components/civilization/civilizationCard/CivilizationCard';


const CivilizationPage = () => {
    const {id} = useParams()
    const [civilization, setCivilization] = useState({})
    const [loading, setloading] = useState(true)

    useEffect( ()=>{
        setloading(true)
        async function getCivilization(){
            try {
                const data = await civilizationApi.getCivilizationById(id)
                data ? setCivilization(data) : setCivilization(null)
                setloading(false)
            }
            catch (err){
                console.log(err)
                setloading(false)
                setCivilization(null)
            }
        }
        getCivilization()
    },[])


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
                            <Typography variant='h3'>Couldn't find the civilization</Typography>
                }
            </div>
    </div>
    )
}

export default CivilizationPage
