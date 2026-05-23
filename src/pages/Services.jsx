import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

const Services = () => {
  const [activeTab, setActiveTab] = useState('tours')
  const location = useLocation()

  const tours = [
    {
      title: "Tsavo East & Tsavo West Private Safari",
      duration: "3 Days / 2 Nights",
      price: "From $650",
      description: "Experience the ultimate private safari adventure covering both Tsavo East and Tsavo West National Parks, featuring diverse wildlife, stunning landscapes, and comfortable accommodations.",
      image: "/images/cheetah.jpg",
      highlights: ["Private safari experience", "Two national parks", "Professional guide", "Full board accommodation"],
      detailedItinerary: true
    },
    {
      title: "Maasai Mara Safari",
      duration: "3 Days / 2 Nights",
      price: "From $500",
      description: "Witness the incredible wildlife of Masai Mara, including the Big Five and the Great Migration (seasonal).",
      image: "/images/antelopes.jpg",
      highlights: ["Big Five viewing", "Game drives", "Bush breakfast"],
      detailedItinerary: true
    },
    {
      title: "Lake Naivasha, Hell's Gate & Geothermal Spa",
      duration: "3 Days / 2 Nights",
      price: "From $500",
      description: "Experience a perfect blend of relaxation, adventure and nature exploration in Kenya's Rift Valley with lake boat safaris, cycling, hiking, and geothermal spa visits.",
      image: "/images/buffaloes.jpg",
      highlights: ["Lake boat safari", "Cycling in Hell's Gate", "Geothermal spa experience", "Rift Valley scenery"],
      detailedItinerary: true
    },
    {
      title: "2 Days / 1 Night Private Safari to Tsavo West National Park from Mombasa/Diani/Kilifi",
      duration: "2 Days / 1 Night",
      price: "From $450",
      description: "Experience a short but exciting private safari to Tsavo West National Park, Kenya's scenic wilderness known for volcanic landscapes, lava flows, rolling hills, and abundant wildlife. This safari starts and ends in Mombasa.",
      image: "/images/thomos.jpg",
      highlights: ["Volcanic landscapes", "Mzima Springs", "Shetani Lava Flows", "Abundant wildlife"],
      detailedItinerary: true
    },
    {
      title: "3 Days / 2 Nights Private Safari to Tsavo East National Park & Salt Lick Safari Lodge",
      duration: "3 Days / 2 Nights",
      price: "From $550",
      description: "This private safari combines the vast wilderness of Tsavo East with the scenic Taita Hills Wildlife Sanctuary and the famous Salt Lick Safari Lodge. The safari offers excellent wildlife viewing including elephants, lions, giraffes, zebras, buffaloes, antelopes, and numerous bird species.",
      image: "/images/kifaru.jpeg",
      highlights: ["Red elephants of Tsavo", "Salt Lick Safari Lodge", "Taita Hills Wildlife Sanctuary", "Extensive game drives"],
      detailedItinerary: true
    },
    {
      title: "4 Days / 3 Nights Private Safari to Samburu National Reserve & Lake Nakuru National Park",
      duration: "4 Days / 3 Nights",
      price: "From $1200",
      description: "This 4-day private safari combines the rugged wilderness of Samburu with the scenic beauty and rhino sanctuary of Lake Nakuru. The safari offers excellent chances to spot the Samburu Special Five — Grevy's zebra, reticulated giraffe, Somali ostrich, gerenuk, and Beisa oryx — together with elephants, lions, leopards, rhinos, flamingos, buffaloes, and many other wildlife species.",
      image: "/images/oryx.jpg",
      highlights: ["Samburu Special Five", "White & black rhinos", "Flamingos at Lake Nakuru", "Mount Kenya views"],
      detailedItinerary: true
    },
    {
      title: "2 Days / 1 Night Private Safari to Tsavo East National Park from Mombasa/Diani/kilifi",
      duration: "2 Days / 1 Night",
      price: "From $450",
      description: "Experience a short but exciting private safari to Tsavo East National Park, one of Kenya's largest and oldest national parks famous for red elephants, lions, giraffes, zebras, buffaloes, and diverse birdlife. This safari starts and ends in Mombasa/Diani and is ideal for travelers looking for a quick wildlife getaway from the Kenyan coast.",
      image: "/images/bird.jpg",
      highlights: ["Red elephants of Tsavo", "Aruba Dam", "Private safari experience", "Professional guide"],
      detailedItinerary: true
    },
    {
      title: "2 Days / 1 Night Private Safari to Ol Pejeta Conservancy – Sweetwaters Serena Camp",
      duration: "2 Days / 1 Night",
      price: "From $580",
      description: "Enjoy an unforgettable 2 Days / 1 Night private safari to the world-famous Sweetwaters Serena Camp located inside Ol Pejeta Conservancy, renowned for the Big Five, the last remaining Northern White Rhinos, Chimpanzee Sanctuary, excellent rhino sightings, and scenic views of Mount Kenya.",
      image: "/images/chimpanze.jpg",
      highlights: ["Big Five wildlife", "Northern White Rhinos", "Chimpanzee Sanctuary", "Mount Kenya views"],
      detailedItinerary: true
    }
  ]

  const safaris = [
    {
      title: "Tsavo East & Tsavo West Private Safari",
      duration: "3 Days / 2 Nights",
      price: "From $650",
      description: "Experience the ultimate private safari adventure covering both Tsavo East and Tsavo West National Parks, featuring diverse wildlife, stunning landscapes, and comfortable accommodations.",
      image: "/images/cheetah.jpg",
      highlights: ["Private safari experience", "Two national parks", "Professional guide", "Full board accommodation"],
      detailedItinerary: {
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
    },
    {
      title: "Maasai Mara Safari",
      duration: "3 Days",
      price: "From $500",
      description: "Witness the incredible wildlife of Masai Mara, including the Big Five and the Great Migration (seasonal).",
      image: "/images/antelopes.jpg",
      highlights: ["Big Five viewing", "Game drives", "Bush breakfast"],
      detailedItinerary: true
    },
    {
      title: "Lake Naivasha, Hell's Gate & Geothermal Spa",
      duration: "3 Days / 2 Nights",
      price: "From $500",
      description: "Experience a perfect blend of relaxation, adventure, and nature exploration in Kenya's Rift Valley with lake boat safaris, cycling, hiking, and geothermal spa visits.",
      image: "/images/buffaloes.jpg",
      highlights: ["Lake boat safari", "Cycling in Hell's Gate", "Geothermal spa experience", "Rift Valley scenery"],
      detailedItinerary: true
    },
    {
      title: "2 Days / 1 Night Private Amboseli Safari from Mombasa/Diani/kilifi",
      duration: "2 Days / 1 Night",
      price: "From $510",
      description: "Experience a short but exciting private safari to Amboseli National Park, famous for large elephant herds and breathtaking views of Mount Kilimanjaro. This safari starts and ends in Mombasa and is ideal for travelers looking for a quick wildlife getaway from the Kenyan coast.",
      image: "/images/elephants.jpg",
      highlights: ["Large elephant herds", "Mount Kilimanjaro views", "Private safari experience", "Professional guide"],
      detailedItinerary: true
    },
    {
      title: "5 Days 4 Nights Lake Nakuru, Lake Naivasha and Masai Mara",
      duration: "5 Days / 4 Nights",
      price: "From $1400",
      description: "This private safari combines Kenya's most scenic wildlife destinations with excellent opportunities to see the Big Five, flamingos, rhinos, hippos, giraffes, and breathtaking Rift Valley landscapes. The safari is conducted in a private 4x4 Land Cruiser with a professional English-speaking driver guide.",
      image: "/images/flamingo.jpg",
      highlights: ["Big Five game drives", "Rhino tracking", "Boat ride at Lake Naivasha", "Great Rift Valley viewpoints"],
      detailedItinerary: true
    },
    {
      title: "2 Days / 1 Night Taita Hills Wildlife Sanctuary private Safari from Mombasa/Diani/Kilifi",
      duration: "2 Days / 1 Night",
      price: "From $350",
      description: "Experience a short but exciting private safari to Taita Hills Wildlife Sanctuary, featuring diverse wildlife including elephants, lions, buffaloes, zebras, giraffes, and antelopes. This safari starts and ends in Mombasa and is ideal for travelers looking for a quick wildlife getaway from the Kenyan coast.",
      image: "/images/giraffe.jpg",
      highlights: ["Diverse wildlife", "World War I Museum", "Private safari experience", "Professional guide"],
      detailedItinerary: true
    },
    {
      title: "4 Days / 3 Nights Private Safari to Masai Mara National Reserve from Nairobi",
      duration: "4 Days / 3 Nights",
      price: "From $1300",
      description: "Experience an unforgettable 4-day private safari to Maasai Mara National Reserve, Kenya's premier wildlife destination famous for the Big Five, endless savannah plains, and the spectacular wildebeest migration. This safari starts and ends in Nairobi and is conducted in a private 4x4 Land Cruiser with a professional English-speaking guide.",
      image: "/images/lepard.jpg",
      highlights: ["Big Five wildlife", "Mara River crossings", "Endless savannah", "Professional guide"],
      detailedItinerary: true
    }
  ]

  const excursions = [
    {
      title: "Mombasa City Tour – Full Day Itinerary",
      duration: "1 Day Package",
      price: "From $150",
      description: "Experience a comprehensive exploration of the historical, cultural, and commercial highlights of Kenya's coastal capital. This full-day excursion blends heritage sites, local markets, cultural experiences, and scenic viewpoints.",
      image: "/images/fort jesus.jpg",
      highlights: ["Fort Jesus guided tour", "Old Town walking tour", "Haller Park wildlife", "Spice market experience"],
      detailedItinerary: true
    },
    {
      title: "1 Day Private Tour to Kisite-Mpunguti Marine National Park from Mombasa",
      duration: "1 Day",
      price: "From $200",
      description: "Experience an unforgettable marine adventure to Kisite-Mpunguti Marine National Park, featuring dolphin watching, snorkeling in crystal-clear waters, and a delicious Swahili seafood lunch on Wasini Island.",
      image: "/images/dolphine.jpg",
      highlights: ["Dolphin watching", "Snorkeling in coral gardens", "Swahili seafood lunch", "Marine park conservation"],
      detailedItinerary: true
    },
    {
      title: "Nairobi National Park – Full-Day",
      duration: "Full Day",
      price: " From $180",
      description: "Experience Kenya's oldest national park, where wildlife meets the city skyline. This unique game reserve offers incredible wildlife viewing with the backdrop of Nairobi's skyscrapers, featuring black rhinos, lions, giraffes, and over 400 bird species.",
      image: "/images/elgon.jpg",
      highlights: ["Black rhino sanctuary", "City skyline views", "Early morning game drives", "Diverse birdlife"],
      detailedItinerary: true
    }
  ]

  const transfers = [
    {
      title: "Airport Transfer",
      duration: "1-2 Hours",
      price: "From $50",
      description: "Professional airport pickup and drop-off service with comfortable vehicles.",
      image: "/images/moi.jpg",
      highlights: ["Meet & greet", "Luggage assistance", "Flight monitoring"]
    },
    {
      title: "Hotel Transfer Service",
      duration: "Variable",
      price: "From $40",
      description: "Reliable transfers between hotels, lodges and major attractions.",
      image: "/images/hotel.jpg",
      highlights: ["Door-to-door service", "Professional drivers", "Comfortable vehicles"]
    },
    {
      title: "SGR Standard Gauge Railway",
      duration: "Custom",
      price: "From $200",
      description: "Private transportation for groups, families or special occasions.",
      image: "/images/sgr.jpg",
      highlights: ["Private vehicle", "Custom itinerary", "Flexible timing"]
    }
  ]

  useEffect(() => {
    const hash = location.hash.substring(1)
    if (hash && ['tours', 'safaris', 'excursions', 'transfers'].includes(hash)) {
      setActiveTab(hash)
    }
  }, [location.hash])

  const tabs = [
    { id: 'tours', label: 'Tours', icon: '🏛️' },
    { id: 'safaris', label: 'Safaris', icon: '🦁' },
    { id: 'excursions', label: 'Excursions', icon: '🏝️' },
    { id: 'transfers', label: 'Transfers', icon: '🚗' }
  ]

  const getServiceData = () => {
    switch (activeTab) {
      case 'tours': return tours
      case 'safaris': return safaris
      case 'excursions': return excursions
      case 'transfers': return transfers
      default: return tours
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=600&fit=crop"
            alt="Services hero"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8">
            <h1 className="text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl opacity-95">
              Discover our range of carefully crafted travel experiences
            </p>
          </div>
        </div>
      </section>

      
      {/* Services Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-darkGray mb-4 capitalize">{activeTab}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {activeTab === 'tours' && "Explore Kenya's rich cultural heritage and historical sites with our expert guides"}
              {activeTab === 'safaris' && "Experience breathtaking wildlife encounters in Kenya's premier national parks"}
              {activeTab === 'excursions' && "Day trips and adventures that showcase Kenya's natural beauty and diversity"}
              {activeTab === 'transfers' && "Reliable and comfortable transportation for all your travel needs"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getServiceData().map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green mb-2">{service.title}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-orange font-semibold">{service.duration}</span>
                    <span className="text-green font-bold text-lg">{service.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  {service.highlights && (
                    <ul className="mb-4 space-y-1">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-500 flex items-center">
                          <svg className="w-4 h-4 text-orange mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Read More link for detailed itineraries */}
                  {service.detailedItinerary && (
                    <div className="mb-4">
                      <Link 
                        to={
                          service.title.includes("Ol Pejeta") ? "/ol-pejeta-safari" :
                          service.title.includes("Taita Hills") ? "/taita-hills-safari" :
                          service.title.includes("Samburu") ? "/samburu-lake-nakuru-safari" :
                          service.title.includes("Salt Lick") ? "/tsavo-east-salt-lick-safari" :
                          service.title.includes("Tsavo East") ? "/tsavo-east-safari" :
                          service.title.includes("Tsavo West") ? "/tsavo-west-safari" :
                          service.title.includes("Tsavo") ? "/tsavo-safari" : 
                          service.title.includes("Lake Nakuru") ? "/lake-nakuru-naivasha-mara-safari" :
                          service.title.includes("4 Days") ? "/masai-mara-4day-safari" :
                          service.title.includes("Maasai Mara") ? "/masai-mara-safari" : 
                          service.title.includes("Lake Naivasha") ? "/lake-naivasha-safari" :
                          service.title.includes("Kisite") ? "/wasini-marine-park" :
                          service.title.includes("Amboseli") ? "/amboseli-safari" :
                          service.title.includes("Mombasa") ? "/mombasa-city-tour" :
                          service.title.includes("Nairobi") ? "/nairobi-national-park" :
                          "/lake-naivasha-safari"
                        }
                        className="text-orange font-semibold hover:text-orange-600 transition-colors flex items-center"
                      >
                        Read More
                        <svg 
                          className="w-4 h-4 ml-1" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  )}
                  
                  <Link 
                    to="/booking"
                    className="w-full bg-orange hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors text-center block"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange to-green">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-white opacity-95 mb-8">
            We offer customized packages tailored to your specific needs and preferences
          </p>
          <a 
            href="/contact"
            className="bg-white text-orange font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
          >
            Contact Us for Custom Packages
          </a>
        </div>
      </section>
    </div>
  )
}

export default Services
