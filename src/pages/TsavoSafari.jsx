import React from 'react'
import { Link } from 'react-router-dom'

const TsavoSafari = () => {
  const safariDetails = {
    title: "Tsavo East & Tsavo West Private Safari",
    duration: "3 Days / 2 Nights",
    price: "From $650",
    description: "Experience the ultimate private safari adventure covering both Tsavo East and Tsavo West National Parks, featuring diverse wildlife, stunning landscapes, and comfortable accommodations.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
    highlights: ["Private safari experience", "Two national parks", "Professional guide", "Full board accommodation"],
    destinations: ["Tsavo East National Park", "Tsavo West National Park"],
    startEnd: "Diani / Mombasa / Kilifi",
    day1: {
      title: "Coast → Tsavo East",
      pickup: {
        times: ["Diani: ~6:00 AM", "Mombasa: ~6:30 AM", "Kilifi: ~6:30–6:00 AM"],
        window: "05:00 – 06:30"
      },
      drive: {
        times: "06:00 – 10:00",
        details: "Via Mombasa–Nairobi highway, Short stop near Voi, Enter via Bachuma Gate"
      },
      morningGameDrive: {
        times: "10:00 – 13:00",
        focus: ["Aruba Dam → elephants, buffalo, zebras", "Open plains → lions often resting under trees"]
      },
      lunch: "13:00 – 14:00",
      rest: "14:00 – 15:30",
      afternoonGameDrive: {
        times: "15:30 – 18:30",
        highlights: ["Great light for photography", "Elephant herds, giraffes, predators"]
      },
      overnight: "Dinner & Overnight (Tsavo East)"
    },
    day2: {
      title: "Tsavo East → Tsavo West",
      earlyGameDrive: {
        times: "06:00 – 08:00",
        highlights: ["Best chance for lions, hyenas", "Sunrise over savannah"]
      },
      breakfast: "08:00 – 09:00",
      transfer: {
        times: "09:00 – 13:00",
        details: "Drive via Voi → Mtito Andei, Enter Tsavo West National Park"
      },
      lunch: "13:00 – 14:00",
      accommodation: {
        options: ["Kilaguni Serena Safari Lodge (excellent views of waterhole & Kilimanjaro on clear days)", "Ngulia Safari Lodge (budget-friendly, scenic)"]
      },
      afternoonGameDrive: {
        times: "15:30 – 18:30",
        highlights: ["Mzima Springs", "Crystal-clear water", "Hippos & crocodiles (viewing chamber)"]
      },
      overnight: "Dinner & Overnight (Tsavo West)"
    },
    day3: {
      title: "Tsavo West → Coast",
      morningGameDrive: {
        times: "06:00 – 08:30",
        wildlife: ["Leopards (rare but possible)", "Elephants", "Antelopes", "And many more"]
      },
      breakfast: "08:30 – 09:30",
      return: {
        times: "09:30 – 15:00",
        arrival: {
          mombasa: "~3:00 PM",
          diani: "~4:00–5:00 PM",
          kilifi: "~4:30–5:30 PM"
        }
      }
    },
    includes: [
      "Transport (4x4 or van + guide)",
      "Park fees (both parks)",
      "Accommodation (2 nights, full board)",
      "Game drives"
    ]
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={safariDetails.image}
            alt="Tsavo Safari"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green/80 to-orange/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
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
                <p className="text-lg mb-6">Book your private Tsavo safari today!</p>
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
                <h3 className="text-2xl font-bold">Day 1: {safariDetails.day1.title}</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange pl-4">
                      <h4 className="font-semibold text-green mb-2">Pick-up</h4>
                      <p className="text-gray-600 mb-2">{safariDetails.day1.pickup.window}</p>
                      {safariDetails.day1.pickup.times.map((time, index) => (
                        <p key={index} className="text-gray-600 text-sm">• {time}</p>
                      ))}
                    </div>
                    
                    <div className="border-l-4 border-orange pl-4">
                      <h4 className="font-semibold text-green mb-2">Drive to Tsavo East</h4>
                      <p className="text-gray-600"><strong>{safariDetails.day1.drive.times}</strong></p>
                      <p className="text-gray-600 text-sm">{safariDetails.day1.drive.details}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-green pl-4">
                      <h4 className="font-semibold text-green mb-2">Morning Game Drive</h4>
                      <p className="text-gray-600"><strong>{safariDetails.day1.morningGameDrive.times}</strong></p>
                      {safariDetails.day1.morningGameDrive.focus.map((focus, index) => (
                        <p key={index} className="text-gray-600 text-sm">• {focus}</p>
                      ))}
                    </div>
                    
                    <div className="border-l-4 border-green pl-4">
                      <h4 className="font-semibold text-green mb-2">Afternoon Game Drive</h4>
                      <p className="text-gray-600"><strong>{safariDetails.day1.afternoonGameDrive.times}</strong></p>
                      {safariDetails.day1.afternoonGameDrive.highlights.map((highlight, index) => (
                        <p key={index} className="text-gray-600 text-sm">• {highlight}</p>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-600"><strong>Lunch:</strong> {safariDetails.day1.lunch}</p>
                  <p className="text-gray-600"><strong>Rest:</strong> {safariDetails.day1.rest}</p>
                  <p className="text-gray-600"><strong>Overnight:</strong> {safariDetails.day1.overnight}</p>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <h3 className="text-2xl font-bold">Day 2: {safariDetails.day2.title}</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange pl-4">
                      <h4 className="font-semibold text-green mb-2">Early Game Drive</h4>
                      <p className="text-gray-600"><strong>{safariDetails.day2.earlyGameDrive.times}</strong></p>
                      {safariDetails.day2.earlyGameDrive.highlights.map((highlight, index) => (
                        <p key={index} className="text-gray-600 text-sm">• {highlight}</p>
                      ))}
                    </div>
                    
                    <div className="border-l-4 border-orange pl-4">
                      <h4 className="font-semibold text-green mb-2">Transfer to Tsavo West</h4>
                      <p className="text-gray-600"><strong>{safariDetails.day2.transfer.times}</strong></p>
                      <p className="text-gray-600 text-sm">{safariDetails.day2.transfer.details}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-green pl-4">
                      <h4 className="font-semibold text-green mb-2">Accommodation Options</h4>
                      {safariDetails.day2.accommodation.options.map((option, index) => (
                        <p key={index} className="text-gray-600 text-sm">• {option}</p>
                      ))}
                    </div>
                    
                    <div className="border-l-4 border-green pl-4">
                      <h4 className="font-semibold text-green mb-2">Afternoon Game Drive</h4>
                      <p className="text-gray-600"><strong>{safariDetails.day2.afternoonGameDrive.times}</strong></p>
                      {safariDetails.day2.afternoonGameDrive.highlights.map((highlight, index) => (
                        <p key={index} className="text-gray-600 text-sm">• {highlight}</p>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-600"><strong>Breakfast:</strong> {safariDetails.day2.breakfast}</p>
                  <p className="text-gray-600"><strong>Lunch:</strong> {safariDetails.day2.lunch}</p>
                  <p className="text-gray-600"><strong>Overnight:</strong> {safariDetails.day2.overnight}</p>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <h3 className="text-2xl font-bold">Day 3: {safariDetails.day3.title}</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-orange pl-4">
                    <h4 className="font-semibold text-green mb-2">Morning Game Drive</h4>
                    <p className="text-gray-600"><strong>{safariDetails.day3.morningGameDrive.times}</strong></p>
                    {safariDetails.day3.morningGameDrive.wildlife.map((wildlife, index) => (
                      <p key={index} className="text-gray-600 text-sm">• {wildlife}</p>
                    ))}
                  </div>
                  
                  <div className="border-l-4 border-green pl-4">
                    <h4 className="font-semibold text-green mb-2">Return Journey</h4>
                    <p className="text-gray-600"><strong>{safariDetails.day3.return.times}</strong></p>
                    <div className="mt-2">
                      <p className="text-gray-600 text-sm"><strong>Arrival:</strong></p>
                      <p className="text-gray-600 text-sm">• Mombasa: {safariDetails.day3.return.arrival.mombasa}</p>
                      <p className="text-gray-600 text-sm">• Diani: {safariDetails.day3.return.arrival.diani}</p>
                      <p className="text-gray-600 text-sm">• Kilifi: {safariDetails.day3.return.arrival.kilifi}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-600"><strong>Breakfast:</strong> {safariDetails.day3.breakfast}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Includes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-green mb-12">What's Included</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            Ready for Your Tsavo Adventure?
          </h2>
          <p className="text-xl text-white opacity-95 mb-8">
            Book this incredible private safari experience today and create memories that will last a lifetime.
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

export default TsavoSafari
