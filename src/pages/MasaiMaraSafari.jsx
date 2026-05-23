import React from 'react'
import { Link } from 'react-router-dom'

const MasaiMaraSafari = () => {
  const safariDetails = {
    title: "Maasai Mara Safari",
    duration: "3 Days / 2 Nights",
    price: "From $500",
    description: "Experience the world-famous Maasai Mara National Reserve, home to the Big Five and the spectacular Great Migration. This comprehensive safari offers unforgettable wildlife encounters in Kenya's premier game reserve.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=400&fit=crop",
    highlights: ["Big Five viewing", "Great Migration (seasonal)", "Professional guide", "Full board accommodation"],
    day1: {
      title: "Nairobi → Maasai Mara (Travel + First Game Drive)",
      pickup: {
        time: "07:00",
        details: "Pick-up from hotel/residence in Nairobi, Begin drive via the Nairobi–Narok highway"
      },
      riftValley: {
        time: "09:00",
        details: "Scenic viewpoint stop for photos, Stretch break (15–20 mins)"
      },
      narokStop: {
        time: "11:30",
        details: "Short stop in Narok for: Fuel, Washroom break, Optional snacks/water purchase"
      },
      arrival: {
        time: "13:30",
        details: "Enter via Sekenani or Talek Gate, Check-in at lodge/camp, Lunch + rest"
      },
      eveningGameDrive: {
        time: "16:00",
        duration: "2–3 hrs",
        details: "First safari experience, Likely sightings: Lions, elephants, giraffes, Zebras, antelopes, Possibly cheetahs"
      },
      overnight: {
        time: "19:00",
        details: "Dinner at camp/lodge, Relax by campfire (many camps offer this)"
      }
    },
    day2: {
      title: "Full-Day Safari Experience",
      earlyMorning: {
        time: "06:00",
        details: "Best time for predator activity, Sunrise views over the savannah 🌅, Spot: Lions hunting, Hyenas, jackals, Large elephant herds"
      },
      breakfast: {
        time: "09:00",
        details: "Either: Return to camp for breakfast OR Packed bush breakfast in the reserve"
      },
      fullDayGameDrive: {
        time: "10:00",
        details: "Explore deeper into the reserve, Key Highlight: Visit the famous Mara River, Crocodiles & hippos, Wildebeest crossings (July–Oct migration season)"
      },
      picnicLunch: {
        time: "13:00",
        details: "Enjoy lunch at designated picnic site inside the park"
      },
      continueGameDrive: {
        time: "15:00",
        details: "Track wildlife across different zones, Chance to see: Leopards (rare but possible), Buffalo, rhinos, Massive herds of wildebeest"
      },
      return: {
        time: "18:00",
        details: "Rest, shower, relax"
      },
      evening: {
        time: "Evening",
        details: "Dinner at lodge, Optional: Maasai cultural visit, Short nature walk (where permitted)"
      }
    },
    day3: {
      title: "Maasai Mara → Nairobi (Return Journey)",
      breakfast: {
        time: "07:00",
        details: "Relaxed morning"
      },
      checkout: {
        time: "08:00",
        details: "Begin drive back to Nairobi"
      },
      narokStop: {
        time: "11:00",
        details: "Lunch stop (optional), Short break"
      },
      arrival: {
        time: "15:00–16:00",
        details: "Drop-off at hotel/residence"
      }
    },
    accommodation: {
      budget: ["Enchoro Wildlife Camp", "Miti Mingi Eco Camp"],
      midRange: ["Zebra Plains Mara Camp", "Jambo Mara Safari Lodge"],
      luxury: ["Mara Serena Safari Lodge", "Governors' Camp"]
    },
    includes: [
      "Transport (4x4 or van + guide)",
      "Park fees",
      "Accommodation (2 nights, full board)",
      "Game drives",
      "Professional guide"
    ]
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={safariDetails.image}
            alt="Maasai Mara Safari"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8">
            <h1 className="text-5xl font-bold mb-4">{safariDetails.title}</h1>
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
                  <p className="text-gray-600"><strong>Destination:</strong> Maasai Mara National Reserve</p>
                  <p className="text-gray-600"><strong>Start/End:</strong> Nairobi</p>
                  <p className="text-gray-600"><strong>Best Time:</strong> July-October for Great Migration</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-br from-orange to-green p-8 rounded-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready for Adventure?</h3>
                <p className="text-lg mb-6">Book your Maasai Mara safari today!</p>
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
                    <div className="flex items-center mb-2">
                      <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        🕖 {safariDetails.day1.pickup.time}
                      </span>
                      <h4 className="font-semibold text-green">Pick-up & Departure</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day1.pickup.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-orange pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        🕘 {safariDetails.day1.riftValley.time}
                      </span>
                      <h4 className="font-semibold text-green">Great Rift Valley Stop</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day1.riftValley.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-orange pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        🕚 {safariDetails.day1.narokStop.time}
                      </span>
                      <h4 className="font-semibold text-green">Narok Town Stop</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day1.narokStop.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-green pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-green text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        🕐 {safariDetails.day1.arrival.time}
                      </span>
                      <h4 className="font-semibold text-green">Arrival at Maasai Mara</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day1.arrival.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-green pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-green text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        🕓 {safariDetails.day1.eveningGameDrive.time}
                      </span>
                      <h4 className="font-semibold text-green">Evening Game Drive ({safariDetails.day1.eveningGameDrive.duration})</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day1.eveningGameDrive.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-green pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-green text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        🕖 {safariDetails.day1.overnight.time}
                      </span>
                      <h4 className="font-semibold text-green">Dinner & Overnight</h4>
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
                        🕕 {safariDetails.day2.earlyMorning.time}
                      </span>
                      <h4 className="font-semibold text-green">Early Morning Game Drive</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day2.earlyMorning.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-orange pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        🕘 {safariDetails.day2.breakfast.time}
                      </span>
                      <h4 className="font-semibold text-green">Breakfast</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day2.breakfast.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-green pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-green text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        🕙 {safariDetails.day2.fullDayGameDrive.time}
                      </span>
                      <h4 className="font-semibold text-green">Full-Day Game Drive</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day2.fullDayGameDrive.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-green pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-green text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        🕐 {safariDetails.day2.picnicLunch.time}
                      </span>
                      <h4 className="font-semibold text-green">Picnic Lunch</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day2.picnicLunch.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-green pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-green text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        🕒 {safariDetails.day2.continueGameDrive.time}
                      </span>
                      <h4 className="font-semibold text-green">Continue Game Drive</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day2.continueGameDrive.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-orange pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        🕕 {safariDetails.day2.return.time}
                      </span>
                      <h4 className="font-semibold text-green">Return to Lodge</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day2.return.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-orange pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        🕖 {safariDetails.day2.evening.time}
                      </span>
                      <h4 className="font-semibold text-green">Evening Options</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day2.evening.details}</p>
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
                        🕖 {safariDetails.day3.breakfast.time}
                      </span>
                      <h4 className="font-semibold text-green">Breakfast</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day3.breakfast.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-orange pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        🕗 {safariDetails.day3.checkout.time}
                      </span>
                      <h4 className="font-semibold text-green">Check-out & Departure</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day3.checkout.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-green pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-green text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        🕚 {safariDetails.day3.narokStop.time}
                      </span>
                      <h4 className="font-semibold text-green">Narok Stop</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day3.narokStop.details}</p>
                  </div>
                  
                  <div className="border-l-4 border-green pl-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-green text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        🕓 {safariDetails.day3.arrival.time}
                      </span>
                      <h4 className="font-semibold text-green">Arrival in Nairobi</h4>
                    </div>
                    <p className="text-gray-600">{safariDetails.day3.arrival.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-green mb-12">🏨 Accommodation Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green mb-4">Budget</h3>
              <ul className="space-y-2">
                {safariDetails.accommodation.budget.map((camp, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-orange mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {camp}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green mb-4">Mid-range</h3>
              <ul className="space-y-2">
                {safariDetails.accommodation.midRange.map((camp, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-orange mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {camp}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green mb-4">Luxury</h3>
              <ul className="space-y-2">
                {safariDetails.accommodation.luxury.map((camp, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-orange mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {camp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Includes Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-green mb-12">What's Included</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {safariDetails.includes.map((item, index) => (
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
            Ready for Your Maasai Mara Adventure?
          </h2>
          <p className="text-xl text-white opacity-95 mb-8">
            Experience the world-famous Great Migration and Big Five in Kenya's premier game reserve.
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

export default MasaiMaraSafari
