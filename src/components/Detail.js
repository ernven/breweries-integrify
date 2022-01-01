import DetailNavBar from './DetailComponents/DetailNavBar'
import DetailCard from './DetailComponents/DetailCard'

const BreweryDetail = ({ brewery }) => (
  <div style={{backgroundColor: 'WhiteSmoke'}}>
    <DetailNavBar />
    <DetailCard brewery={brewery} />
  </div>
)

export default BreweryDetail
