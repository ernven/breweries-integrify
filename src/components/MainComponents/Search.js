import { useState } from 'react'

import { Button, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import ClearButton from './ClearButton'

import '../../css/App.css'

// This component renders a search bar to filter the list with (done in Main.js) and a search button to trigger the action.
// The bar features a clear all button for easy cleanup/reset.

const Search = ({ setFilter }) => {
  // Two states are used here: one to store user input and one to keep the activity status. 
  const [input, setInput] = useState('')
  const [active, setActive] = useState(false)

  // This function handles input changes (incl. setting the toggle to display the clear bar button).
  const handleInput = input => input ? (setInput(input), setActive(true)) : clearSearchBar()

  // This function clears the search bar and resets the filter.
  const clearSearchBar = () => {
    setInput('')
    setFilter('')
    setActive(false)
  }

  return (
    <div id='SearchBar'>

      <TextField
        value={input}
        onChange={e => handleInput(e.target.value)}
        size='small'
        InputProps={{startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
        ), endAdornment: (<ClearButton active={active} clear={clearSearchBar} />), }}
      />

      <Button size='small' id='SearchButton' onClick={() => setFilter(input)}>
        Search Breweries
      </Button>

    </div>
  )
}

export default Search
