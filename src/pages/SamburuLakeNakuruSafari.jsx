import React from 'react'
import { Link } from 'react-router-dom'

const SamburuLakeNakuruSafari = () => {
  const safariDetails = {
    title: "4 Days / 3 Nights Private Safari to Samburu National Reserve & Lake Nakuru National Park",
    duration: "4 Days / 3 Nights",
    price: "From $1200",
    description: "This 4-day private safari combines the rugged wilderness of Samburu with the scenic beauty and rhino sanctuary of Lake Nakuru. The safari offers excellent chances to spot the Samburu Special Five — Grevy's zebra, reticulated giraffe, Somali ostrich, gerenuk, and Beisa oryx — together with elephants, lions, leopards, rhinos, flamingos, buffaloes, and many other wildlife species.",
    image: "/images/antelopes.jpg"
  }

  const itinerary = [
    {
      day: 1,
      title: "Nairobi – Samburu National Reserve",
      content: "Pick up from your Nairobi hotel or airport in the morning and depart northwards via the central Kenya highlands, passing through Karatina, Nanyuki, and the equator viewpoint. Enjoy scenic landscapes with views of Mount Kenya en route.\n\nArrive at Samburu in time for lunch and check-in at your lodge/camp.\n\nLater proceed for an afternoon game drive in the reserve famous for its rare northern species and large elephant herds along the Ewaso Nyiro River.\n\nExpected Wildlife\n\n·         Elephants\n\n·         Lions\n\n·         Leopards\n\n·         Grevy's zebras\n\n·         Reticulated giraffes\n\n·         Gerenuks\n\n·         Oryx\n\n·         Crocodiles\n\nDinner and overnight at lodge/camp."
    },
    {
      day: 2,
      title: "Full Day in Samburu National Reserve",
      content: "Early morning game drive when predators are most active.\n\nReturn to the lodge for breakfast and relaxation.\n\nAfter lunch, enjoy another extensive afternoon game drive exploring different sections of the reserve and riverine forests.\n\nOptional visit to a Samburu cultural village can be arranged at extra cost.\n\nMeals Included\n\n·         Breakfast\n\n·         Lunch\n\n·         Dinner\n\nDinner and overnight at lodge/camp."
    },
    {
      day: 3,
      title: "Samburu – Lake Nakuru National Park",
      content: "Early breakfast then depart Samburu and drive south via Nyahururu with a brief stop at Thomson Falls.\n\nProceed to Lake Nakuru National Park arriving in time for lunch.\n\nLater enjoy an afternoon game drive around the lake and acacia woodland.\n\nHighlights\n\n·         White & black rhinos\n\n·         Rothschild giraffes\n\n·         Flamingos\n\n·         Tree-climbing lions\n\n·         Buffaloes\n\n·         Waterbucks\n\n·         Scenic viewpoints\n\nDinner and overnight at lodge/camp."
    },
    {
      day: 4,
      title: "Lake Nakuru – Nairobi",
      content: "Early morning game drive for final wildlife viewing and photography.\n\nReturn to the lodge for breakfast then depart for Nairobi with lunch stopover en route.\n\nArrive in Nairobi in the afternoon and drop off at hotel or airport."
    }
  ]

  const includes = [
    "Transport in private safari vehicle",
    "Professional English-speaking driver/guide",
    "Accommodation for 3 nights",
    "Meals on full board basis",
    "Park entrance fees",
    "Daily game drives",
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
            <p className="text-lg mb-2">Starting & Ending in Nairobi</p>
          </div>
        </div>
      </section>

      {/* Safari Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-darkGray mb-8">SAFARI OVERVIEW</h2>
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
          <h2 className="text-4xl font-bold mb-4">Ready for Your Samburu & Lake Nakuru Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your Samburu & Lake Nakuru Safari today and experience the Samburu Special Five and the flamingos of Lake Nakuru.
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

export default SamburuLakeNakuruSafari
