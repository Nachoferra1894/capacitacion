import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './ArmyCard.scss'


const ArmyCard = (props) => {

  const {
    name
  } = props

  return (
    <Card className="armycard-card">
      <CardContent className="armycard-content">
        <Typography variant='h3'>
            {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ArmyCard