import React from 'react'
import { Link } from 'react-router-dom'

const MombasaCityTour = () => {
  const tourDetails = {
    title: "Mombasa City Tour – Full Day Itinerary",
    duration: "1 Day Package",
    price: "From $150",
    description: "Experience a comprehensive exploration of the historical, cultural, and commercial highlights of Kenya's coastal capital. This full-day excursion blends heritage sites, local markets, cultural experiences, and scenic viewpoints.",
    image: "/images/msa.jpg",
    highlights: ["Fort Jesus guided tour", "Old Town walking tour", "Haller Park wildlife", "Spice market experience"],
    destination: "Mombasa",
    program: {
      introduction: "This full-day Mombasa City Tour offers a comprehensive exploration of the historical, cultural, and commercial highlights of Kenya's coastal capital. The excursion blends heritage sites, local markets, cultural experiences, and scenic viewpoints.",
      pickup: {
        time: "07:30 – 08:30",
        title: "Pick-up & Departure",
        details: "Pick-up from hotel/residence, Briefing by professional driver-guide, Transfer to Mombasa Island via Nyali Bridge or Likoni Ferry (for south coast clients)"
      },
      fortJesus: {
        time: "08:45 – 10:30",
        title: "Visit to Fort Jesus",
        details: "Guided tour of Fort Jesus, Explore 16th-century Portuguese architecture, Learn about Swahili, Arab, and European influences, Visit museum galleries and historical exhibits"
      },
      oldTown: {
        time: "10:30 – 11:30",
        title: "Old Town Walking Tour",
        details: "Guided walk through Mombasa Old Town, Key highlights: Narrow streets with carved wooden doors, Arab, Persian, and Swahili architecture, Antique shops and spice markets"
      },
      elephantTusks: {
        time: "11:30 – 12:00",
        title: "Elephant Tusks (Photo Stop)",
        details: "Stop at Mombasa Tusks, Symbolic landmark of Mombasa, Photography opportunity"
      },
      lunch: {
        time: "12:15 – 13:30",
        title: "Lunch Break",
        details: "Lunch at a selected local restaurant (optional or included depending on package), Recommended venues: Tamarind Restaurant (seafood & fine dining), Jahazi Coffee House (Swahili cuisine)"
      },
      hallerPark: {
        time: "13:45 – 15:30",
        title: "Visit to Haller Park",
        details: "Explore Haller Park, Activities: Feed giraffes, View hippos, crocodiles, and tortoises, Learn about ecological rehabilitation"
      },
      akamba: {
        time: "14:45 – 15:30",
        title: "Akamba Handicraft Cooperative",
        details: "Visit Akamba Handicraft Cooperative Society, Observe wood carving process, Purchase souvenirs directly from artisans"
      },
      spiceMarket: {
        time: "15:45 – 16:30",
        title: "Spice Market / Local Market Visit",
        details: "Experience local trade and coastal spices, Optional visit to Marikiti Market"
      },
      return: {
        time: "16:30 – 17:30",
        title: "Return Transfer",
        details: "Drop-off at hotel/residence, End of services"
      }
    },
    inclusions: [
      "Transport in an air-conditioned vehicle",
      "Professional English-speaking guide/driver",
      "Entrance fees (Fort Jesus, Haller Park)",
      "Bottled drinking water",
      "Lunch"
    ]
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={tourDetails.image}
            alt="Mombasa City Tour"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8">
            <h1 className="text-5xl font-bold mb-4">{tourDetails.title}</h1>
            <div className="flex items-center justify-center space-x-6 text-xl">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                🕒 {tourDetails.duration}
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                💰 {tourDetails.price}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-green mb-6">Tour Overview</h2>
              <p className="text-gray-600 text-lg mb-6">{tourDetails.description}</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-green mb-4">Highlights</h3>
                <ul className="space-y-2">
                  {tourDetails.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-orange mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green mb-4">Quick Info</h3>
                <div className="space-y-2">
                  <p className="text-gray-600"><strong>Destination:</strong> {tourDetails.destination}</p>
                  <p className="text-gray-600"><strong>Duration:</strong> {tourDetails.duration}</p>
                  <p className="text-gray-600"><strong>Best Time:</strong> Year-round</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-br from-orange to-green p-8 rounded-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Explore Mombasa?</h3>
                <p className="text-lg mb-6">Discover Kenya's coastal heritage!</p>
                <Link 
                  to="/booking"
                  className="bg-white text-orange font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg inline-block"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-green mb-12">Tour Introduction</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-600 text-lg leading-relaxed">
              {tourDetails.program.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Program */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-green mb-12">Detailed Program</h2>
          
          <div className="space-y-8">
            {/* Pick-up */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <div className="flex items-center">
                  <span className="bg-white text-green px-4 py-2 rounded-full font-bold mr-4">
                    {tourDetails.program.pickup.time}
                  </span>
                  <h3 className="text-2xl font-bold">{tourDetails.program.pickup.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{tourDetails.program.pickup.details}</p>
              </div>
            </div>

            {/* Fort Jesus */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <div className="flex items-center">
                  <span className="bg-white text-green px-4 py-2 rounded-full font-bold mr-4">
                    {tourDetails.program.fortJesus.time}
                  </span>
                  <h3 className="text-2xl font-bold">{tourDetails.program.fortJesus.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{tourDetails.program.fortJesus.details}</p>
              </div>
            </div>

            {/* Old Town */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <div className="flex items-center">
                  <span className="bg-white text-green px-4 py-2 rounded-full font-bold mr-4">
                    {tourDetails.program.oldTown.time}
                  </span>
                  <h3 className="text-2xl font-bold">{tourDetails.program.oldTown.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{tourDetails.program.oldTown.details}</p>
              </div>
            </div>

            {/* Elephant Tusks */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <div className="flex items-center">
                  <span className="bg-white text-green px-4 py-2 rounded-full font-bold mr-4">
                    {tourDetails.program.elephantTusks.time}
                  </span>
                  <h3 className="text-2xl font-bold">{tourDetails.program.elephantTusks.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{tourDetails.program.elephantTusks.details}</p>
              </div>
            </div>

            {/* Lunch */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <div className="flex items-center">
                  <span className="bg-white text-green px-4 py-2 rounded-full font-bold mr-4">
                    {tourDetails.program.lunch.time}
                  </span>
                  <h3 className="text-2xl font-bold">{tourDetails.program.lunch.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{tourDetails.program.lunch.details}</p>
              </div>
            </div>

            {/* Haller Park */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <div className="flex items-center">
                  <span className="bg-white text-green px-4 py-2 rounded-full font-bold mr-4">
                    {tourDetails.program.hallerPark.time}
                  </span>
                  <h3 className="text-2xl font-bold">{tourDetails.program.hallerPark.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{tourDetails.program.hallerPark.details}</p>
              </div>
            </div>

            {/* Akamba Handicraft */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <div className="flex items-center">
                  <span className="bg-white text-green px-4 py-2 rounded-full font-bold mr-4">
                    {tourDetails.program.akamba.time}
                  </span>
                  <h3 className="text-2xl font-bold">{tourDetails.program.akamba.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{tourDetails.program.akamba.details}</p>
              </div>
            </div>

            {/* Spice Market */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <div className="flex items-center">
                  <span className="bg-white text-green px-4 py-2 rounded-full font-bold mr-4">
                    {tourDetails.program.spiceMarket.time}
                  </span>
                  <h3 className="text-2xl font-bold">{tourDetails.program.spiceMarket.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{tourDetails.program.spiceMarket.details}</p>
              </div>
            </div>

            {/* Return */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <div className="flex items-center">
                  <span className="bg-white text-green px-4 py-2 rounded-full font-bold mr-4">
                    {tourDetails.program.return.time}
                  </span>
                  <h3 className="text-2xl font-bold">{tourDetails.program.return.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{tourDetails.program.return.details}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Inclusions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-green mb-12">Package Inclusions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {tourDetails.inclusions.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-orange to-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange to-green">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Explore Mombasa?
          </h2>
          <p className="text-xl text-white opacity-95 mb-8">
            Discover the rich history, culture, and beauty of Kenya's coastal capital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/booking"
              className="bg-white text-orange font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
            >
              Book Now
            </Link>
            <Link 
              to="/services"
              className="bg-transparent text-white font-bold py-4 px-8 rounded-full text-lg transition-all border-2 border-white hover:bg-white hover:text-orange inline-block"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MombasaCityTour
