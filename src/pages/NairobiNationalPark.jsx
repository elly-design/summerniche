import React from 'react'
import { Link } from 'react-router-dom'

const NairobiNationalPark = () => {
  const parkDetails = {
    title: "Nairobi National Park – Full-Day",
    duration: "Full Day",
    price: "From $150",
    description: "Experience Kenya's oldest national park, where wildlife meets the city skyline. This unique game reserve offers incredible wildlife viewing with the backdrop of Nairobi's skyscrapers, featuring black rhinos, lions, giraffes, and over 400 bird species.",
    image: "/images/elgon.jpg",
    highlights: ["Black rhino sanctuary", "City skyline views", "Early morning game drives", "Diverse birdlife"],
    program: {
      arrival: {
        time: "6:00 AM",
        title: "Arrival & Entry",
        details: "Enter through the Main Gate (Lang'ata Road) as soon as it opens, Early entry is crucial: animals are most active at dawn"
      },
      morningDrive: {
        time: "6:15 AM – 9:30 AM",
        title: "Morning Game Drive (Peak Wildlife Time)",
        zones: [
          {
            name: "Open Grass Plains (East & Central)",
            wildlife: ["Lions", "Rhinos (especially black rhinos)", "Buffalos"],
            note: "Look toward the skyline—iconic Nairobi + wildlife contrast"
          },
          {
            name: "Athi Basin Area",
            wildlife: ["Giraffes", "Zebras", "Antelopes (gazelles, hartebeest)"]
          },
          {
            name: "Hyena & Predator Tracking",
            wildlife: ["Hyenas returning from hunts", "Lions still active before heat sets"],
            note: "Early morning is prime time for predators"
          }
        ]
      },
      picnicBreak: {
        time: "10:30 AM – 11:30 AM",
        title: "Picnic / Coffee Break",
        location: "Impala Picnic Site",
        details: "Shaded area with tables, Restrooms available, Good mid-morning break spot"
      },
      wetlandsDrive: {
        time: "11:30 AM – 1:00 PM",
        title: "Wetlands & Riverine Drive",
        areas: [
          {
            name: "Mbagathi River Area",
            wildlife: ["Crocodiles", "Hippos (less common but possible)", "Birdlife (excellent for bird watchers)"]
          },
          {
            name: "Birdwatching Highlights",
            wildlife: ["Secretary birds", "Ostriches", "Eagles and vultures"]
          }
        ]
      },
      lunch: {
        time: "1:00 PM – 2:00 PM",
        title: "Lunch Break",
        options: [
          {
            name: "Option A – Picnic Inside Park",
            details: "Return to picnic site for relaxed lunch"
          },
          {
            name: "Option B – Exit for Lunch Nearby",
            details: "Example: Carnivore Restaurant (famous for nyama choma), Re-enter afterward if your ticket allows"
          }
        ]
      },
      afternoonDrive: {
        time: "2:00 PM – 4:30 PM",
        title: "Afternoon Game Drive",
        details: "Animals rest more, but still good for: Rhinos (Nairobi NP is one of the best places to see them), Giraffes browsing, Relaxed lion sightings under shade",
        areas: ["Western loop trails", "Forest edges (good for elusive species like leopards, though rare)"]
      },
      goldenHour: {
        time: "4:30 PM – 6:00 PM",
        title: "Golden Hour Safari",
        details: "Best light for photography, Animals become active again",
        sightings: ["Lions waking up", "Giraffes silhouetted at sunset", "Herd movements"]
      },
      exit: {
        time: "6:00 PM",
        title: "Exit Park",
        details: "Park closes around sunset, Exit before dark unless on a guided night experience (rare here)"
      }
    },
    inclusions: [
      "Park entrance fees",
      "Professional guide/driver",
      "4x4 safari vehicle",
      "Bottled drinking water",
      "Picnic lunch (if selected)"
    ]
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={parkDetails.image}
            alt="Nairobi National Park"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8">
            <h1 className="text-5xl font-bold mb-4">{parkDetails.title}</h1>
            <div className="flex items-center justify-center space-x-6 text-xl">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                🕒 {parkDetails.duration}
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                💰 {parkDetails.price}
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
              <h2 className="text-3xl font-bold text-green mb-6">Park Overview</h2>
              <p className="text-gray-600 text-lg mb-6">{parkDetails.description}</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-green mb-4">Highlights</h3>
                <ul className="space-y-2">
                  {parkDetails.highlights.map((highlight, index) => (
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
                  <p className="text-gray-600"><strong>Best Time:</strong> Early morning (6:00 AM entry)</p>
                  <p className="text-gray-600"><strong>Unique Feature:</strong> Wildlife with city skyline views</p>
                  <p className="text-gray-600"><strong>Specialty:</strong> Black rhino sanctuary</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-br from-orange to-green p-8 rounded-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Wildlife Adventure?</h3>
                <p className="text-lg mb-6">Experience Nairobi's unique game reserve!</p>
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

      {/* Detailed Program */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-green mb-12">Full-Day Safari Program</h2>
          
          <div className="space-y-8">
            {/* Arrival */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <div className="flex items-center">
                  <span className="bg-white text-green px-4 py-2 rounded-full font-bold mr-4">
                    {parkDetails.program.arrival.time}
                  </span>
                  <h3 className="text-2xl font-bold">{parkDetails.program.arrival.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{parkDetails.program.arrival.details}</p>
              </div>
            </div>

            {/* Morning Game Drive */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <div className="flex items-center">
                  <span className="bg-white text-green px-4 py-2 rounded-full font-bold mr-4">
                    {parkDetails.program.morningDrive.time}
                  </span>
                  <h3 className="text-2xl font-bold">{parkDetails.program.morningDrive.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {parkDetails.program.morningDrive.zones.map((zone, index) => (
                    <div key={index} className="border-l-4 border-orange pl-4">
                      <h4 className="font-semibold text-green mb-2">{zone.name}</h4>
                      <p className="text-gray-600 text-sm mb-2"><strong>Best for:</strong></p>
                      <ul className="ml-4 space-y-1">
                        {zone.wildlife.map((animal, idx) => (
                          <li key={idx} className="text-gray-600 text-sm">• {animal}</li>
                        ))}
                      </ul>
                      {zone.note && <p className="text-gray-600 text-sm mt-2 italic">{zone.note}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Picnic Break */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <div className="flex items-center">
                  <span className="bg-white text-green px-4 py-2 rounded-full font-bold mr-4">
                    {parkDetails.program.picnicBreak.time}
                  </span>
                  <h3 className="text-2xl font-bold">{parkDetails.program.picnicBreak.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-2"><strong>Location:</strong> {parkDetails.program.picnicBreak.location}</p>
                <p className="text-gray-600">{parkDetails.program.picnicBreak.details}</p>
              </div>
            </div>

            {/* Wetlands Drive */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <div className="flex items-center">
                  <span className="bg-white text-green px-4 py-2 rounded-full font-bold mr-4">
                    {parkDetails.program.wetlandsDrive.time}
                  </span>
                  <h3 className="text-2xl font-bold">{parkDetails.program.wetlandsDrive.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {parkDetails.program.wetlandsDrive.areas.map((area, index) => (
                    <div key={index} className="border-l-4 border-green pl-4">
                      <h4 className="font-semibold text-green mb-2">{area.name}</h4>
                      <ul className="ml-4 space-y-1">
                        {area.wildlife.map((animal, idx) => (
                          <li key={idx} className="text-gray-600 text-sm">• {animal}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Lunch */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <div className="flex items-center">
                  <span className="bg-white text-green px-4 py-2 rounded-full font-bold mr-4">
                    {parkDetails.program.lunch.time}
                  </span>
                  <h3 className="text-2xl font-bold">{parkDetails.program.lunch.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {parkDetails.program.lunch.options.map((option, index) => (
                    <div key={index} className="border-l-4 border-orange pl-4">
                      <h4 className="font-semibold text-green mb-2">{option.name}</h4>
                      <p className="text-gray-600 text-sm">{option.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Afternoon Drive */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <div className="flex items-center">
                  <span className="bg-white text-green px-4 py-2 rounded-full font-bold mr-4">
                    {parkDetails.program.afternoonDrive.time}
                  </span>
                  <h3 className="text-2xl font-bold">{parkDetails.program.afternoonDrive.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{parkDetails.program.afternoonDrive.details}</p>
                <div className="space-y-2">
                  {parkDetails.program.afternoonDrive.areas.map((area, index) => (
                    <p key={index} className="text-gray-600 text-sm">• {area}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Golden Hour */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <div className="flex items-center">
                  <span className="bg-white text-green px-4 py-2 rounded-full font-bold mr-4">
                    {parkDetails.program.goldenHour.time}
                  </span>
                  <h3 className="text-2xl font-bold">{parkDetails.program.goldenHour.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{parkDetails.program.goldenHour.details}</p>
                <p className="text-gray-600 font-semibold mb-2">Top sightings:</p>
                <ul className="ml-4 space-y-1">
                  {parkDetails.program.goldenHour.sightings.map((sighting, index) => (
                    <li key={index} className="text-gray-600 text-sm">• {sighting}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Exit */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green to-orange text-white p-6">
                <div className="flex items-center">
                  <span className="bg-white text-green px-4 py-2 rounded-full font-bold mr-4">
                    {parkDetails.program.exit.time}
                  </span>
                  <h3 className="text-2xl font-bold">{parkDetails.program.exit.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{parkDetails.program.exit.details}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Inclusions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-green mb-12">Package Inclusions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {parkDetails.inclusions.map((item, index) => (
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
            Ready for Nairobi National Park Adventure?
          </h2>
          <p className="text-xl text-white opacity-95 mb-8">
            Experience Kenya's unique wildlife sanctuary with stunning city skyline views.
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

export default NairobiNationalPark
