import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'

import BreweryCard from './BreweryCard'

function Main () {
  // Breweries data is stored in a state.
  const [breweries, setBreweries] = useState([])

  // After the first render, data is fetched from the API.
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then(res => res.status === 200 ? res.json() : console.log(res))
      .then(resJSON => setBreweries(resJSON))
      .catch(err => console.log(err))
  }, [])

  return (
    <Grid container spacing={6}>
      {breweries.map(i => (
        <Grid item xs={3}>
          <BreweryCard key={i.key} brewery={i} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Main