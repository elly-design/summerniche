import React from 'react'
import { Link } from 'react-router-dom'

const AmboseliSafari = () => {
  const safariDetails = {
    title: "2 Days / 1 Night Private Amboseli Safari from Mombasa/Diani/kilifi",
    duration: "2 Days / 1 Night",
    price: "$450",
    description: "Experience a short but exciting private safari to Amboseli National Park, famous for large elephant herds and breathtaking views of Mount Kilimanjaro. This safari starts and ends in Mombasa and is ideal for travelers looking for a quick wildlife getaway from the Kenyan coast.",
    image: "/images/elephants.jpg"
  }

  const itinerary = [
    {
      day: 1,
      title: "Mombasa – Amboseli National Park",
      content: "Early morning pick-up from your hotel/residence in Mombasa at around 5:00 AM and depart via the Mombasa–Nairobi Highway towards Amboseli National Park.\n\nEnjoy scenic views of the countryside, local villages, and the vast savannah landscapes en route. Stop for breakfast and short refreshments along the way.\n\nArrive at Amboseli in time for lunch and check-in at your safari lodge/camp.\n\nAfter lunch and short relaxation, proceed for an afternoon game drive in Amboseli National Park.\n\nWildlife commonly seen includes:\n\n·         Elephants\n\n·         Lions\n\n·         Buffaloes\n\n·         Zebras\n\n·         Wildebeests\n\n·         Giraffes\n\n·         Hyenas\n\n·         Various bird species\n\nWeather permitting, enjoy spectacular views of Mount Kilimanjaro, Africa's highest mountain.\n\nReturn to the lodge/camp before sunset for dinner and overnight stay."
    },
    {
      day: 2,
      title: "Amboseli – Mombasa",
      content: "Early morning breakfast followed by a sunrise game drive, the best time to spot active wildlife and capture clear views of Mount Kilimanjaro.\n\nLater depart for Mombasa with en-route lunch and optional stopovers for refreshments and photography.\n\nArrive in Mombasa in the evening and drop-off at your hotel/residence."
    }
  ]

  const includes = [
    "Transport in a private safari van/Land Cruiser",
    "Services of professional English-speaking safari guide",
    "Park entrance fees to Amboseli",
    "1 night accommodation",
    "Meals on full board basis",
    "Bottled drinking water during safari",
    "Game drives as per itinerary"
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
          <h2 className="text-4xl font-bold text-darkGray mb-8">Detailed Itinerary</h2>
          
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
          <h2 className="text-4xl font-bold text-darkGray mb-8">Cost Includes</h2>
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
          <h2 className="text-4xl font-bold mb-4">Ready for Your Amboseli Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your Amboseli Safari today and experience the beauty of Kenya's wildlife and Mount Kilimanjaro.
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

export default AmboseliSafari
