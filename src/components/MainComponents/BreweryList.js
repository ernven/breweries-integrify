import { Grid } from '@mui/material'

import BreweryCard from './BreweryCard'

const BreweryList = ({ breweries }) => (
  <Grid container spacing={5} sx={{padding: '3em'}}>
    {breweries.map(entry => (
      <Grid item xs={12} md={4} key={entry.id}>
        <BreweryCard brewery={entry} />
      </Grid>
    ))}
  </Grid>
)

export default BreweryList
