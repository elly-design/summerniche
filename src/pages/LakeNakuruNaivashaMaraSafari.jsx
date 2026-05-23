import React from 'react'
import { Link } from 'react-router-dom'

const LakeNakuruNaivashaMaraSafari = () => {
  const safariDetails = {
    title: "5 Days 4 Nights Lake Nakuru, Lake Naivasha and Masai Mara",
    duration: "5 Days / 4 Nights",
    price: "From $1400",
    description: "This private safari combines Kenya's most scenic wildlife destinations with excellent opportunities to see the Big Five, flamingos, rhinos, hippos, giraffes, and breathtaking Rift Valley landscapes. The safari is conducted in a private 4x4 Land Cruiser with a professional English-speaking driver guide.",
    image: "/images/antelopes.jpg"
  }

  const itinerary = [
    {
      day: 1,
      title: "Nairobi – Maasai Mara National Reserve",
      content: "Pick up from your Nairobi hotel or Jomo Kenyatta International Airport at 7:00 AM. Depart for Maasai Mara via the scenic Great Rift Valley with a stopover at the escarpment viewpoint for photography and refreshments.\n\nProceed through Narok town arriving in Maasai Mara in time for lunch at the lodge/camp. After relaxation, enjoy an afternoon game drive from 3:30 PM to sunset in search of lions, elephants, buffaloes, cheetahs, giraffes, and other wildlife.\n\nMeals\nLunch & Dinner\n\nOvernight\nSafari Camp/Lodge in Maasai Mara"
    },
    {
      day: 2,
      title: "Full Day Game Drive in Maasai Mara",
      content: "After early breakfast, depart with picnic lunch boxes for a full-day game drive in the reserve. Explore different sections of the park including the Mara River area, famous for wildebeest migration crossings during migration season.\n\nWildlife commonly spotted includes:\n\n·         Lions\n\n·         Leopards\n\n·         Cheetahs\n\n·         Elephants\n\n·         Zebras\n\n·         Hyenas\n\n·         Wildebeests\n\n·         Hippos & crocodiles\n\nReturn to the lodge in the evening for dinner and overnight.\n\nMeals\nBreakfast, Lunch & Dinner\n\nOvernight\nSafari Camp/Lodge in Maasai Mara"
    },
    {
      day: 3,
      title: "Maasai Mara – Lake Naivasha",
      content: "Enjoy an early morning game drive followed by breakfast. Depart Maasai Mara and drive to Lake Naivasha arriving in the afternoon.\n\nAfter lunch, enjoy a relaxing boat ride on Lake Naivasha where you may spot:\n\n·         Hippos\n\n·         Fish eagles\n\n·         Cormorants\n\n·         Pelicans\n\nOptional walking safari at Crescent Island can also be arranged.\n\nMeals\nBreakfast, Lunch & Dinner\n\nOvernight\nLake Naivasha Resort/Lodge"
    },
    {
      day: 4,
      title: "Lake Naivasha – Lake Nakuru National Park",
      content: "After breakfast, depart for Lake Nakuru National Park for game viewing.\n\nLake Nakuru is famous for:\n\n·         White & black rhinos\n\n·         Rothschild giraffes\n\n·         Flamingos\n\n·         Lions\n\n·         Leopards\n\n·         Buffaloes\n\nEnjoy extensive game drives around the lake and acacia woodland areas.\n\nMeals\nBreakfast, Lunch & Dinner\n\nOvernight\nLake Nakuru Lodge/Camp"
    },
    {
      day: 5,
      title: "Lake Nakuru – Nairobi",
      content: "After breakfast, enjoy a final morning game drive before departing for Nairobi.\n\nArrive in Nairobi in the afternoon with drop-off at your hotel or airport."
    }
  ]

  const includes = [
    "Transport in private 4x4 Land Cruiser",
    "Professional safari guide/driver",
    "4 nights accommodation",
    "Meals as per itinerary",
    "Park entrance fees",
    "Unlimited game drives",
    "Lake Naivasha boat ride",
    "Bottled drinking water",
    "Pick up & drop off in Nairobi"
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
          
          <div className="bg-green/10 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green mb-4">Safari Highlights</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-gray-700 whitespace-pre-line">·         Big Five game drives in Maasai Mara</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 whitespace-pre-line">·         Rhino tracking in Lake Nakuru National Park</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 whitespace-pre-line">·         Boat ride at Lake Naivasha</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 whitespace-pre-line">·         Great Rift Valley viewpoints</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 whitespace-pre-line">·         Optional Maasai village visit</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 whitespace-pre-line">·         Daily game drives with professional guide</span>
              </li>
            </ul>
          </div>
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
          <h2 className="text-4xl font-bold mb-4">Ready for Your Ultimate Safari Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your Lake Nakuru, Naivasha & Masai Mara Safari today and experience the best of Kenya's wildlife and landscapes.
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

export default LakeNakuruNaivashaMaraSafari
