import { Card, CardContent, CardActions, Typography, Button } from '@mui/material'

const BreweryCard = ({ brewery }) => (
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
      <Button size='small' fullWidth onClick={() => console.log(brewery.id)}>
        View Detail
      </Button>
    </CardActions>

  </Card>
)

export default BreweryCard
