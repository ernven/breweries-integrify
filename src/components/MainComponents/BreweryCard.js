import { Card, CardContent, CardActions, Typography, Button } from '@mui/material'

const BreweryCard = ({ brewery }) => (
  <Card sx={{width: '18em', height: '13em'}}>
    <CardContent sx={{height: '40%', padding: '2em'}}>
      <Typography variant="body2">
        {brewery.name}
      </Typography>
      <Typography variant="body2">
        {'Type: ' + brewery.brewery_type}
      </Typography>
      <Typography variant="body2">
        {brewery.city + ', ' + brewery.state}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size='small' fullWidth>View Detail</Button>
    </CardActions>
  </Card>
)

export default BreweryCard
