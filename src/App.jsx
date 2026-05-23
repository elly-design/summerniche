import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import QuoteRequest from './pages/QuoteRequest'
import TsavoSafari from './pages/TsavoSafari'
import MasaiMaraSafari from './pages/MasaiMaraSafari'
import LakeNaivashaSafari from './pages/LakeNaivashaSafari'
import MombasaCityTour from './pages/MombasaCityTour'
import NairobiNationalPark from './pages/NairobiNationalPark'
import WasiniMarinePark from './pages/WasiniMarinePark'
import AmboseliSafari from './pages/AmboseliSafari'
import TsavoWestSafari from './pages/TsavoWestSafari'
import LakeNakuruNaivashaMaraSafari from './pages/LakeNakuruNaivashaMaraSafari'
import TsavoEastSaltLickSafari from './pages/TsavoEastSaltLickSafari'
import SamburuLakeNakuruSafari from './pages/SamburuLakeNakuruSafari'
import TaitaHillsSafari from './pages/TaitaHillsSafari'
import TsavoEastSafari from './pages/TsavoEastSafari'
import MasaiMara4DaySafari from './pages/MasaiMara4DaySafari'
import OlPejetaSafari from './pages/OlPejetaSafari'

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/quote-request" element={<QuoteRequest />} />
            <Route path="/tsavo-safari" element={<TsavoSafari />} />
            <Route path="/masai-mara-safari" element={<MasaiMaraSafari />} />
            <Route path="/lake-naivasha-safari" element={<LakeNaivashaSafari />} />
            <Route path="/mombasa-city-tour" element={<MombasaCityTour />} />
            <Route path="/nairobi-national-park" element={<NairobiNationalPark />} />
            <Route path="/wasini-marine-park" element={<WasiniMarinePark />} />
            <Route path="/amboseli-safari" element={<AmboseliSafari />} />
            <Route path="/tsavo-west-safari" element={<TsavoWestSafari />} />
            <Route path="/lake-nakuru-naivasha-mara-safari" element={<LakeNakuruNaivashaMaraSafari />} />
            <Route path="/tsavo-east-salt-lick-safari" element={<TsavoEastSaltLickSafari />} />
            <Route path="/samburu-lake-nakuru-safari" element={<SamburuLakeNakuruSafari />} />
            <Route path="/taita-hills-safari" element={<TaitaHillsSafari />} />
            <Route path="/tsavo-east-safari" element={<TsavoEastSafari />} />
            <Route path="/masai-mara-4day-safari" element={<MasaiMara4DaySafari />} />
            <Route path="/ol-pejeta-safari" element={<OlPejetaSafari />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
