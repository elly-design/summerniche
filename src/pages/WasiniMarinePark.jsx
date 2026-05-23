import React from 'react'
import { Link } from 'react-router-dom'

const WasiniMarinePark = () => {
  const tourDetails = {
    title: "1 Day Private Tour to Kisite-Mpunguti Marine National Park from Mombasa",
    duration: "1 Day",
    price: "From $200",
    description: "Experience an unforgettable marine adventure to Kisite-Mpunguti Marine National Park, featuring dolphin watching, snorkeling in crystal-clear waters, and a delicious Swahili seafood lunch on Wasini Island.",
    image: "/images/dolphine.jpg"
  }

  const itinerary = [
    {
      time: "05:30 AM",
      title: "Pick Up from Mombasa/Diani",
      content: "Early morning pick-up from your hotel, residence, or airport in Mombasa and depart south towards Shimoni through the scenic coastal highway."
    },
    {
      time: "08:00 AM",
      title: "Arrival at Shimoni Jetty",
      content: "Arrival at Shimoni village for briefing and boat boarding. Begin the exciting dhow/boat excursion to KISITE MPUNGUTI MARINE NATIONAL PARK & RESERVE."
    },
    {
      time: "08:30 AM",
      title: "Dolphin Watching & Marine Adventure",
      content: "Enjoy a cruise across the Indian Ocean while searching for dolphins. The marine park is famous for:\n\n·         Dolphin sightings\n\n·         Coral reefs\n\n·         Tropical fish species\n\n·         Crystal-clear snorkeling waters"
    },
    {
      time: "09:30 AM",
      title: "Snorkeling & Swimming",
      content: "Arrive at the coral gardens for guided snorkeling and swimming activities. Snorkeling equipment and life jackets are provided."
    },
    {
      time: "12:30 PM",
      title: "Wasini Island Lunch Experience",
      content: "Sail to Wasini Island and Kisite Marine Park for a Swahili seafood lunch.\n\nLunch usually includes:\n\n·         Fresh seafood\n\n·         Coconut rice\n\n·         Chapati\n\n·         Tropical fruits\n\n·         Vegetarian option available on request"
    },
    {
      time: "02:00 PM",
      title: "Wasini Village / Coral Garden Walk",
      content: "Optional guided walk through Wasini coral gardens and local village experience."
    },
    {
      time: "03:00 PM",
      title: "Return Boat Ride to Shimoni",
      content: "Board your boat back to Shimoni jetty."
    },
    {
      time: "03:30 PM",
      title: "Drive Back to Mombasa",
      content: "Begin return journey to Mombasa."
    },
    {
      time: "05:30 PM",
      title: "Drop Off",
      content: "Drop-off at your hotel/residence in Mombasa."
    }
  ]

  const includes = [
    "Private transport from/to Mombasa",
    "Private boat excursion",
    "Snorkeling equipment",
    "Seafood lunch at Wasini Island",
    "Bottled drinking water",
    "Services of professional guide",
    "Dolphin watching excursion",
    "Marine park conservation fees",
    "Hotel pick up & drop off"
  ]

  const excludes = [
    "Personal expenses",
    "Alcoholic drinks",
    "Diving charges",
    "Tips/gratuities"
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={tourDetails.image}
            alt={tourDetails.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8">
            <h1 className="text-5xl font-bold mb-4">{tourDetails.title}</h1>
            <div className="flex justify-center gap-4 mb-4">
              <span className="bg-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                {tourDetails.duration}
              </span>
              <span className="bg-green text-white px-4 py-2 rounded-full text-sm font-semibold">
                {tourDetails.price}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-darkGray mb-8">Tour Overview</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            {tourDetails.description}
          </p>
        </div>
      </section>

      {/* Tour Itinerary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-darkGray mb-8">TOUR ITINERARY</h2>
          
          <div className="space-y-6">
            {itinerary.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-green text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm">
                      {item.time}
                    </div>
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-bold text-darkGray mb-2">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
          <h2 className="text-4xl font-bold mb-4">Ready for Your Marine Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your Wasini Marine Park tour today and experience the beauty of Kenya's coastal marine life.
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

export default WasiniMarinePark
