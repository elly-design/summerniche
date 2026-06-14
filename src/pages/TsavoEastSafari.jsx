import React from 'react'
import { Link } from 'react-router-dom'

const TsavoEastSafari = () => {
  const safariDetails = {
    title: "3 Days / 2 Night Private Safari to Tsavo East National Park from Mombasa/Diani/kilifi",
    price: "From $650",
    description: "Experience a short but exciting private safari to Tsavo East National Park, one of Kenya's largest and oldest national parks famous for red elephants, lions, giraffes, zebras, buffaloes, and diverse birdlife. This safari starts and ends in Mombasa/Diani and is ideal for travelers looking for a quick wildlife getaway from the Kenyan coast.",
    image: "/images/cheetah.jpg"
  }

  const itinerary = [
    {
      day: 1,
      title: "Mombasa – Tsavo East National Park",
      content: "Pick up from your hotel/residence in Mombasa/Diani early in the morning at approximately 5:30 AM. Depart via the Mombasa–Nairobi highway towards Tsavo East National Park, one of Kenya's largest and oldest national parks famous for red elephants, lions, giraffes, zebras, buffaloes, and diverse birdlife.\n\nArrive at the park through Bachuma Gate and begin your first game drive en route to the lodge/camp. Enjoy wildlife viewing while heading to your accommodation for check-in and lunch.\n\nAfter lunch and short relaxation, proceed for an afternoon game drive in search of:\n\n·         Red elephants\n\n·         Lions\n\n·         Leopards\n\n·         Buffaloes\n\n·         Zebras\n\n·         Giraffes\n\n·         Antelopes\n\n·         Crocodiles at Aruba Dam\n\nReturn to the lodge/camp before sunset for dinner and overnight stay"
    },
    {
      day: 2,
      title: "Tsavo East – Full Day Game Drive",
      content: "Early morning game drive before breakfast, the best time to spot predators and other wildlife as animals are more active during cooler hours.\n\nReturn to the lodge for breakfast and then proceed for a full day game drive exploring different areas of the park. Visit Lugard Falls, the Mudanda Rock (famous for elephants), and the Yatta Plateau.\n\nEnjoy a picnic lunch in the wilderness before continuing your game drive in the afternoon. Search for the famous red elephants, lions, leopards, cheetahs, and various bird species.\n\nReturn to the lodge/camp before sunset for dinner and overnight stay."
    },
    {
      day: 3,
      title: "Tsavo East – Mombasa",
      content: "Early morning game drive before breakfast for your final wildlife viewing opportunities.\n\nReturn to the lodge for breakfast, check out, and enjoy an en-route game drive as you exit the park.\n\nDepart for Mombasa with lunch stop en route (optional depending on return schedule). Arrive in Mombasa in the afternoon and drop off at your hotel, airport, or residence."
    }
  ]

  const includes = [
    "Transport in a private safari van/Land Cruiser",
    "Services of professional English-speaking driver guide",
    "Park entry fees to Tsavo East National Park",
    "Accommodation for 2 nights",
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
          <h2 className="text-4xl font-bold mb-4">Ready for Your Tsavo East Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your Tsavo East Safari today and experience the red elephants and diverse wildlife of Kenya's largest national park.
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

export default TsavoEastSafari
