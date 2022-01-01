import { InputAdornment, IconButton } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'

const ClearButton = ({ active, clear }) => active ?
  <InputAdornment position='end'>
    <IconButton aria-label='clear' size='small' disableRipple={true} onClick={() => clear()}>
      <CancelIcon />
    </IconButton>
  </InputAdornment>
: null

export default ClearButton
