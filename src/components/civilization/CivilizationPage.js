import React, { useEffect,useState } from 'react'
import MainNavbar from '../MainNavbar'
import {useParams} from "react-router-dom";
import { civilizationApi } from '../../api/civilizationApi';
import { Card, CardActionArea, Typography,CardMedia,CardContent,CardActions,Button, Box } from '@material-ui/core';
import './CivilizationPage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


const CivilizationPage = () => {
    const params = useParams()
    const [civilization, setCivilization] = useState({})
    const [rotate, setRotate] = useState(false)

    useEffect(async ()=>{
        try {
            const data = await civilizationApi.getCivilizationById(params.id)
            setCivilization(data)
            console.log(data)
        }
        catch (err){
            console.log(err)
        }
    },[params])

    const handleOpenCivilization = () => {
        window.open(`https://ageofempires.fandom.com/wiki/Civilizations_(Age_of_Empires_II)#${civilization.name}`)
    }

    return (
        <div>
        <MainNavbar/>
        <div className="home-div-all">
            <Card className="civilizationpage-card">
                <CardMedia
                    square
                    className="civilizationpage-media"
                    title="Contemplative Reptile"
                    
                /> 
                <CardContent>
                    <Typography variant="h3" component="h2">
                        {civilization.name}
                    </Typography>
                    <Box className="civilizationpage-box-subtitles">
                        <Typography variant="subtitle1" color="textSecondary" component="p">
                            Expansion: {civilization.expansion}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" component="p">
                            Army type: {civilization.army_type}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" component="p">
                            Team bonus: {civilization.team_bonus}
                        </Typography>
                        <Box style={{cursor: "pointer"}} onClick={e=>setRotate(!rotate)}>
                            <Typography variant="subtitle1" color="textSecondary" component="p">
                                Civilization bonus:
                                <FontAwesomeIcon className={`civilizationpage-icon ${rotate}`} icon={faChevronRight}/>
                            </Typography>
                            {rotate &&
                                <Box style={{marginLeft: "2%"}}>
                                    <Typography variant="subtitle1" color="textSecondary" component="p">
                                        Expansion: {civilization.expansion}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary" component="p">
                                        Army type: {civilization.army_type}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary" component="p">
                                        Team bonus: {civilization.team_bonus}
                                    </Typography>
                                </Box>
                            }

                        </Box>
                    </Box>
                </CardContent>
                <CardActions>
                    <Box className="civilizationpage-cardactions">
                        <Button onClick={handleOpenCivilization} size="small" color="primary">
                            Learn More
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </div>
    </div>
    )
}

export default CivilizationPage
