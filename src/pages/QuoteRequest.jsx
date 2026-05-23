import React from 'react'
import QuoteRequestForm from '../components/QuoteRequestForm'

const QuoteRequest = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=400&fit=crop"
            alt="Quote request hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green/80 to-orange/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Request a Custom Quote</h1>
          <p className="text-xl opacity-95">
            Let us create your perfect African adventure
          </p>
        </div>
      </section>

      {/* Quote Request Form */}
      <QuoteRequestForm />
    </div>
  )
}

export default QuoteRequest
