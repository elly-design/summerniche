import React from 'react'
import { Link } from 'react-router-dom'

const OlPejetaSafari = () => {
  const safariDetails = {
    title: "2 Days / 1 Night Private Safari to Ol Pejeta Conservancy – Sweetwaters Serena Camp",
    duration: "2 Days / 1 Night",
    price: "From $580",
    description: "Enjoy an unforgettable 2 Days / 1 Night private safari to the world-famous Sweetwaters Serena Camp located inside Ol Pejeta Conservancy, renowned for the Big Five, the last remaining Northern White Rhinos, Chimpanzee Sanctuary, excellent rhino sightings, and scenic views of Mount Kenya.",
    image: "/images/rhino.jpg"
  }

  const itinerary = [
    {
      day: 1,
      title: "Nairobi – Ol Pejeta Conservancy",
      content: "Pick up from your Nairobi hotel/residence at 6:30 AM by your professional safari driver-guide in a private 4x4 Land Cruiser/safari van.\n\nDrive through the scenic Kenyan highlands with a brief stop at the Equator crossing in Nanyuki for photos and refreshments.\n\nArrive at Sweetwaters Serena Camp in time for lunch and check-in.\n\nAfter lunch and relaxation, proceed for an afternoon game drive in Ol Pejeta Conservancy.\n\nActivities include:\n\n·         Rhino tracking opportunities\n\n·         Viewing lions, elephants, buffaloes, giraffes, zebras, and antelopes\n\n·         Visit to the Chimpanzee Sanctuary\n\n·         Scenic photography with Mount Kenya backdrop\n\nReturn to camp before sunset for dinner and overnight stay."
    },
    {
      day: 2,
      title: "Ol Pejeta – Nairobi",
      content: "Early morning game drive from 6:30 AM for the best wildlife viewing experience.\n\nReturn to camp for breakfast and check-out.\n\nDepart for Nairobi with lunch en route.\n\nArrival in Nairobi in the late afternoon and drop-off at your hotel/residence or airport.\n\nMeals:\nBreakfast & Lunch"
    }
  ]

  const includes = [
    "Transport in a private 4x4 safari van/ Land Cruiser",
    "Services of professional English-speaking safari guide",
    "1 night accommodation on full board basis",
    "All meals as per itinerary",
    "Bottled drinking water during safari",
    "Afternoon and morning game drives",
    "Pick up and drop off in Nairobi",
    "Conservancy game drive fees",
    "Visit to chimpanzee sanctuary"
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
            <p className="text-lg mb-2">Departure from Nairobi</p>
          </div>
        </div>
      </section>

      {/* Safari Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-darkGray mb-8">Safari Overview</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Enjoy an unforgettable 2 Days / 1 Night private safari to the world-famous Sweetwaters Serena Camp located inside Ol Pejeta Conservancy.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            The conservancy is renowned for:
          </p>
          <div className="bg-green/10 rounded-lg p-6">
            <ul className="space-y-2">
              {["The Big Five wildlife experience", "The last remaining Northern White Rhinos", "Chimpanzee Sanctuary", "Excellent rhino sightings", "Scenic views of Mount Kenya", "Optional night game drives"].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-700 whitespace-pre-line">·         {item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed mt-8">
            The camp offers luxury tented accommodation overlooking a busy waterhole frequently visited by elephants, zebras, giraffes, and rhinos.
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
          <h2 className="text-4xl font-bold mb-4">Ready for Your Ol Pejeta Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your Ol Pejeta Safari today and experience the Big Five, Northern White Rhinos, and the Chimpanzee Sanctuary.
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

export default OlPejetaSafari
