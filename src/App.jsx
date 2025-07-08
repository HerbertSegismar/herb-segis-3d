import Portfolio from './pages/Portfolio'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AnalyticsDashboard from './pages/AnalyticsDashboard'
import AITool from './pages/AITool'
import MobileAppLanding from './pages/MobileAppLanding'
import EcommercePlatform from './pages/EcommercePlatform'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />  
        <Route path="/AITool" element={<AITool />} />
        <Route path="/AnalyticsDashboard" element={<AnalyticsDashboard />} />
        <Route path="/MobileAppLanding" element={<MobileAppLanding />} />
        <Route path="/EcommercePlatform" element={<EcommercePlatform />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App