import React from 'react'
import { Link } from 'react-router-dom'

const TsavoEastSaltLickSafari = () => {
  const safariDetails = {
    title: "3 Days / 2 Nights Private Safari to Tsavo East National Park & Salt Lick Safari Lodge",
    duration: "3 Days / 2 Nights",
    price: "From $550",
    description: "This private safari combines the vast wilderness of Tsavo East with the scenic Taita Hills Wildlife Sanctuary and the famous Salt Lick Safari Lodge. The safari offers excellent wildlife viewing including elephants, lions, giraffes, zebras, buffaloes, antelopes, and numerous bird species.",
    image: "/images/cheetah.jpg"
  }

  const itinerary = [
    {
      day: 1,
      title: "MOMBASA – TSAVO EAST NATIONAL PARK",
      content: "Meal Plan: Lunch & Dinner\n\nEarly morning pick-up from your beach hotel/residence in Mombasa at around 5:30 AM and depart for Tsavo East National Park via the Mombasa–Nairobi highway.\n\nArrive at Tsavo East through Bachuma Gate and begin your first game drive en route to the lodge/camp. Tsavo East is Kenya's largest national park and is famous for:\n\n·         Red elephants\n\n·         Lions of Tsavo\n\n·         Aruba Dam\n\n·         Vast savannah plains\n\n·         Large herds of buffaloes and zebras\n\nCheck in at the lodge and enjoy lunch.\n\nAfter a short relaxation, proceed for an afternoon game drive in search of wildlife until sunset.\n\nDinner and overnight stay"
    },
    {
      day: 2,
      title: "TSAVO EAST – TAITA HILLS – SALT LICK",
      content: "Early morning game drive before breakfast for a chance to spot predators and early grazers.\n\nReturn to the lodge for breakfast then depart with a game drive en route heading towards Taita Hills Wildlife Sanctuary.\n\nArrive at Taita Hills in time for lunch.\n\nAfter lunch, enjoy an afternoon game drive in the sanctuary which hosts:\n\n·         Elephants\n\n·         Lions\n\n·         Cheetahs\n\n·         Giraffes\n\n·         Oryx\n\n·         Numerous bird species\n\nLater proceed to the iconic Salt Lick Safari Lodge built on stilts overlooking a busy waterhole where animals gather to drink throughout the day and night.\n\nDinner and overnight stay at:\n\n·         Salt Lick Safari Lodge"
    },
    {
      day: 3,
      title: "SALT LICK – MOMBASA",
      content: "Meal Plan: Breakfast & Lunch\n\nEarly morning game drive in Taita Hills Sanctuary followed by breakfast at the lodge.\n\nCheck out and depart for Mombasa with game viewing en route.\n\nLunch served at a restaurant on the way.\n\nArrive in Mombasa in the late afternoon and drop off at your hotel, airport, or residence."
    }
  ]

  const includes = [
    "Transport in a private safari vehicle",
    "Services of professional English-speaking driver guide",
    "All park entrance fees",
    "Accommodation for 2 nights",
    "Meals as per itinerary",
    "Bottled drinking water during game drives",
    "Extensive game drives",
    "Pick up and drop off in Mombasa"
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
            <p className="text-lg mb-2">Starting & Ending in Mombasa</p>
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
          <h2 className="text-4xl font-bold text-darkGray mb-8">DETAILED ITINERARY</h2>
          
          {itinerary.map((day, dayIndex) => (
            <div key={dayIndex} className="mb-12">
              <div className="bg-green text-white rounded-lg p-4 mb-6">
                <h3 className="text-2xl font-bold">DAY {day.day}: {day.title}</h3>
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
          <h2 className="text-4xl font-bold text-darkGray mb-8">COST INCLUDES</h2>
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
          <h2 className="text-4xl font-bold mb-4">Ready for Your Tsavo East & Salt Lick Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your Tsavo East & Salt Lick Safari today and experience the red elephants of Tsavo and the iconic Salt Lick Safari Lodge.
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

export default TsavoEastSaltLickSafari
