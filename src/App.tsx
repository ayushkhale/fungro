import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Company from './pages/Company'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </BrowserRouter>
  )
}
