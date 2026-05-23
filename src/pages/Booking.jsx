import React from 'react'
import ProfessionalBookingForm from '../components/ProfessionalBookingForm'

const Booking = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=400&fit=crop"
            alt="Booking hero"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8">
            <h1 className="text-4xl font-bold mb-4">Book Your Adventure</h1>
            <p className="text-xl opacity-95">
              Secure your spot for an unforgettable African experience
            </p>
          </div>
        </div>
      </section>

      {/* Professional Booking Form */}
      <ProfessionalBookingForm />
    </div>
  )
}

export default Booking
