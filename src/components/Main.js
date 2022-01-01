import { useState, useEffect } from 'react'

import Search from './MainComponents/Search'
import BreweryList from './MainComponents/BreweryList'

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
    <div>
      <Search />
      <BreweryList breweries={breweries} />
    </div>
  )
}

export default Main
