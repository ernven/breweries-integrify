import { useState } from 'react'

import { Button, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import ClearButton from './ClearButton'

// This component renders a search bar to filter the list with (done in Main.js) and a search button to trigger the action.
// The bar features a clear all button for easy cleanup/reset.

const Search = ({ setFilter }) => {
  // Two states are used here: one to store user input and one to keep the activity status. 
  const [input, setInput] = useState('')
  const [active, setActive] = useState(false)

  // This function handles input changes (incl. setting the toggle to display the clear bar button).
  const handleInput = input => {
    if (input) {
      setInput(input)
      setActive(true)
    } else {
      clearSearchBar()
    }
  }

  // This function clears the search bar and resets the filter.
  const clearSearchBar = () => {
    setInput('')
    setFilter('')
    setActive(false)
  }

  return (
    <div style={{padding: '3em 4em 0'}}>

      <TextField
        value={input}
        onChange={e => handleInput(e.target.value)}
        size='small'
        sx={{width: '78%'}}
        InputProps={{startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
        ), endAdornment: (<ClearButton active={active} clear={clearSearchBar} />), }}
      />

      <Button size='small' sx={{paddingTop: '0.7em', marginLeft: '1.5em'}} onClick={() => setFilter(input)}>
        Search Breweries
      </Button>

    </div>
  )
}

export default Search
