import { useState } from 'react'

import Search from '../MainComponents/Search'
import BreweryList from '../MainComponents/BreweryList'

function Main ({ breweries }) {
  // This state stores the filter input to search for (default empty).
  const [filter, setFilter] = useState('')

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
