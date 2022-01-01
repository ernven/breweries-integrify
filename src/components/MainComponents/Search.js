import { useState } from 'react'

import { Button, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Search = () => {
  const [input, setInput] = useState('')

  return (
    <div style={{padding: '3em 4em 0'}}>

      <TextField
        value={input}
        onChange={e => setInput(e.target.value)}
        size='small'
        InputProps={{startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
        ), }}
      />

      <Button size='small' onClick={() => console.log(input)}>
        Search Breweries
      </Button>

    </div>
  )
}

export default Search
