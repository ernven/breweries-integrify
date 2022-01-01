import { Grid } from '@mui/material'

import BreweryCard from './BreweryCard'

const BreweryList = ({ breweries }) => (
  <Grid container spacing={5} sx={{padding: '4em'}}>
    {breweries.map(i => (
      <Grid item xs={12} md={4}>
        <BreweryCard key={i.key} brewery={i} />
      </Grid>
    ))}
  </Grid>
)

export default BreweryList
