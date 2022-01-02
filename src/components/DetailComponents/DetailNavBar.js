import { useNavigate } from 'react-router-dom'

import { Button } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

const DetailNavBar = () => {
  // We use the useNavigate hook to navigate, in this case to go back to the previous page (hence why '-1').
  let navigate = useNavigate()

  return (
    <Button
      variant="text"
      startIcon={<ArrowBackIosNewIcon />}
      onClick={() => navigate(-1)}
      sx={{margin: '0.5em'}}
    >
      List
    </Button>
  )
}

export default DetailNavBar
