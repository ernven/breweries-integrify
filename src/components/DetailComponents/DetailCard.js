import { Card, CardContent, CardActions, Typography, Button } from '@mui/material'

const DetailCard = ({ brewery }) => (
  <Card sx={{width: '18em', height: '13em', borderRadius: '1.2em'}}>
    <CardContent sx={{padding: '2.6em'}}>

      <Typography variant="h6">
        {brewery.name}
      </Typography>

      <Typography variant="body2">
        {'Type: ' + brewery.brewery_type}
      </Typography>

      <Typography>
        {brewery.street}
      </Typography>
      <Typography variant="body2">
        {brewery.city}{brewery.state ? (', ' + brewery.state) : ''}
      </Typography>
      <Typography variant="body2">
        {brewery.postal_code + ' ' + brewery.country + '\n'}
      </Typography>
      <Typography variant="body2">
        Phone: {brewery.phone}
      </Typography>
      <Typography variant="body2">
        Website: {brewery.website_url}
      </Typography>
    </CardContent>
  </Card>
)

export default DetailCard
