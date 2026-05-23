// Backend API configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-domain.com' 
  : 'http://localhost:5001'

// Admin email for notifications
const ADMIN_EMAIL = 'ellyman2021@gmail.com'

export const sendContactFormEmail = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/send-contact-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formData
      })
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || 'Failed to send contact emails')
    }

    return { success: true, message: result.message }
  } catch (error) {
    console.error('Contact email sending failed:', error)
    return { success: false, error: error.message }
  }
}

export const sendQuoteRequestEmail = async (formData, quoteReference) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/send-quote-request-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formData,
        quoteReference
      })
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || 'Failed to send quote request emails')
    }

    return { success: true, message: result.message }
  } catch (error) {
    console.error('Quote request email sending failed:', error)
    return { success: false, error: error.message }
  }
}

export const sendBookingConfirmationEmail = async (formData, bookingReference, totalPrice) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/send-booking-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formData,
        bookingReference,
        totalPrice
      })
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || 'Failed to send emails')
    }

    return { success: true, message: result.message }
  } catch (error) {
    console.error('Email sending failed:', error)
    // Fallback to mailto links if backend fails
    return sendBookingConfirmationFallback(formData, bookingReference, totalPrice)
  }
}

const getServiceName = (category, serviceId) => {
  const services = {
    tours: {
      'Tsavo East & Tsavo West Private Safari': 'Tsavo East & Tsavo West Private Safari',
      'Maasai Mara Safari': 'Maasai Mara Safari',
      'Lake Naivasha, Hells Gate & Geothermal Spa': 'Lake Naivasha, Hells Gate & Geothermal Spa',
      ' Private Safari to Tsavo West National Park from Mombasa': ' Private Safari to Tsavo West National Park from Mombasa'
    },
    safaris: {
      'masai-mara': 'Masai Mara Safari',
      'amboseli': 'Amboseli National Park',
      'luxury-safari': 'Luxury Safari Package'
    },
    excursions: {
      'lake-nakuru': 'Lake Nakuru Day Trip',
      'marine-adventure': 'Marine Adventure - Diani',
      'mount-kenya': 'Mount Kenya Day Hike'
    },
    transfers: {
      'airport-transfer': 'Airport Transfer',
      'hotel-transfer': 'Hotel Transfer Service',
      'private-charter': 'Private Charter'
    }
  }

  return services[category]?.[serviceId] || ''
}

// Fallback function for when EmailJS is not configured
export const sendBookingConfirmationFallback = (formData, bookingReference, totalPrice) => {
  // Create mailto links for client and admin
  const clientSubject = `Booking Confirmation - ${bookingReference} - Summer Niche Adventures`
  const clientBody = `
Dear ${formData.firstName} ${formData.lastName},

Thank you for booking with Summer Niche Adventures!

We've received your booking and will contact you shortly to confirm the details.

Best regards,
Summer Niche Adventures Team
Contact: +254 716 561 523
Email: info@summernicheadventures.com
  `

  const adminSubject = `New Booking - ${bookingReference} - ${formData.firstName} ${formData.lastName}`
  const adminBody = `
NEW BOOKING RECEIVED

Booking Reference: ${bookingReference}
Date: ${new Date().toLocaleDateString()}

CLIENT INFORMATION:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.country}
Nationality: ${formData.nationality}

BOOKING DETAILS:
Service: ${getServiceName(formData.serviceCategory, formData.selectedService)}
Category: ${formData.serviceCategory}
Departure Date: ${formData.departureDate}
Return Date: ${formData.returnDate || 'Not specified'}
Passengers: ${formData.adults} Adults, ${formData.children} Children, ${formData.infants} Infants
Total Price: $${totalPrice}

ADDITIONAL INFORMATION:
Special Requests: ${formData.specialRequests || 'None'}
Dietary Restrictions: ${formData.dietaryRestrictions || 'None'}
Medical Conditions: ${formData.medicalConditions || 'None'}
Accommodation Preference: ${formData.accommodationPreference || 'Not specified'}
Transport Preference: ${formData.transportPreference || 'Not specified'}
Payment Method: ${formData.paymentMethod}

Please contact the client to confirm the booking details.
  `

  // Open client email
  window.location.href = `mailto:${formData.email}?subject=${encodeURIComponent(clientSubject)}&body=${encodeURIComponent(clientBody)}`
  
  // Open admin email after a short delay
  setTimeout(() => {
    window.location.href = `mailto:${ADMIN_EMAIL}?subject=${encodeURIComponent(adminSubject)}&body=${encodeURIComponent(adminBody)}`
  }, 1000)

  return { success: true, fallback: true }
}
