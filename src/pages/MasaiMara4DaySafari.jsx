import React from 'react'
import { Link } from 'react-router-dom'

const MasaiMara4DaySafari = () => {
  const safariDetails = {
    title: "4 Days / 3 Nights Private Safari to Masai Mara National Reserve from Nairobi",
    duration: "4 Days / 3 Nights",
    price: "From $1300",
    description: "Experience an unforgettable 4-day private safari to Maasai Mara National Reserve, Kenya's premier wildlife destination famous for the Big Five, endless savannah plains, and the spectacular wildebeest migration. This safari starts and ends in Nairobi and is conducted in a private 4x4 Land Cruiser with a professional English-speaking guide.",
    image: "/images/antelopes.jpg"
  }

  const itinerary = [
    {
      day: 1,
      title: "Nairobi – Maasai Mara National Reserve",
      content: "Pick up from your hotel, residence, or airport in Nairobi at approximately 7:00 AM followed by a safari briefing. Depart for Maasai Mara via the scenic Great Rift Valley with a stopover at the viewpoint for photography and refreshments.\n\nProceed to Maasai Mara arriving in time for lunch at the camp/lodge and check-in.\n\nAfter relaxation, depart for an afternoon game drive in search of:\n\n·         Lions\n\n·         Elephants\n\n·         Buffaloes\n\n·         Giraffes\n\n·         Zebras\n\n·         Cheetahs\n\n·         Wildebeests\n\n·         Leopards and other wildlife\n\nReturn to the lodge/camp before sunset.\n\nMeals: Lunch & Dinner\nAccommodation: Mid-range safari camp/lodge"
    },
    {
      day: 2,
      title: "Full Day Game Drive in Maasai Mara",
      content: "Early breakfast followed by a full-day game viewing experience with picnic lunch inside the reserve.\n\nExplore different sections of Maasai Mara famous for:\n\n·         Big Five wildlife viewing\n\n·         Endless savannah plains\n\n·         Mara River crossings\n\n·         Birdlife and scenic landscapes\n\nVisit the Mara River area where crocodiles and hippos are commonly seen. During migration season, witness the spectacular wildebeest migration.\n\nOptional activities:\n\n·         Maasai village cultural visit\n\nReturn to the lodge/camp in the evening.\n\nMeals: Breakfast, Lunch & Dinner\nAccommodation: Mid-range safari camp/lodge"
    },
    {
      day: 3,
      title: "Maasai Mara Full Day Exploration",
      content: "After breakfast, enjoy another extensive game drive exploring deeper parts of the reserve for more wildlife encounters and photography opportunities.\n\nThis day allows guests to:\n\n·         Track predators\n\n·         Experience sunrise wildlife viewing\n\n·         Enjoy bird watching\n\n·         Visit less explored areas of the reserve\n\nPicnic lunch served in the wilderness.\n\nReturn to the lodge/camp for dinner and overnight stay.\n\nMeals: Breakfast, Lunch & Dinner\nAccommodation: Mid-range safari camp/lodge"
    },
    {
      day: 4,
      title: "Maasai Mara – Nairobi",
      content: "Early morning optional game drive followed by breakfast and check-out.\n\nDepart Maasai Mara and drive back to Nairobi with lunch en route (optional stop).\n\nArrival in Nairobi in the late afternoon with drop-off at hotel, residence, or airport."
    }
  ]

  const includes = [
    "Transport in private 4x4 safari Land Cruiser",
    "Professional English-speaking safari guide/driver",
    "Accommodation for 3 nights",
    "Meals as per itinerary",
    "Daily game drives",
    "Park entrance fees",
    "Bottled drinking water during safari",
    "Pick up and drop off in Nairobi"
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

      {/* Package Includes */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-darkGray mb-8">PACKAGE INCLUDES</h2>
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
          <h2 className="text-4xl font-bold mb-4">Ready for Your Ultimate Masai Mara Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your 4-Day Masai Mara Safari today and experience the Big Five, endless savannah plains, and the spectacular wildebeest migration.
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

export default MasaiMara4DaySafari
