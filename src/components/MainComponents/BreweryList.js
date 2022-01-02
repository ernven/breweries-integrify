import { Grid } from '@mui/material'

import BreweryCard from './BreweryCard'

import '../../css/App.css'

const BreweryList = ({ breweries }) => (
  <Grid container spacing={5}>
    {breweries.map(entry => (
      <Grid item xs={12} md={4} key={entry.id}>
        <BreweryCard brewery={entry} />
      </Grid>
    ))}
  </Grid>
)

export default BreweryList
