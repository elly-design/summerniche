import React from 'react'
import { Link } from 'react-router-dom'

const LakeNaivashaSafari = () => {
  const safariDetails = {
    title: "Lake Naivasha, Hell's Gate & Geothermal Spa",
    duration: "3 Days / 2 Nights",
    price: "From $500",
    description: "Experience a perfect blend of relaxation, adventure, and nature exploration in Kenya's Rift Valley. This 3-day excursion combines scenic lake experiences, cycling and hiking in Hell's Gate, and rejuvenating geothermal spa visits.",
    image: "https://images.unsplash.com/photo-1540206395-68808572332f?w=800&h=400&fit=crop",
    highlights: ["Lake boat safari", "Cycling in Hell's Gate", "Geothermal spa experience", "Rift Valley scenery"],
    destinations: ["Lake Naivasha", "Hell's Gate National Park", "Olkaria Geothermal Spa"],
    startEnd: "Nairobi",
    day1: {
      title: "Nairobi → Lake Naivasha",
      morning: {
        details: "Pick-up from hotel/residence in Nairobi, Briefing by driver-guide, Scenic drive via the Great Rift Valley escarpment, Optional stop at viewpoint for photography"
      },
      midMorning: {
        details: "Arrive at Guided boat safari on Lake Naivasha, Spot hippos, fish eagles, and diverse birdlife, Optional walking safari at Crescent Island (additional cost)"
      },
      lunch: {
        time: "13:00 – 14:00",
        details: "Lunch & Check-in",
        accommodations: ["Lake Naivasha Sopa Resort", "Enashipai Resort & Spa", "Sawela Lodges"]
      },
      leisure: {
        time: "14:00 – 16:30",
        details: "Leisure Time, Relax by the pool or lakeside, Optional nature walk within the lodge"
      },
      evening: {
        time: "16:30 – 18:30",
        details: "Evening Activity (Optional), Sunset viewing or short guided nature walk"
      },
      overnight: {
        time: "19:00",
        details: "Dinner & Overnight Stay"
      }
    },
    day2: {
      title: "Hell's Gate National Park & Geothermal Spa",
      breakfast: {
        time: "06:30 – 07:30",
        details: "Breakfast"
      },
      hellsgate: {
        time: "08:00 – 12:30",
        details: "Visit to Hell's Gate National Park, Transfer to Hell's Gate National Park, Activities: Cycling safari alongside wildlife (zebras, giraffes, antelope), Hiking through gorges (guided), Visit geothermal features and rock formations"
      },
      lunch: {
        time: "13:00 – 14:00",
        details: "Lunch, Picnic lunch or return to lodge"
      },
      spa: {
        time: "14:30 – 17:30",
        details: "Olkaria Geothermal Spa Experience, Visit Olkaria Geothermal Spa, Enjoy natural hot pools rich in minerals, Relaxation and wellness experience"
      },
      return: {
        time: "18:30",
        details: "Return to Lodge"
      },
      overnight: {
        time: "19:30",
        details: "Dinner & Overnight Stay"
      }
    },
    day3: {
      title: "Naivasha → Nairobi",
      breakfast: {
        time: "07:00 – 08:30",
        details: "Breakfast & Check-out"
      },
      optional: {
        time: "09:00 – 11:00",
        details: "Optional Activities, Nature walk, Horse riding (at selected lodges), Visit local flower farms (optional, pre-arranged)"
      },
      return: {
        time: "11:00 – 13:30",
        details: "Return to Nairobi"
      },
      dropoff: {
        time: "13:30 – 14:00",
        details: "Drop-off at hotel/residence or airport"
      }
    },
    inclusions: [
      "Transport in a comfortable vehicle (private or shared)",
      "Professional English-speaking driver/guide",
      "Accommodation (2 nights, full board)",
      "Park entrance fees (Hell's Gate National Park)",
      "Boat ride on Lake Naivasha",
      "Geothermal spa entry fees",
      "Bottled drinking water"
    ]
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={safariDetails.image}
            alt="Lake Naivasha Safari"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8">
            <h1 className="text-5xl font-bold mb-4">{safariDetails.title}</h1>
            <div className="flex items-center justify-center space-x-6 text-xl">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                🕒 {safariDetails.duration}
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                💰 {safariDetails.price}
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
              <h2 className="text-3xl font-bold text-green mb-6">Safari Overview</h2>
              <p className="text-gray-600 text-lg mb-6">{safariDetails.description}</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-green mb-4">Highlights</h3>
                <ul className="space-y-2">
                  {safariDetails.highlights.map((highlight, index) => (
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
                  <p className="text-gray-600"><strong>Destinations:</strong></p>
                  <ul className="ml-4 space-y-1">
                    {safariDetails.destinations.map((dest, index) => (
                      <li key={index} className="text-gray-600">• {dest}</li>
                    ))}
                  </ul>
                  <p className="text-gray-600 mt-3"><strong>Start/End:</strong> {safariDetails.startEnd}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-br from-orange to-green p-8 rounded-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready for Adventure?</h3>
                <p className="text-lg mb-6">Book your Lake Naivasha adventure today!</p>
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

      {/* Detailed Itinerary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-green mb-12">Detailed Itinerary</h2>
          
          <div className="space-y-12">
            {/* Day 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <h3 className="text-2xl font-bold">🗓️ DAY 1: {safariDetails.day1.title}</h3>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div className="border-l-4 border-orange pl-4">
                    <h4 className="font-semibold text-green mb-2">Morning</h4>
                    <p className="text-gray-600">{safariDetails.day1.morning.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-orange pl-4">
                    <h4 className="font-semibold text-green mb-2">Mid Morning</h4>
                    <p className="text-gray-600">{safariDetails.day1.midMorning.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-green pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-green text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {safariDetails.day1.lunch.time}
                      </span>
                      <h4 className="font-semibold text-green">{safariDetails.day1.lunch.details}</h4>
                    </div>
                    <div className="mt-2">
                      <p className="text-gray-600 text-sm"><strong>Recommended accommodations:</strong></p>
                      {safariDetails.day1.lunch.accommodations.map((accommodation, index) => (
                        <p key={index} className="text-gray-600 text-sm ml-4">• {accommodation}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-green pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-green text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {safariDetails.day1.leisure.time}
                      </span>
                      <h4 className="font-semibold text-green">Leisure Time</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day1.leisure.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-orange pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {safariDetails.day1.evening.time}
                      </span>
                      <h4 className="font-semibold text-green">Evening Activity (Optional)</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day1.evening.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-orange pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {safariDetails.day1.overnight.time}
                      </span>
                      <h4 className="font-semibold text-green">Dinner & Overnight Stay</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day1.overnight.details}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <h3 className="text-2xl font-bold">🗓️ DAY 2: {safariDetails.day2.title}</h3>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div className="border-l-4 border-orange pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {safariDetails.day2.breakfast.time}
                      </span>
                      <h4 className="font-semibold text-green">Breakfast</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day2.breakfast.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-orange pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {safariDetails.day2.hellsgate.time}
                      </span>
                      <h4 className="font-semibold text-green">Visit to Hell's Gate National Park</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day2.hellsgate.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-green pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-green text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {safariDetails.day2.lunch.time}
                      </span>
                      <h4 className="font-semibold text-green">Lunch</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day2.lunch.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-green pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-green text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {safariDetails.day2.spa.time}
                      </span>
                      <h4 className="font-semibold text-green">Olkaria Geothermal Spa Experience</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day2.spa.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-orange pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {safariDetails.day2.return.time}
                      </span>
                      <h4 className="font-semibold text-green">Return to Lodge</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day2.return.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-orange pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {safariDetails.day2.overnight.time}
                      </span>
                      <h4 className="font-semibold text-green">Dinner & Overnight Stay</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day2.overnight.details}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <h3 className="text-2xl font-bold">🗓️ DAY 3: {safariDetails.day3.title}</h3>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div className="border-l-4 border-orange pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {safariDetails.day3.breakfast.time}
                      </span>
                      <h4 className="font-semibold text-green">Breakfast & Check-out</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day3.breakfast.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-orange pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {safariDetails.day3.optional.time}
                      </span>
                      <h4 className="font-semibold text-green">Optional Activities</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day3.optional.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-green pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-green text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {safariDetails.day3.return.time}
                      </span>
                      <h4 className="font-semibold text-green">Return to Nairobi</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day3.return.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-green pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-green text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {safariDetails.day3.dropoff.time}
                      </span>
                      <h4 className="font-semibold text-green">Drop-off</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day3.dropoff.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Inclusions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-green mb-12">Package Inclusions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safariDetails.inclusions.map((item, index) => (
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
            Ready for Your Lake Naivasha Adventure?
          </h2>
          <p className="text-xl text-white opacity-95 mb-8">
            Experience the perfect blend of relaxation, adventure, and natural beauty in Kenya's Rift Valley.
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

export default LakeNaivashaSafari
