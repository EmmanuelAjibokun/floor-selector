import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import TowerOverview from './components/TowerOverview'
import FloorSelector from './components/FloorSelector'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TowerOverview />} />
        <Route path="/tower/:id" element={<FloorSelector />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
