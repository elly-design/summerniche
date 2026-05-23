import React from 'react'
import { Link } from 'react-router-dom'

const TaitaHillsSafari = () => {
  const safariDetails = {
    title: "2 Days / 1 Night Taita Hills Wildlife Sanctuary private Safari from Mombasa",
    duration: "2 Days / 1 Night",
    price: "From $350",
    description: "Experience a short but exciting private safari to Taita Hills Wildlife Sanctuary, featuring diverse wildlife including elephants, lions, buffaloes, zebras, giraffes, and antelopes. This safari starts and ends in Mombasa and is ideal for travelers looking for a quick wildlife getaway from the Kenyan coast.",
    image: "/images/elephants.jpg"
  }

  const itinerary = [
    {
      day: 1,
      title: "Mombasa – Taita Hills Wildlife Sanctuary",
      content: "·         Early morning pick-up from your hotel/residence in Mombasa, Diani, or Kilifi.\n\n·         Drive along the Mombasa–Nairobi highway toward Taita Hills\n\n·         Arrive at Taita Hills Wildlife Sanctuary in time for check-in and lunch at the lodge.\n\n·         Afternoon game drive in the sanctuary searching for:\n\no    Elephants\n\no    Lions\n\no    Buffaloes\n\no    Zebras\n\no    Giraffes\n\no    Antelopes\n\no    Various bird species"
    },
    {
      day: 2,
      title: "Taita Hills – Mombasa",
      content: "·         Early morning game drive for sunrise wildlife viewing.\n\n·         Return to lodge for breakfast.\n\n·         Optional visit to the World War I Museum at Taita Hills.\n\n·         Mid-morning departure back to Mombasa.\n\n·         Lunch en route or at the lodge depending on departure schedule.\n\n·         Arrive in Mombasa in the late afternoon and drop-off at your hotel/residence"
    }
  ]

  const includes = [
    "Transport from/to Mombasa",
    "Accommodation for 1 night",
    "Full board meals",
    "Game drives",
    "Park entry fees",
    "Professional safari guide",
    "Bottled drinking water"
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={safariDetails.image}
            alt={safariDetails.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8">
            <h1 className="text-5xl font-bold mb-4">{safariDetails.title}</h1>
            <div className="flex justify-center gap-4 mb-4">
              <span className="bg-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                {safariDetails.duration}
              </span>
              <span className="bg-green text-white px-4 py-2 rounded-full text-sm font-semibold">
                {safariDetails.price}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Safari Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-darkGray mb-8">Safari Overview</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            {safariDetails.description}
          </p>
        </div>
      </section>

      {/* Detailed Itinerary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-darkGray mb-8">Detailed Safari Itinerary</h2>
          
          {itinerary.map((day, dayIndex) => (
            <div key={dayIndex} className="mb-12">
              <div className="bg-green text-white rounded-lg p-4 mb-6">
                <h3 className="text-2xl font-bold">Day {day.day}: {day.title}</h3>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {day.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Includes */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-darkGray mb-8">These rates generally include:</h2>
          <div className="bg-green/10 rounded-lg p-6">
            <ul className="space-y-2">
              {includes.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-700 whitespace-pre-line">·         {item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-green text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Taita Hills Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your Taita Hills Safari today and experience diverse wildlife and the historic World War I Museum.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/booking" className="bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Book Now
            </Link>
            <Link to="/quote-request" className="bg-white hover:bg-gray-100 text-green px-8 py-4 rounded-lg font-semibold transition-colors">
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TaitaHillsSafari
