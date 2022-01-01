import { useState, useEffect } from 'react'

import Search from './MainComponents/Search'
import BreweryList from './MainComponents/BreweryList'

function Main () {
  // We use a state to store breweries data.
  const [breweries, setBreweries] = useState([])
  // This is the filter input to search for (default empty).
  const [filter, setFilter] = useState('')

  // After the first render, data is fetched from the API.
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then(res => res.status === 200 ? res.json() : console.log(res))
      .then(resJSON => setBreweries(resJSON))
      .catch(err => console.log(err))
  }, [])

  // This function filters entries based on the input filter, using an array of each object's property values for comparison.
  const filterEntries = filter =>
    breweries.filter(i => Object.values(i).some(p => p ? p.includes(filter) : false))

  return (
    <div style={{backgroundColor: 'WhiteSmoke'}}>
      <Search setFilter={setFilter} />
      {filter ? <BreweryList breweries={filterEntries(filter)} /> : <BreweryList breweries={breweries} />}
    </div>
  )
}

export default Main
