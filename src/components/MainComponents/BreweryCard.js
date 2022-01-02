import { useNavigate } from 'react-router-dom'

import { Card, CardContent, CardActions, Typography, Button } from '@mui/material'

const BreweryCard = ({ brewery }) => {
  // We use the useNavigate hook to navigate when the user clicks the card button.
  // It allows us to also pass a state to the next component, so we can add the brewery object.
  const navigate = useNavigate()
  
  return (
    <Card sx={{width: '18em', height: '13em', borderRadius: '1.2em'}}>

      <CardContent sx={{height: '35%', padding: '2.6em'}}>
        <Typography variant="body2">
          {brewery.name}
        </Typography>
        <Typography variant="body2">
          Type: {brewery.brewery_type}
        </Typography>
        <Typography variant="body2">
          {brewery.state ? brewery.city + ', ' + brewery.state : brewery.city + ', ' + brewery.country}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size='small'
          fullWidth
          onClick={() => navigate('/details', { state: brewery })}
        >
          View Detail
        </Button>
      </CardActions>

    </Card>
  )
}

export default BreweryCard
