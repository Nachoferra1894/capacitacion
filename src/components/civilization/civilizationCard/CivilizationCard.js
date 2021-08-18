import React, { useState } from 'react'
import { Card, Typography,CardMedia,CardContent,CardActions,Button, Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './CivilizationCard.scss'
export const CivilizationCard = ({civilization}) => {

    const handleOpenCivilization = () => {
        window.open(`https://ageofempires.fandom.com/wiki/Civilizations_(Age_of_Empires_II)#${civilization.name}`)
    }
    const [rotate, setRotate] = useState(false)


    return (
        <div>
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
                                    {civilization.civilization_bonus.map((item,index)=>
                                        <Typography variant="subtitle1" color="textSecondary" component="p">
                                            {item}
                                        </Typography>
                                    )}
                                </Box>
                            }

                        </Box>
                    </Box>
                </CardContent>
                <CardActions>
                    <Box className="civilizationpage-cardactions">
                        <Button onClick={handleOpenCivilization} size="small" color="secondary">
                            Learn More
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </div>
    )
}
