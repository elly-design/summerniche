import React from 'react'

const About = () => {
  const team = [
    {
      name: "John Mwangi",
      role: "Founder & CEO",
      image: "/images/cheetah.jpeg",
      bio: "With over 15 years in tourism, John founded Summer Niche Adventures to share Kenya's beauty with the world."
    },
    {
      name: "Sarah Kamau",
      role: "Operations Manager",
      image: "/images/kifaru.jpeg",
      bio: "Sarah ensures every trip runs smoothly, from booking to return, with attention to every detail."
    },
    {
      name: "David Ochieng",
      role: "Lead Safari Guide",
      image: "/images/lionness.jpeg",
      bio: "David's wildlife expertise and storytelling bring every safari to life with unforgettable experiences."
    },
    {
      name: "Grace Njeri",
      role: "Customer Relations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Grace is dedicated to ensuring every client feels valued and supported throughout their journey."
    }
  ]

  const values = [
    {
      title: "Sustainability",
      description: "We're committed to responsible tourism that protects wildlife, supports local communities, and preserves natural habitats for future generations.",
      icon: "🌍"
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in all our business relationships and customer interactions.",
      icon: "🤝"
    },
    {
      title: "Excellence",
      description: "We strive for exceptional service quality, continuous improvement, and exceeding customer expectations in every aspect of our operations.",
      icon: "⭐"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=600&fit=crop"
            alt="About us hero"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8">
            <h1 className="text-5xl font-bold mb-4">About Summer Niche Adventures</h1>
            <p className="text-xl opacity-95">
              Your trusted partner for authentic African experiences
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2025, Summer Niche Adventures began as a small team of passionate guides who shared a common vision: to showcase the incredible beauty, culture, and wildlife of Kenya to travelers from around the world.
                </p>
                <p>
                  What started with just two safari vehicles and a handful of tours has grown into a comprehensive tourism company offering diverse experiences across East Africa. Our growth has been fueled by word-of-mouth recommendations and countless satisfied clients who have become part of our extended family.
                </p>
                <p>
                  Today, we're proud to be recognized as one of Kenya's leading adventure tourism companies, maintaining the same passion and personal touch that defined our early days while embracing innovation and sustainable practices.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/cheetah.jpeg"
                alt="Team on safari"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-darkGray mb-4">Our Purpose</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by clear vision and mission, we're committed to creating meaningful travel experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-green mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be Africa's most trusted adventure tourism company, recognized for creating transformative travel experiences that connect people with nature, culture, and each other while contributing positively to local communities and conservation efforts.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-orange mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver exceptional, safe, and sustainable adventure experiences that exceed customer expectations through expert guidance, personalized service, and a deep commitment to showcasing the best of African wildlife, culture, and natural beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-darkGray mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-green mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-darkGray mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Making Your Tour Visit Memorable - Simple steps to your perfect African adventure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
</svg>
              </div>
              <h3 className="text-xl font-bold text-green mb-4">Booking Online</h3>
              <p className="text-gray-600 leading-relaxed">
                Get in touch with our agent and enquire about a customized tour.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1.81.45 1.61 1.67 1.61 1.16 0 1.6-.64 1.6-1.46 0-.84-.68-1.22-1.88-1.57-1.85-.54-3.33-1.35-3.33-3.46 0-1.82 1.39-2.84 3.11-3.21V5h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.63-1.63-1.63-1.01 0-1.46.54-1.46 1.34 0 .88.74 1.25 1.93 1.59 1.83.52 3.28 1.33 3.28 3.41 0 1.83-1.27 2.95-3.01 3.35z"/>
</svg>
              </div>
              <h3 className="text-xl font-bold text-green mb-4">Discuss Budget</h3>
              <p className="text-gray-600 leading-relaxed">
                Get the best and affordable price based on your tour package.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
</svg>
              </div>
              <h3 className="text-xl font-bold text-green mb-4">Get Confirmation</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive an email notification or message about your tour.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
</svg>
              </div>
              <h3 className="text-xl font-bold text-green mb-4">Happy Services</h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy your tour package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green to-orange">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-lg opacity-90">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Tour Packages</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
