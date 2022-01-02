import { useState } from 'react'

import Search from '../MainComponents/Search'
import BreweryList from '../MainComponents/BreweryList'

function Main ({ breweries }) {
  // This state stores the filter input to search for (default empty).
  const [filter, setFilter] = useState('')

  // This function filters entries based on the input filter.
  // It is using an array of each object's property values for comparison with the user's input.
  const filterEntries = filter =>
    breweries.filter(i => Object.values(i).some(p =>
      // If property exists, we check whether it matches the filter (disregarding case).
      p ? p.toLowerCase().includes(filter.toLowerCase().trim()) : false))

  // Depending on whether a filter is set, the passed props contains all entries or just the matching ones.
  return (
    <div style={{backgroundColor: 'WhiteSmoke', padding: '0 4em'}}>
      <Search setFilter={setFilter} />
      {filter ? <BreweryList breweries={filterEntries(filter)} /> : <BreweryList breweries={breweries} />}
    </div>
  )
}

export default Main
