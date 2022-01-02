import { Card, CardContent, Box, Typography } from '@mui/material'

const DetailCard = ({ brewery }) => (
  <Card sx={{margin: 'auto', width: '22em', height: '22em', borderRadius: '1.2em'}}>
    <CardContent sx={{padding: '3.6em'}}>

      <Typography variant='h6'>
        {brewery.name}
      </Typography>

      <Typography variant='body2'>
        {'Type: ' + brewery.brewery_type}
      </Typography>

      <Box sx={{margin: '2em 0'}}>
        <Typography>
          {brewery.street}
        </Typography>
        <Typography variant='body2'>
          {brewery.city}{brewery.state ? (', ' + brewery.state) : ''}
        </Typography>
        <Typography variant='body2'>
          {brewery.postal_code + ' ' + brewery.country}
        </Typography>
      </Box>

      <Typography variant='body2'>
        Phone: {brewery.phone}
      </Typography>
      <Typography variant='body2'>
        Website: <a href={brewery.website_url}>{brewery.website_url}</a>
      </Typography>
    </CardContent>
  </Card>
)

export default DetailCard
