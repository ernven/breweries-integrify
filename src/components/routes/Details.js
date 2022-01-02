import { useLocation } from 'react-router-dom'

import DetailNavBar from '../DetailComponents/DetailNavBar'
import DetailCard from '../DetailComponents/DetailCard'

const BreweryDetail = () => {
  const location = useLocation()
  
  return (
    <div style={{backgroundColor: 'WhiteSmoke'}}>
      <DetailNavBar />
      <div style={{width: '100vw', height: '100vh'}}>
        {location.state ? <DetailCard brewery={location.state} /> : null}
      </div>
    </div>
  )
}

export default BreweryDetail
