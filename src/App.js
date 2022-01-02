import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Main from './components/routes/Main'
import Details from './components/routes/Details'

import './css/App.css'

// Any non matching routes will show a 404 error.
const NoMatch = () => <h2>404 - Not found</h2>

const App = () => {
  // We use a state to store breweries data.
  const [breweries, setBreweries] = useState([])

  // After the first render, data is fetched from the API.
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then(res => res.status === 200 ? res.json() : console.log(res))
      .then(resJSON => setBreweries(resJSON))
      .catch(err => console.log(err))
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main breweries={breweries} />} />
        <Route path='details' element={<Details />} />
        <Route path='*' element={NoMatch()} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
