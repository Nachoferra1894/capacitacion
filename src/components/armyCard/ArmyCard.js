import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './ArmyCard.scss'
import { Link } from 'react-router-dom';


const ArmyCard = (props) => {

  const {
    name
  } = props

  return (
    <Card className="armycard-card">
      <CardContent className="armycard-content">
        <Link to={`/civilization/${name}`}>
          <Typography className="armycard-link"  variant='h3'>
              {name}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default ArmyCard