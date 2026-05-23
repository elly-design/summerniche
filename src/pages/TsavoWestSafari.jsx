import React from 'react'
import { Link } from 'react-router-dom'

const TsavoWestSafari = () => {
  const safariDetails = {
    title: "2 Days / 1 Night Private Safari to Tsavo West National Park from Mombasa/Diani/Kilifi",
    duration: "2 Days / 1 Night",
    price: "From $450",
    description: "Experience a short but exciting private safari to Tsavo West National Park, Kenya's scenic wilderness known for volcanic landscapes, lava flows, rolling hills, and abundant wildlife. This safari starts and ends in Mombasa.",
    image: "/images/cheetah.jpg"
  }

  const itinerary = [
    {
      day: 1,
      title: "MOMBASA – TSAVO WEST NATIONAL PARK",
      content: "You will be picked up early in the morning from your hotel/residence in Mombasa/Diani at approximately 5:30 AM and depart via the Mombasa–Nairobi Highway towards Tsavo West National Park, Kenya's scenic wilderness known for volcanic landscapes, lava flows, rolling hills, and abundant wildlife.\n\nArrive at the park through Mtito Andei Gate and begin your first exciting game drive en route to the lodge/camp. Wildlife commonly seen includes:\n\n·         Elephants\n\n·         Lions\n\n·         Buffaloes\n\n·         Giraffes\n\n·         Zebras\n\n·         Antelopes\n\n·         Leopards (occasionally)\n\nProceed to your safari lodge/camp for check-in and lunch.\n\nAfter a short rest, enjoy an afternoon game drive visiting major attractions such as:\n\n·         Mzima Springs\n\n·         Shetani Lava Flows\n\n·         Rhino Sanctuary (subject to sightings)\n\nDinner and overnight at your selected safari lodge/camp.\n\nRecommended Lodges/Camps\n\n·         Ngulia Safari Lodge\n\n·         Kilaguni Serena Safari Lodge\n\n·         Severin Safari Camp"
    },
    {
      day: 2,
      title: "TSAVO WEST – MOMBASA",
      content: "Early morning game drive before breakfast, the best time to spot predators and active wildlife.\n\nReturn to the lodge for breakfast and later check out with a final en-route game drive as you exit the park.\n\nDrive back to Mombasa with lunch en route (optional depending on arrival time).\n\nArrival in Mombasa in the late afternoon and drop-off at your hotel, airport, or residence."
    }
  ]

  const includes = [
    "Private transport in a 4x4 safari vehicle",
    "Professional English-speaking safari driver/guide",
    "Park entrance fees",
    "Accommodation for 1 night",
    "Meals on Full Board basis (Lunch, Dinner & Breakfast)",
    "Unlimited game drives",
    "Bottled drinking water during safari",
    "Pick up and drop off in Mombasa/Diani"
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

      {/* Safari Itinerary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-darkGray mb-8">SAFARI ITINERARY</h2>
          
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
          <h2 className="text-4xl font-bold mb-4">Ready for Your Tsavo West Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your Tsavo West Safari today and experience the beauty of Kenya's volcanic landscapes and abundant wildlife.
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

export default TsavoWestSafari
