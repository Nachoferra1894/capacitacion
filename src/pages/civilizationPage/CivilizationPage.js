import React, { useEffect,useState } from 'react'
import {useParams} from "react-router-dom";
import {useQuery} from '../../hooks/useQuery'
import { civilizationApi } from '../../api/civilizationApi';
import { CircularProgress, Typography } from '@material-ui/core';
import MainNavbar from '../../components/mainNavbar/MainNavbar';
import { CivilizationCard } from '../../components/civilization/civilizationCard/CivilizationCard';


const CivilizationPage = () => {
    const query = useQuery()
    const [civilization, setCivilization] = useState({})
    const [loading, setloading] = useState(true)

    useEffect( ()=>{
        setloading(true)
        async function getCivilization(){
            try {
                const data = await civilizationApi.getCivilizationById(query.get("id"))
                setCivilization(data)
                setloading(false)
            }
            catch (err){
                console.log(err)
                setloading(false)
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
                        <Typography variant='h3'>Couldn't connect to server</Typography>
            }
        </div>
    </div>
    )
}

export default CivilizationPage
