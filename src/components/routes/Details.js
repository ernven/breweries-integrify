import { useLocation } from 'react-router-dom'

import DetailNavBar from '../DetailComponents/DetailNavBar'
import DetailCard from '../DetailComponents/DetailCard'

const BreweryDetail = () => {
  // We use the useLocation router hook to access the location object (which contains the passed state).
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
