import React, { useState, useEffect } from 'react'
import { sendBookingConfirmationEmail } from '../services/emailService'

const ProfessionalBookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '+254',
    country: '',
    nationality: '',
    
    // Service Selection
    serviceCategory: '',
    selectedService: '',
    departureDate: '',
    returnDate: '',
    
    // Passenger Details
    adults: 1,
    children: 0,
    infants: 0,
    
    // Special Requirements
    specialRequests: '',
    dietaryRestrictions: '',
    medicalConditions: '',
    accommodationPreference: '',
    transportPreference: '',
    
    // Payment Information (no card)
    paymentMethod: '',
    
    // Terms
    agreeToTerms: false
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)
  const [bookingReference, setBookingReference] = useState('')

  const countries = [
    'Kenya', 'United States', 'United Kingdom', 'Canada', 'Australia',
    'Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Japan',
    'China', 'India', 'South Africa', 'Nigeria', 'Ghana', 'Uganda',
    'Tanzania', 'Rwanda', 'Burundi', 'Ethiopia', 'Somalia', 'Sudan',
    'Egypt', 'Morocco', 'Algeria', 'Tunisia', 'Libya', 'Brazil',
    'Argentina', 'Chile', 'Peru', 'Mexico', 'Colombia', 'Venezuela',
    'Russia', 'South Korea', 'Singapore', 'Malaysia', 'Indonesia',
    'Philippines', 'Thailand', 'Vietnam', 'Turkey', 'Pakistan',
    'Afghanistan', 'Sri Lanka', 'Myanmar', 'Iran', 'Portugal',
    'Finland', 'Sweden', 'Norway', 'Denmark', 'Austria', 'Switzerland',
    'Belgium', 'Luxembourg', 'Ireland', 'Poland', 'Czech Republic',
    'Slovakia', 'Hungary', 'Romania', 'Serbia', 'Croatia', 'Slovenia',
    'Latvia', 'Lithuania', 'Estonia', 'Belarus', 'Ukraine',
    'Azerbaijan', 'Georgia', 'Armenia', 'Moldova', 'Bulgaria',
    'Greece', 'Cyprus', 'Saudi Arabia', 'United Arab Emirates', 'Oman',
    'Qatar', 'Bahrain', 'Kuwait', 'Lebanon', 'Jordan', 'Syria',
    'Iraq', 'Palestine', 'Israel', 'Iceland', 'Greenland', 'Jamaica',
    'Bahamas', 'Trinidad and Tobago', 'Barbados', 'Costa Rica',
    'El Salvador', 'Guatemala', 'Honduras', 'Nicaragua', 'Panama',
    'Bolivia', 'Ecuador', 'French Guiana', 'Paraguay', 'Uruguay',
    'Dominican Republic', 'Cuba', 'Haiti', 'Puerto Rico', 'Cook Islands',
    'New Zealand', 'Papua New Guinea', 'Fiji', 'Palau', 'Samoa',
    'New Caledonia', 'Tonga', 'Vanuatu', 'Niue', 'American Samoa',
    'Wallis and Futuna', 'East Timor', 'Antarctica', 'Brunei', 'Nauru',
    'Solomon Islands', 'French Polynesia', 'Micronesia', 'Marshall Islands',
    'North Korea', 'Cambodia', 'Laos', 'Bangladesh', 'Taiwan',
    'Maldives', 'Mongolia', 'Nepal', 'Tajikistan', 'Turkmenistan',
    'Kyrgyzstan', 'Uzbekistan', 'Kazakhstan'
  ]

  const countryCodes = [
    { code: '+254', country: 'Kenya' },
    { code: '+1', country: 'United States' },
    { code: '+44', country: 'United Kingdom' },
    { code: '+1', country: 'Canada' },
    { code: '+61', country: 'Australia' },
    { code: '+49', country: 'Germany' },
    { code: '+33', country: 'France' },
    { code: '+39', country: 'Italy' },
    { code: '+34', country: 'Spain' },
    { code: '+31', country: 'Netherlands' },
    { code: '+81', country: 'Japan' },
    { code: '+86', country: 'China' },
    { code: '+91', country: 'India' },
    { code: '+27', country: 'South Africa' },
    { code: '+234', country: 'Nigeria' },
    { code: '+233', country: 'Ghana' },
    { code: '+256', country: 'Uganda' },
    { code: '+255', country: 'Tanzania' },
    { code: '+250', country: 'Rwanda' },
    { code: '+257', country: 'Burundi' },
    { code: '+251', country: 'Ethiopia' },
    { code: '+252', country: 'Somalia' },
    { code: '+249', country: 'Sudan' },
    { code: '+20', country: 'Egypt' },
    { code: '+212', country: 'Morocco' },
    { code: '+213', country: 'Algeria' },
    { code: '+216', country: 'Tunisia' },
    { code: '+218', country: 'Libya' },
    { code: '+55', country: 'Brazil' },
    { code: '+54', country: 'Argentina' },
    { code: '+56', country: 'Chile' },
    { code: '+51', country: 'Peru' },
    { code: '+52', country: 'Mexico' },
    { code: '+57', country: 'Colombia' },
    { code: '+58', country: 'Venezuela' },
    { code: '+7', country: 'Russia' },
    { code: '+82', country: 'South Korea' },
    { code: '+65', country: 'Singapore' },
    { code: '+60', country: 'Malaysia' },
    { code: '+62', country: 'Indonesia' },
    { code: '+63', country: 'Philippines' },
    { code: '+66', country: 'Thailand' },
    { code: '+84', country: 'Vietnam' },
    { code: '+90', country: 'Turkey' },
    { code: '+92', country: 'Pakistan' },
    { code: '+93', country: 'Afghanistan' },
    { code: '+94', country: 'Sri Lanka' },
    { code: '+95', country: 'Myanmar' },
    { code: '+98', country: 'Iran' },
    { code: '+351', country: 'Portugal' },
    { code: '+358', country: 'Finland' },
    { code: '+46', country: 'Sweden' },
    { code: '+47', country: 'Norway' },
    { code: '+45', country: 'Denmark' },
    { code: '+43', country: 'Austria' },
    { code: '+41', country: 'Switzerland' },
    { code: '+32', country: 'Belgium' },
    { code: '+352', country: 'Luxembourg' },
    { code: '+353', country: 'Ireland' },
    { code: '+48', country: 'Poland' },
    { code: '+420', country: 'Czech Republic' },
    { code: '+421', country: 'Slovakia' },
    { code: '+36', country: 'Hungary' },
    { code: '+40', country: 'Romania' },
    { code: '+381', country: 'Serbia' },
    { code: '+385', country: 'Croatia' },
    { code: '+386', country: 'Slovenia' },
    { code: '+371', country: 'Latvia' },
    { code: '+370', country: 'Lithuania' },
    { code: '+372', country: 'Estonia' },
    { code: '+375', country: 'Belarus' },
    { code: '+380', country: 'Ukraine' },
    { code: '+994', country: 'Azerbaijan' },
    { code: '+995', country: 'Georgia' },
    { code: '+374', country: 'Armenia' },
    { code: '+373', country: 'Moldova' },
    { code: '+359', country: 'Bulgaria' },
    { code: '+30', country: 'Greece' },
    { code: '+357', country: 'Cyprus' },
    { code: '+966', country: 'Saudi Arabia' },
    { code: '+971', country: 'United Arab Emirates' },
    { code: '+968', country: 'Oman' },
    { code: '+974', country: 'Qatar' },
    { code: '+973', country: 'Bahrain' },
    { code: '+965', country: 'Kuwait' },
    { code: '+961', country: 'Lebanon' },
    { code: '+962', country: 'Jordan' },
    { code: '+963', country: 'Syria' },
    { code: '+964', country: 'Iraq' },
    { code: '+970', country: 'Palestine' },
    { code: '+972', country: 'Israel' },
    { code: '+354', country: 'Iceland' },
    { code: '+299', country: 'Greenland' },
    { code: '+1', country: 'Jamaica' },
    { code: '+1', country: 'Bahamas' },
    { code: '+1', country: 'Trinidad and Tobago' },
    { code: '+1', country: 'Barbados' },
    { code: '+506', country: 'Costa Rica' },
    { code: '+503', country: 'El Salvador' },
    { code: '+502', country: 'Guatemala' },
    { code: '+504', country: 'Honduras' },
    { code: '+505', country: 'Nicaragua' },
    { code: '+507', country: 'Panama' },
    { code: '+591', country: 'Bolivia' },
    { code: '+593', country: 'Ecuador' },
    { code: '+594', country: 'French Guiana' },
    { code: '+595', country: 'Paraguay' },
    { code: '+598', country: 'Uruguay' },
    { code: '+1', country: 'Dominican Republic' },
    { code: '+53', country: 'Cuba' },
    { code: '+1', country: 'Haiti' },
    { code: '+509', country: 'Haiti' },
    { code: '+1', country: 'Puerto Rico' },
    { code: '+682', country: 'Cook Islands' },
    { code: '+64', country: 'New Zealand' },
    { code: '+675', country: 'Papua New Guinea' },
    { code: '+679', country: 'Fiji' },
    { code: '+680', country: 'Palau' },
    { code: '+685', country: 'Samoa' },
    { code: '+687', country: 'New Caledonia' },
    { code: '+676', country: 'Tonga' },
    { code: '+678', country: 'Vanuatu' },
    { code: '+683', country: 'Niue' },
    { code: '+684', country: 'American Samoa' },
    { code: '+681', country: 'Wallis and Futuna' },
    { code: '+670', country: 'East Timor' },
    { code: '+672', country: 'Antarctica' },
    { code: '+673', country: 'Brunei' },
    { code: '+674', country: 'Nauru' },
    { code: '+677', country: 'Solomon Islands' },
    { code: '+689', country: 'French Polynesia' },
    { code: '+691', country: 'Micronesia' },
    { code: '+692', country: 'Marshall Islands' },
    { code: '+850', country: 'North Korea' },
    { code: '+855', country: 'Cambodia' },
    { code: '+856', country: 'Laos' },
    { code: '+880', country: 'Bangladesh' },
    { code: '+886', country: 'Taiwan' },
    { code: '+960', country: 'Maldives' },
    { code: '+976', country: 'Mongolia' },
    { code: '+977', country: 'Nepal' },
    { code: '+992', country: 'Tajikistan' },
    { code: '+993', country: 'Turkmenistan' },
    { code: '+996', country: 'Kyrgyzstan' },
    { code: '+998', country: 'Uzbekistan' }
  ]

  const services = {
    tours: [
      { id: 'Tsavo East & Tsavo West Private Safari', name: 'Tsavo East & Tsavo West Private Safari', price: 650, duration: '3 Days / 2 Nights' },
      { id: 'Maasai Mara Safari', name: 'Maasai Mara Safari', price: 500, duration: '3 Days / 2 Nights' },
      { id: 'Samburu National Reserve & Lake Nakuru National Park', name: 'Samburu National Reserve & Lake Nakuru National Park', price: 1200, duration: '4 Days / 3 Nights' },
       { id: 'Tsavo West National Park from Mombasa - Private Safari', name: 'Tsavo West National Park from Mombasa - Private Safari', price: 450, duration: '2 Days / 1 Night' },
       { id: 'Tsavo East National Park & Salt Lick Safari Lodge - Private Safari', name: 'Tsavo East National Park & Salt Lick Safari Lodge - Private Safari', price: 550, duration: '3 Days / 2 Nights' },
       { id: 'Lake Naivasha, Hells Gate & Geothermal Spa', name: 'Lake Naivasha, Hells Gate & Geothermal Spa', price: 500, duration: '3 Days / 2 Nights' },
       { id: 'Tsavo East National Park from Mombasa/Diani/kilifi - Private Safari', name: 'Tsavo East National Park from Mombasa/Diani/kilifi- Private Safari', price: 450, duration: '2 Days / 1 Night' },
       { id: 'Ol Pejeta Conservancy - Sweetwaters Serena Camp', name: 'Ol Pejeta Conservancy - Sweetwaters Serena Camp', price: 580, duration: '2 Days / 1 Night' }
    ],
    safaris: [
      { id: 'Tsavo East & Tsavo West Private Safari', name: 'Tsavo East & Tsavo West Private Safari', price: 650, duration: '3 Days / 2 Nights' },
      { id: 'Masai Mara Safari', name: 'Masai Mara Safari', price: 500, duration: '3 Days' },
      { id: 'Lake Naivasha , Hells Gate & Geothermal Spa', name: 'Lake Naivasha, Hells Gate & Geothermal Spa', price: 500, duration: '3 Days / 2 Nights' },
      { id: 'Amboseli Safari from Mombasa/Diani/kilifi- Private', name: 'Amboseli Safari from Mombasa/Diani/kilifi - Private', price: 510, duration: '2 Days / 1 Night' },
      { id: 'Lake Nakuru, Lake Naivasha and Masai Mara', name: 'Lake Nakuru, Lake Naivasha and Masai Mara', price: 1400, duration: '5 Days 4 Nights' },
      { id: 'Taita Hills Wildlife Sanctuary private Safari from Mombasa', name: 'Taita Hills Wildlife Sanctuary private Safari from Mombasa', price: 350, duration: '2 Days / 1 Night' },
      { id: 'Masai Mara National Reserve from Nairobi', name: 'Masai Mara National Reserve from Nairobi', price: 1300, duration: '4 Days / 3 Nights' }
    ],
    excursions: [
      { id: 'Mombasa City Tour – Full Day Itinerary', name: 'Mombasa City Tour – Full Day Itinerary', price: 150, duration: 'Full Day' },
      { id: 'Kisite-Mpunguti Marine National Park from Mombasa', name: 'Kisite-Mpunguti Marine National Park from Mombasa', price: 200, duration: 'Full Day' },
      { id: 'Nairobi National Park – Full-Day', name: 'Nairobi National Park – Full-Day', price: 180, duration: 'Full Day' }
    ],
    transfers: [
      { id: 'airport-transfer', name: 'Airport Transfer', price: 30, duration: '1 Hour' },
      { id: 'hotel-transfer', name: 'Hotel Transfer Service', price: 40, duration: '1 Hour' },
      { id: 'SGR Standard Gauge Railway', name: 'SGR Standard Gauge Railway', price: 200, duration: 'Custom' }
    ]
  }

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
      if (!formData.nationality) newErrors.nationality = 'Nationality is required'
    }
    
    if (step === 2) {
      // Service Selection Validation
      if (!formData.serviceCategory) newErrors.serviceCategory = 'Service category is required'
      if (!formData.selectedService) newErrors.selectedService = 'Please select a service'
      if (!formData.departureDate) newErrors.departureDate = 'Departure date is required'
      else {
        const selectedDate = new Date(formData.departureDate)
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        if (selectedDate < today) {
          newErrors.departureDate = 'Departure date cannot be in the past'
        }
      }
    }
    
    if (step === 3) {
      // Passenger Details Validation
      if (formData.adults < 1) newErrors.adults = 'At least one adult is required'
      if (formData.adults < 0 || formData.children < 0 || formData.infants < 0) {
        newErrors.passengers = 'Passenger numbers cannot be negative'
      }
    }
    
    if (step === 4) {
      // Payment Validation
      if (!formData.paymentMethod) newErrors.paymentMethod = 'Payment method is required'
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

  const calculateTotalPrice = () => {
    if (!formData.selectedService) return 0
    
    let basePrice = 0
    Object.values(services).forEach(category => {
      const service = category.find(s => s.id === formData.selectedService)
      if (service) basePrice = service.price
    })
    
    const totalPassengers = formData.adults + formData.children + formData.infants
    return basePrice * totalPassengers
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateStep(4)) return
    
    setIsSubmitting(true)
    
    try {
      const reference = 'SNA' + Date.now().toString().slice(-8)
      const totalPrice = calculateTotalPrice()
      
      // Send email notifications
      const emailResult = await sendBookingConfirmationEmail(formData, reference, totalPrice)
      
      if (emailResult.success) {
        setBookingReference(reference)
        setBookingConfirmed(true)
      } else {
        // Still show booking confirmation even if email fails
        setBookingReference(reference)
        setBookingConfirmed(true)
        console.error('Email sending failed:', emailResult.error)
      }
    } catch (error) {
      console.error('Booking submission error:', error)
      // Still show booking confirmation even if there's an error
      const reference = 'SNA' + Date.now().toString().slice(-8)
      setBookingReference(reference)
      setBookingConfirmed(true)
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
      country: '',
      nationality: '',
      serviceCategory: '',
      selectedService: '',
      departureDate: '',
      returnDate: '',
      adults: 1,
      children: 0,
      infants: 0,
      specialRequests: '',
      dietaryRestrictions: '',
      medicalConditions: '',
      accommodationPreference: '',
      transportPreference: '',
      paymentMethod: '',
      agreeToTerms: false
    })
    setCurrentStep(1)
    setErrors({})
    setBookingConfirmed(false)
    setBookingReference('')
  }

  const progressSteps = [
    { number: 1, title: 'Personal Info', icon: '👤' },
    { number: 2, title: 'Service Selection', icon: '🎯' },
    { number: 3, title: 'Passenger Details', icon: '👥' },
    { number: 4, title: 'Payment', icon: '💳' }
  ]

  if (bookingConfirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h1 className="text-3xl font-bold text-green-600 mb-2">Booking Confirmed!</h1>
              <p className="text-gray-600">Thank you for choosing Summer Niche Adventures</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-green-800 mb-4">Booking Reference</h2>
              <p className="text-2xl font-bold text-green-600">{bookingReference}</p>
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
                  <span>Our team will contact you within 24 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Payment instructions will be provided via email</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Additional trip details will be shared before departure</span>
                </li>
              </ul>
            </div>
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={resetForm}
                className="bg-orange text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Make Another Booking
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Book Your African Adventure</h1>
          <p className="text-xl text-gray-600">Complete the form below to secure your unforgettable experience</p>
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
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <div className="relative flex-shrink-0 w-full sm:w-auto">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className="appearance-none pl-10 pr-8 py-3 border rounded-l-lg sm:rounded-l-lg rounded-lg focus:ring-2 focus:ring-orange focus:border-orange border-gray-300 bg-white cursor-pointer w-full sm:min-w-[160px] font-semibold text-gray-800 hover:border-orange-400 transition-colors"
                      >
                        {countryCodes.map((item, index) => (
                          <option key={index} value={item.code}>
                            {item.code}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`flex-1 px-4 py-3 border rounded-r-lg sm:rounded-r-lg rounded-lg focus:ring-2 focus:ring-orange focus:border-orange ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      } hover:border-orange-400 transition-colors w-full`}
                      placeholder="123 456 789"
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nationality *</label>
                  <select
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange ${
                      errors.nationality ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select your nationality</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  {errors.nationality && <p className="mt-1 text-sm text-red-500">{errors.nationality}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Service Selection */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Service Selection</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Category *</label>
                <select
                  name="serviceCategory"
                  value={formData.serviceCategory}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange ${
                    errors.serviceCategory ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a category</option>
                  <option value="tours">Tours</option>
                  <option value="safaris">Safaris</option>
                  <option value="excursions">Excursions</option>
                  <option value="transfers">Transfers</option>
                </select>
                {errors.serviceCategory && <p className="mt-1 text-sm text-red-500">{errors.serviceCategory}</p>}
              </div>

              {formData.serviceCategory && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Service *</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services[formData.serviceCategory].map(service => (
                      <label key={service.id} className="cursor-pointer">
                        <input
                          type="radio"
                          name="selectedService"
                          value={service.id}
                          checked={formData.selectedService === service.id}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`border rounded-lg p-4 transition-all ${
                          formData.selectedService === service.id
                            ? 'border-orange bg-orange-50'
                            : 'border-gray-300 hover:border-orange'
                        }`}>
                          <h3 className="font-semibold text-gray-800">{service.name}</h3>
                          <p className="text-sm text-gray-600">{service.duration}</p>
                          <p className="text-lg font-bold text-green-600">from ${service.price}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.selectedService && <p className="mt-1 text-sm text-red-500">{errors.selectedService}</p>}
                </div>
              )}

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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Return Date (Optional)</label>
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleInputChange}
                    min={formData.departureDate || new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Passenger Details */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Passenger Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Adults *</label>
                  <input
                    type="number"
                    name="adults"
                    value={formData.adults}
                    onChange={handleInputChange}
                    min="1"
                    max="20"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange ${
                      errors.adults ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.adults && <p className="mt-1 text-sm text-red-500">{errors.adults}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Children</label>
                  <input
                    type="number"
                    name="children"
                    value={formData.children}
                    onChange={handleInputChange}
                    min="0"
                    max="20"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange ${
                      errors.children ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Infants</label>
                  <input
                    type="number"
                    name="infants"
                    value={formData.infants}
                    onChange={handleInputChange}
                    min="0"
                    max="20"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange ${
                      errors.infants ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                </div>
              </div>
              
              {errors.passengers && <p className="mt-1 text-sm text-red-500">{errors.passengers}</p>}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                    placeholder="Any special requirements or preferences..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Restrictions</label>
                  <textarea
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                    placeholder="Food allergies or dietary requirements..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Medical Conditions</label>
                  <textarea
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                    placeholder="Any medical conditions we should be aware of..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <option value="private">Private Transport</option>
                      <option value="self-drive">Self-Drive</option>
                      <option value="no-preference">No Preference</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Payment */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['mpesa', 'bank-transfer'].map(method => (
                    <label key={method} className="cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method}
                        checked={formData.paymentMethod === method}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`border rounded-lg p-4 text-center transition-all ${
                        formData.paymentMethod === method
                          ? 'border-orange bg-orange-50'
                          : 'border-gray-300 hover:border-orange'
                      }`}>
                        <div className="text-2xl mb-2">
                          {method === 'mpesa' && '📱'}
                          {method === 'bank-transfer' && '🏦'}
                        </div>
                        <div className="font-medium capitalize">
                          {method.replace('-', ' ')}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.paymentMethod && <p className="mt-1 text-sm text-red-500">{errors.paymentMethod}</p>}
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Booking Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <span className="font-medium">
                      {formData.selectedService && 
                        Object.values(services).flat().find(s => s.id === formData.selectedService)?.name
                      }
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Departure Date:</span>
                    <span className="font-medium">{formData.departureDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Passengers:</span>
                    <span className="font-medium">
                      {formData.adults} Adults, {formData.children} Children, {formData.infants} Infants
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Amount:</span>
                    <span className="text-green-600">${calculateTotalPrice()}</span>
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
                {isSubmitting ? 'Processing...' : 'Complete Booking'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfessionalBookingForm
