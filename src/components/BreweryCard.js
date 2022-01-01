import { Card, CardContent, CardActions, Typography, Button } from '@mui/material'

const BreweryCard = ({ brewery }) => (
  <Card>
    <CardContent style={{padding: '2em'}}>
      <Typography>
        {brewery.name}
      </Typography>
      <Typography>
        {'Type: ' + brewery.brewery_type}
      </Typography>
      <Typography>
        {brewery.city + ', ' + brewery.state}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size='small'>View Detail</Button>
    </CardActions>
  </Card>
)

export default BreweryCard