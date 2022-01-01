import { useState } from 'react'

import { Button, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const findBy = input => console.log(input)

const Search = () => {
  const [input, setInput] = useState('')

  return (
    <div style={{padding: '3em 4em 0'}}>

      <TextField
        value={input}
        onChange={e => setInput(e.target.value)}
        size='small'
        sx={{width: '78%'}}
        InputProps={{startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
        ), }}
      />

      <Button size='small' sx={{top: '14%', marginLeft: '1.5em'}} onClick={() => findBy(input)}>
        Search Breweries
      </Button>

    </div>
  )
}

export default Search
