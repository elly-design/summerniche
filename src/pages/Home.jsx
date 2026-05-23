import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AIChatbox from '../components/AIChatbox'

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)

  const heroSlides = [
    {
      image: "/images/lion.avif",
      title: "Adventure. Explore. Discover.",
      description: "From thrilling safaris to cultural immersions, experience the best of African tourism with expert guides and premium accommodations.",
    },
    {
      image: "/images/maasai.avif",
      title: "Culture. Heritage. Connection.",
      description: "Visit traditional villages, learn ancient customs and connect with local communities. Experience the rich tapestry of African heritage firsthand.",
    },
    {
      image: "/images/marine.jpg",
      title: "Mountains. Hiking. Adventure.",
      description: "Challenge yourself with guided mountain hikes, from Mount Kenya to scenic highland trails. Experience stunning views and personal achievement.",
    },
    {
      image: "/images/beach.jpg",
      title: "Beaches. Ocean. Paradise.",
      description: "Discover Kenya's beautiful coastline, from Diani's white sands to coral reef snorkeling. Perfect for relaxation and water adventures.",
    },
    {
      image: "/images/msa.jpg",
      title: "Cities. Urban. Energy.",
      description: "Explore bustling markets, modern architecture and dynamic urban centers. From Nairobi to coastal cities, discover Africa's contemporary side.",
    },
    {
      image: "/images/wildbeast.avif",
      title: "Safari. Wildlife. Wonder.",
      description: "Experience world-class safari adventures with expert guides. From game drives to wildlife photography, create unforgettable safari memories.",
    },
    {
      image: "/images/leopard.avif",
      title: "Luxury. Comfort. Excellence.",
      description: "Enjoy luxury lodges, gourmet dining and personalized service. Experience the finest African hospitality and adventure in comfort.",
    }
  ]

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  useEffect(() => {
    const interval = setInterval(nextHeroSlide, 5000) // Auto-rotate every 5 seconds
    return () => clearInterval(interval)
  }, [])
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Amazing safari experience! The guides were knowledgeable and the wildlife sightings were incredible. We saw the Big Five in just 3 days! The accommodations were excellent and the food was delicious. Highly recommend!",
      country: "USA",
      tour: "Masai Mara Safari"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Best cultural tour I've ever experienced. The team went above and beyond to make our trip memorable. The Maasai village visit was authentic and respectful. Learned so much about Kenyan culture!",
      country: "Canada",
      tour: "Cultural Heritage Tour"
    },
    {
      name: "Emma Williams",
      rating: 5,
      text: "Professional service from start to finish. The transfers were punctual and the excursions were well-organized. Our guide James was exceptional - so knowledgeable and patient with our kids!",
      country: "UK",
      tour: "Family Adventure Package"
    },
    {
      name: "Carlos Rodriguez",
      rating: 5,
      text: "Luxury safari exceeded all expectations! The lodges were stunning, service impeccable, and wildlife encounters were breathtaking. Worth every penny for our honeymoon trip.",
      country: "Spain",
      tour: "Luxury Safari Package"
    },
    {
      name: "Yuki Tanaka",
      rating: 5,
      text: "Incredible marine adventure at Diani Beach! Snorkeling with dolphins was a dream come true. The team ensured our safety while making it fun and educational.",
      country: "Japan",
      tour: "Marine Adventure"
    },
    {
      name: "Amanda Foster",
      rating: 5,
      text: "Airport transfers were seamless, and our city tour of Nairobi was fantastic. Our guide knew all the best spots and hidden gems. Perfect start to our Kenya adventure!",
      country: "Australia",
      tour: "Nairobi City Tour"
    }
  ]

  const services = [
    {
      title: "Tours",
      description: "Explore cultural heritage, historical sites and vibrant city life with our expert guides.",
      image: "/images/lepard.jpg",
      link: "/services#tours"
    },
    {
      title: "Safaris",
      description: "Experience breathtaking wildlife encounters in Kenya's premier national parks and reserves.",
      image: "/images/elephants.jpg",
      link: "/services#safaris"
    },
    {
      title: "Excursions",
      description: "Day trips and marine adventures that showcase the natural beauty and diversity of our region.",
      image: "/images/marine.jpg",
      link: "/services#excursions"
    },
    {
      title: "Transfers",
      description: "Reliable and comfortable transportation services for all your travel needs.",
      image: "/images/tour-van.jpg",
      link: "/services#transfers"
    }
  ]

  const features = [
    {
      icon: "👨‍🏫",
      title: "Certified Guides",
      description: "Professional, knowledgeable, and friendly guides with years of experience"
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Competitive rates without compromising on quality and experience"
    },
    {
      icon: "🕐",
      title: "24/7 Support",
      description: "Round-the-clock assistance to ensure your journey is smooth and stress-free"
    },
    {
      icon: "🛡️",
      title: "Safety Guarantee",
      description: "Your safety is our priority with comprehensive insurance and protocols"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ 
          backgroundImage: `url(${heroSlides[currentHeroSlide].image})`,
          imageRendering: 'crisp-edges',
          WebkitImageRendering: 'crisp-edges',
          filter: 'contrast(1.2) brightness(1.1) saturate(1.1) sharpen(1)',
          WebkitFilter: 'contrast(1.2) brightness(1.1) saturate(1.1)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange/30 to-green/30"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-8 animate-fade-in drop-shadow-2xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>
            {heroSlides[currentHeroSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-4 leading-relaxed font-semibold drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}>
            {heroSlides[currentHeroSlide].subtitle}
          </p>
          <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            {heroSlides[currentHeroSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/booking" 
              className="bg-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Book Your Adventure
            </Link>
            <Link 
              to="/services" 
              className="bg-green hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Explore All Packages
            </Link>
          </div>
          
                  </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green mb-4">About Summer Niche Adventures</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Professional Tour Operator with decades of excellence in African travel and tourism
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-orange mb-4">Our Heritage</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Summer Niche Adventures is a professional Tour Operator with its head office at along Likoni, Rafiki Bank House, Ferry Area, Opposite Chief's Office, Near Total Petrol Station, Mombasa in Mombasa and is a member of two leading tourist associations namely Kenya Association of Tour Operators (KATO) and Mombasa & Coast Tourist Association (MCTA).
              </p>
              <p className="text-gray-700 leading-relaxed">
                With over three decades of service delivery in the Travel and Tourism Industry, we are fully living up to our Motto: "Luxury meets the wild" perhaps best exemplified by our  VIP Tours, Day Excursions, Conference/private transfers, Hotel/Lodge Reservations and Car hire.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-orange mb-4">Global Recognition</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Summer Niche Adventures has been highly recommended by world-renowned travel guides, showcasing our commitment to excellence and exceptional service delivery.
              </p>
              <div className="bg-gradient-to-r from-orange/10 to-green/10 rounded-lg p-6">
                <h4 className="text-xl font-bold text-green mb-3">Our Premium Services Include:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-green mr-2">•</span>
                    VIP Tours
                  </li>
                  <li className="flex items-center">
                    <span className="text-green mr-2">•</span>
                    Day Excursions
                  </li>
                  <li className="flex items-center">
                    <span className="text-green mr-2">•</span>
                    Car Hire
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green mb-4">Experience African Wildlife</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the magnificent wildlife of Africa through our expertly guided safari adventures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/images/elephants.jpg"
                  alt="African elephants in natural habitat"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  style={{
                    imageRendering: 'crisp-edges',
                    WebkitImageRendering: 'crisp-edges',
                    filter: 'contrast(1.3) brightness(1.2) saturate(1.2) sharpen(1.5)',
                    WebkitFilter: 'contrast(1.3) brightness(1.2) saturate(1.2)'
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green mb-2">Majestic Elephants</h3>
                <p className="text-gray-600">Witness the gentle giants of Africa in their natural habitat</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/images/lepard.jpg"
                  alt="Leopards in African wilderness"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  style={{
                    imageRendering: 'crisp-edges',
                    WebkitImageRendering: 'crisp-edges',
                    filter: 'contrast(1.3) brightness(1.2) saturate(1.2) sharpen(1.5)',
                    WebkitFilter: 'contrast(1.3) brightness(1.2) saturate(1.2)'
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green mb-2">Graceful Leopards</h3>
                <p className="text-gray-600">Spot the elusive leopards on guided safari drives</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/images/zebra.jpg"
                  alt="Zebras in African savanna"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  style={{
                    imageRendering: 'crisp-edges',
                    WebkitImageRendering: 'crisp-edges',
                    filter: 'contrast(1.3) brightness(1.2) saturate(1.2) sharpen(1.5)',
                    WebkitFilter: 'contrast(1.3) brightness(1.2) saturate(1.2)'
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green mb-2">Striking Zebras</h3>
                <p className="text-gray-600">Experience the beauty of zebras in their natural environment</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/images/giraffe.jpg"
                  alt="Giraffes in African landscape"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  style={{
                    imageRendering: 'crisp-edges',
                    WebkitImageRendering: 'crisp-edges',
                    filter: 'contrast(1.3) brightness(1.2) saturate(1.2) sharpen(1.5)',
                    WebkitFilter: 'contrast(1.3) brightness(1.2) saturate(1.2)'
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green mb-2">Tall Giraffes</h3>
                <p className="text-gray-600">Marvel at the world's tallest mammals in their habitat</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/images/rhino.jpg"
                  alt="Rhinos in African wilderness"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  style={{
                    imageRendering: 'crisp-edges',
                    WebkitImageRendering: 'crisp-edges',
                    filter: 'contrast(1.3) brightness(1.2) saturate(1.2) sharpen(1.5)',
                    WebkitFilter: 'contrast(1.3) brightness(1.2) saturate(1.2)'
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green mb-2">Mighty Rhinos</h3>
                <p className="text-gray-600">Encounter the endangered rhinos on our conservation-focused tours</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/images/tour-van.jpg"
                  alt="Safari tour vehicle"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  style={{
                    imageRendering: 'crisp-edges',
                    WebkitImageRendering: 'crisp-edges',
                    filter: 'contrast(1.3) brightness(1.2) saturate(1.2) sharpen(1.5)',
                    WebkitFilter: 'contrast(1.3) brightness(1.2) saturate(1.2)'
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green mb-2">Safari Adventures</h3>
                <p className="text-gray-600">Travel in comfort with our expert guides and modern vehicles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-darkGray mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of carefully crafted travel experiences designed to create lasting memories. 
              Each service is tailored to provide you with the ultimate African adventure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    style={{
                      imageRendering: 'crisp-edges',
                      WebkitImageRendering: 'crisp-edges',
                      filter: 'contrast(1.3) brightness(1.2) saturate(1.2) sharpen(1.5)',
                      WebkitFilter: 'contrast(1.3) brightness(1.2) saturate(1.2)'
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-green">
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    {index === 0 && (
                      <ul className="text-sm text-gray-500 space-y-1">
                        <li>• Cultural Heritage Tours</li>
                        <li>• Historical Site Visits</li>
                        <li>• City Excursions</li>
                      </ul>
                    )}
                    {index === 1 && (
                      <ul className="text-sm text-gray-500 space-y-1">
                        <li>• Big Five Wildlife</li>
                        <li>• Luxury Safari Lodges</li>
                        <li>• Professional Guides</li>
                      </ul>
                    )}
                    {index === 2 && (
                      <ul className="text-sm text-gray-500 space-y-1">
                        <li>• Marine Adventures</li>
                        <li>• Mountain Hiking</li>
                        <li>• Island Tours</li>
                      </ul>
                    )}
                    {index === 3 && (
                      <ul className="text-sm text-gray-500 space-y-1">
                        <li>• Airport Transfers</li>
                        <li>• Hotel Pickups</li>
                        <li>• Private Transport</li>
                      </ul>
                    )}
                  </div>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-orange font-semibold hover:text-orange-600 transition-colors"
                  >
                    Explore {service.title}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-darkGray mb-4">Why Choose Summer Niche Adventures</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional travel experiences that exceed your expectations. 
              Discover what sets us apart from the rest.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold text-green mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-darkGray mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from travelers who chose Summer Niche Adventures. 
              Join thousands of satisfied customers who have experienced the magic of Africa with us.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-500 font-semibold">5.0/5.0</span>
              </div>
              
              <blockquote className="text-xl text-gray-700 text-center mb-8 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="text-center mb-6">
                <div className="font-semibold text-darkGray text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-500">
                  {testimonials[currentTestimonial].country} • {testimonials[currentTestimonial].tour}
                </div>
              </div>
              
              <div className="flex items-center justify-center mt-8 space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-green text-white hover:bg-green-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-orange' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-green text-white hover:bg-green-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
                          </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-darkGray mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized excellence in African tourism and adventure travel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-green/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-green mb-2">Eco-Friendly Tourism</h3>
              <p className="text-gray-600">Sustainable Travel Certified</p>
            </div>
            <div className="text-center">
              <div className="bg-orange/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-green mb-2">5-Star Reviews</h3>
              <p className="text-gray-600">TripAdvisor Excellence</p>
            </div>
            <div className="text-center">
              <div className="bg-green/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-green mb-2">Community Partner</h3>
              <p className="text-gray-600">Local Conservation Support</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange/5 to-green/5 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green mb-2">50+</div>
                <div className="text-gray-700 font-semibold">Award-Winning Guides</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange mb-2">25+</div>
                <div className="text-gray-700 font-semibold">National Parks</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green mb-2">100+</div>
                <div className="text-gray-700 font-semibold">Unique Experiences</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange mb-2">24/7</div>
                <div className="text-gray-700 font-semibold">Emergency Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="py-20 bg-gradient-to-r from-orange to-green">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl md:text-2xl text-white opacity-95 mb-8">
            Join thousands of satisfied travelers who have experienced the magic of Africa with us. 
            Your dream adventure starts here!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-orange font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
            <Link 
              to="/services"
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 hover:bg-white hover:text-orange"
            >
              Browse Packages
            </Link>
          </div>
        </div>
      </section>

      {/* AI Chatbox */}
      <AIChatbox />
    </div>
  )
}

export default Home
