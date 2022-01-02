import { Typography } from '@mui/material'
import SportsBarIcon from '@mui/icons-material/SportsBar'

const Header = () => (
  <div style={{backgroundColor: 'Gold', height: '20%'}}>
    <Typography variant='h2' sx={{padding: '0.6em 0.6em 0.2em'}}>
      <SportsBarIcon fontSize='x-large' />Breweries
    </Typography>
  </div>
)

export default Header
