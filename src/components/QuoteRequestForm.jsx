import React, { useState } from 'react'
import { sendQuoteRequestEmail } from '../services/emailService'

const QuoteRequestForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    
    // Trip Details
    tripType: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    flexibility: '',
    
    // Group Information
    adults: 1,
    children: 0,
    infants: 0,
    groupType: '',
    
    // Accommodation & Transport
    accommodationPreference: '',
    transportPreference: '',
    mealPreference: '',
    
    // Budget & Requirements
    budgetRange: '',
    specialRequirements: '',
    firstTimeKenya: false,
    travelInsurance: false,
    
    // Additional Services
    additionalServices: [],
    
    // Terms
    agreeToTerms: false
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [quoteSubmitted, setQuoteSubmitted] = useState(false)
  const [quoteReference, setQuoteReference] = useState('')

  const countries = [
    'Kenya', 'United States', 'United Kingdom', 'Canada', 'Australia',
    'Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Japan',
    'China', 'India', 'South Africa', 'Nigeria', 'Ghana', 'Uganda',
    'Tanzania', 'Rwanda', 'Burundi', 'Ethiopia', 'Somalia', 'Sudan',
    'Egypt', 'Morocco', 'Algeria', 'Tunisia', 'Libya', 'Brazil',
    'Argentina', 'Chile', 'Peru', 'Mexico', 'Colombia', 'Venezuela'
  ]

  const tripTypes = [
    { id: 'safari', name: 'Wildlife Safari', description: 'Experience African wildlife in their natural habitat' },
    { id: 'cultural', name: 'Cultural Tour', description: 'Immerse in local cultures and traditions' },
    { id: 'adventure', name: 'Adventure Tour', description: 'Thrilling outdoor activities and experiences' },
    { id: 'beach', name: 'Beach Holiday', description: 'Relax on pristine Kenyan beaches' },
    { id: 'business', name: 'Business Travel', description: 'Corporate travel and conference packages' },
    { id: 'educational', name: 'Educational Tour', description: 'Learning experiences and school trips' }
  ]

  const destinations = [
    { id: 'masai-mara', name: 'Masai Mara', region: 'Rift Valley' },
    { id: 'amboseli', name: 'Amboseli', region: 'Southern Kenya' },
    { id: 'samburu', name: 'Samburu', region: 'Northern Kenya' },
    { id: 'lake-nakuru', name: 'Lake Nakuru', region: 'Rift Valley' },
    { id: 'tsavo', name: 'Tsavo', region: 'Coastal' },
    { id: 'diani', name: 'Diani Beach', region: 'Coastal' },
    { id: 'lamu', name: 'Lamu', region: 'Coastal' },
    { id: 'nairobi', name: 'Nairobi', region: 'Central' },
    { id: 'mount-kenya', name: 'Mount Kenya', region: 'Central' },
    { id: 'custom', name: 'Custom Destination', region: 'Specify in requirements' }
  ]

  const additionalServicesOptions = [
    { id: 'guide', name: 'Professional Guide', description: 'Expert local guide throughout the trip' },
    { id: 'photography', name: 'Photography Package', description: 'Professional photography services' },
    { id: 'travel-insurance', name: 'Travel Insurance', description: 'Comprehensive travel coverage' },
    { id: 'airport-transfer', name: 'Airport Transfer', description: 'Pickup and drop-off services' },
    { id: 'meals', name: 'All Meals Included', description: 'Breakfast, lunch, and dinner' },
    { id: 'activities', name: 'Extra Activities', description: 'Additional adventure activities' }
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleServiceToggle = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(serviceId)
        ? prev.additionalServices.filter(id => id !== serviceId)
        : [...prev.additionalServices, serviceId]
    }))
  }

  const validateStep = (step) => {
    const newErrors = {}
    
    if (step === 1) {
      // Personal Information Validation
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
      if (!formData.email.trim()) newErrors.email = 'Email is required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
      if (!formData.country) newErrors.country = 'Country is required'
    }
    
    if (step === 2) {
      // Trip Details Validation
      if (!formData.tripType) newErrors.tripType = 'Trip type is required'
      if (!formData.destination) newErrors.destination = 'Destination is required'
      if (!formData.departureDate) newErrors.departureDate = 'Departure date is required'
      else {
        const selectedDate = new Date(formData.departureDate)
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        if (selectedDate < today) {
          newErrors.departureDate = 'Departure date cannot be in the past'
        }
      }
      if (!formData.returnDate) newErrors.returnDate = 'Return date is required'
      else if (formData.departureDate && formData.returnDate) {
        const departure = new Date(formData.departureDate)
        const returnDate = new Date(formData.returnDate)
        if (returnDate <= departure) {
          newErrors.returnDate = 'Return date must be after departure date'
        }
      }
    }
    
    if (step === 3) {
      // Group Information Validation
      if (formData.adults < 1) newErrors.adults = 'At least one adult is required'
      if (formData.adults < 0 || formData.children < 0 || formData.infants < 0) {
        newErrors.passengers = 'Passenger numbers cannot be negative'
      }
    }
    
    if (step === 4) {
      // Budget & Requirements Validation
      if (!formData.budgetRange) newErrors.budgetRange = 'Budget range is required'
      if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4))
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateStep(4)) return
    
    setIsSubmitting(true)
    
    try {
      const reference = 'QREQ' + Date.now().toString().slice(-8)
      
      // Send quote request emails
      const emailResult = await sendQuoteRequestEmail(formData, reference)
      
      if (emailResult.success) {
        setQuoteReference(reference)
        setQuoteSubmitted(true)
      } else {
        // Still show confirmation even if email fails
        setQuoteReference(reference)
        setQuoteSubmitted(true)
        console.error('Quote request email sending failed:', emailResult.error)
      }
    } catch (error) {
      console.error('Quote request submission error:', error)
      // Still show confirmation even if there's an error
      const reference = 'QREQ' + Date.now().toString().slice(-8)
      setQuoteReference(reference)
      setQuoteSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      country: '',
      tripType: '',
      destination: '',
      departureDate: '',
      returnDate: '',
      flexibility: '',
      adults: 1,
      children: 0,
      infants: 0,
      groupType: '',
      accommodationPreference: '',
      transportPreference: '',
      mealPreference: '',
      budgetRange: '',
      specialRequirements: '',
      firstTimeKenya: false,
      travelInsurance: false,
      additionalServices: [],
      agreeToTerms: false
    })
    setCurrentStep(1)
    setErrors({})
    setQuoteSubmitted(false)
    setQuoteReference('')
  }

  const progressSteps = [
    { number: 1, title: 'Personal Info', icon: '👤' },
    { number: 2, title: 'Trip Details', icon: '🗺️' },
    { number: 3, title: 'Group Info', icon: '👥' },
    { number: 4, title: 'Budget & Terms', icon: '💰' }
  ]

  if (quoteSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📋</span>
              </div>
              <h1 className="text-3xl font-bold text-green-600 mb-2">Quote Request Submitted!</h1>
              <p className="text-gray-600">Thank you for your interest in Summer Niche Adventures</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-green-800 mb-4">Quote Request Reference</h2>
              <p className="text-2xl font-bold text-green-600">{quoteReference}</p>
              <p className="text-sm text-gray-600 mt-2">Please save this reference for your records</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">What Happens Next?</h3>
              <ul className="text-left text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>You'll receive a confirmation email shortly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Our team will review your requirements within 24 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>You'll receive a detailed quote with pricing options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>A travel consultant will contact you to discuss your trip</span>
                </li>
              </ul>
            </div>
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={resetForm}
                className="bg-orange text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Request Another Quote
              </button>
              <a
                href="/"
                className="bg-green text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                Return to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Request a Custom Quote</h1>
          <p className="text-xl text-gray-600">Let us create your perfect African adventure</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center">
            {progressSteps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                  currentStep >= step.number 
                    ? 'bg-green text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  <span className="text-lg">{step.icon}</span>
                </div>
                <span className={`text-xs font-medium ${
                  currentStep >= step.number ? 'text-green-600' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John"
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Doe"
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john.doe@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+254 123 456 789"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company/Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                    placeholder="Optional"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange ${
                      errors.country ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select your country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  {errors.country && <p className="mt-1 text-sm text-red-500">{errors.country}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Trip Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Trip Details</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Trip Type *</label>
                <select
                  name="tripType"
                  value={formData.tripType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange ${
                    errors.tripType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select trip type</option>
                  {tripTypes.map(trip => (
                    <option key={trip.id} value={trip.id}>{trip.name} - {trip.description}</option>
                  ))}
                </select>
                {errors.tripType && <p className="mt-1 text-sm text-red-500">{errors.tripType}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Destination *</label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange ${
                    errors.destination ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select destination</option>
                  {destinations.map(dest => (
                    <option key={dest.id} value={dest.id}>{dest.name} ({dest.region})</option>
                  ))}
                </select>
                {errors.destination && <p className="mt-1 text-sm text-red-500">{errors.destination}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Departure Date *</label>
                  <input
                    type="date"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange ${
                      errors.departureDate ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.departureDate && <p className="mt-1 text-sm text-red-500">{errors.departureDate}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Return Date *</label>
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleInputChange}
                    min={formData.departureDate || new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange ${
                      errors.returnDate ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.returnDate && <p className="mt-1 text-sm text-red-500">{errors.returnDate}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date Flexibility</label>
                <select
                  name="flexibility"
                  value={formData.flexibility}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                >
                  <option value="">Select flexibility</option>
                  <option value="fixed">Fixed dates</option>
                  <option value="flexible-3">Flexible ±3 days</option>
                  <option value="flexible-7">Flexible ±7 days</option>
                  <option value="flexible-14">Flexible ±14 days</option>
                  <option value="completely">Completely flexible</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Group Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Group Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Adults *</label>
                  <input
                    type="number"
                    name="adults"
                    value={formData.adults}
                    onChange={handleInputChange}
                    min="1"
                    max="50"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange ${
                      errors.adults ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.adults && <p className="mt-1 text-sm text-red-500">{errors.adults}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Children (2-11 years)</label>
                  <input
                    type="number"
                    name="children"
                    value={formData.children}
                    onChange={handleInputChange}
                    min="0"
                    max="50"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange ${
                      errors.children ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Infants (under 2 years)</label>
                  <input
                    type="number"
                    name="infants"
                    value={formData.infants}
                    onChange={handleInputChange}
                    min="0"
                    max="50"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange ${
                      errors.infants ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                </div>
              </div>
              
              {errors.passengers && <p className="mt-1 text-sm text-red-500">{errors.passengers}</p>}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Group Type</label>
                <select
                  name="groupType"
                  value={formData.groupType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                >
                  <option value="">Select group type</option>
                  <option value="family">Family</option>
                  <option value="friends">Friends</option>
                  <option value="couple">Couple</option>
                  <option value="solo">Solo Traveler</option>
                  <option value="corporate">Corporate</option>
                  <option value="school">School/Educational</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Accommodation Preference</label>
                  <select
                    name="accommodationPreference"
                    value={formData.accommodationPreference}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                  >
                    <option value="">Select preference</option>
                    <option value="budget">Budget</option>
                    <option value="mid-range">Mid-Range</option>
                    <option value="luxury">Luxury</option>
                    <option value="eco-lodge">Eco-Lodge</option>
                    <option value="camping">Camping</option>
                    <option value="no-preference">No Preference</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Transport Preference</label>
                  <select
                    name="transportPreference"
                    value={formData.transportPreference}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                  >
                    <option value="">Select preference</option>
                    <option value="shared">Shared Transport</option>
                    <option value="private">Private Vehicle</option>
                    <option value="self-drive">Self-Drive</option>
                    <option value="domestic-flights">Domestic Flights</option>
                    <option value="mixed">Mixed Transport</option>
                    <option value="no-preference">No Preference</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Meal Preference</label>
                  <select
                    name="mealPreference"
                    value={formData.mealPreference}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                  >
                    <option value="">Select preference</option>
                    <option value="all-inclusive">All Inclusive</option>
                    <option value="breakfast-only">Breakfast Only</option>
                    <option value="half-board">Half Board</option>
                    <option value="full-board">Full Board</option>
                    <option value="self-catering">Self-Catering</option>
                    <option value="no-preference">No Preference</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Services</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {additionalServicesOptions.map(service => (
                    <label key={service.id} className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.additionalServices.includes(service.id)}
                        onChange={() => handleServiceToggle(service.id)}
                        className="w-4 h-4 text-orange border-gray-300 rounded focus:ring-orange mt-1"
                      />
                      <div>
                        <span className="font-medium text-gray-800">{service.name}</span>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Budget & Terms */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Budget & Requirements</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range (per person) *</label>
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange ${
                    errors.budgetRange ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select budget range</option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2000">$1,000 - $2,000</option>
                  <option value="2000-3000">$2,000 - $3,000</option>
                  <option value="3000-5000">$3,000 - $5,000</option>
                  <option value="5000-plus">$5,000+</option>
                  <option value="flexible">Flexible Budget</option>
                </select>
                {errors.budgetRange && <p className="mt-1 text-sm text-red-500">{errors.budgetRange}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
                <textarea
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                  placeholder="Please describe any special requirements, dietary restrictions, medical conditions, or specific preferences..."
                />
              </div>

              <div className="space-y-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="firstTimeKenya"
                    checked={formData.firstTimeKenya}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-orange border-gray-300 rounded focus:ring-orange"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    This is my first time visiting Kenya
                  </span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="travelInsurance"
                    checked={formData.travelInsurance}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-orange border-gray-300 rounded focus:ring-orange"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    I need travel insurance assistance
                  </span>
                </label>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quote Request Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Trip Type:</span>
                    <span className="font-medium">
                      {tripTypes.find(t => t.id === formData.tripType)?.name || 'Not selected'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Destination:</span>
                    <span className="font-medium">
                      {destinations.find(d => d.id === formData.destination)?.name || 'Not selected'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Travel Dates:</span>
                    <span className="font-medium">
                      {formData.departureDate && formData.returnDate 
                        ? `${formData.departureDate} to ${formData.returnDate}`
                        : 'Not selected'
                      }
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Travelers:</span>
                    <span className="font-medium">
                      {formData.adults} Adults, {formData.children} Children, {formData.infants} Infants
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Budget Range:</span>
                    <span className="font-medium">
                      {formData.budgetRange ? formData.budgetRange.replace('-', ' to $') : 'Not selected'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-orange border-gray-300 rounded focus:ring-orange"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    I agree to the terms and conditions and privacy policy
                  </span>
                </label>
                {errors.agreeToTerms && <p className="mt-1 text-sm text-red-500">{errors.agreeToTerms}</p>}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 bg-orange text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-green text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default QuoteRequestForm
