import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import path from 'path'
import { fileURLToPath } from 'url'
import { config } from 'dotenv'

// Suppress all dotenv messages
process.env.DOTENV_SUPPRESS_DEBUG = 'true'
process.env.DOTENV_SUPPRESS_OVERRIDE_WARNING = 'true'
process.env.DOTENV_SILENT = 'true'
config({ override: false, debug: false, silent: true })

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5001

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'dist')))

// Create Nodemailer transporter with simple authentication
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  authMethod: 'LOGIN',
  tls: {
    rejectUnauthorized: false
  }
})

// Email templates
const getClientEmailTemplate = (formData, bookingReference, totalPrice) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation - Summer Niche Adventures</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #ff6b35;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #ff6b35;
            margin-bottom: 10px;
        }
        .booking-details {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .booking-details h3 {
            color: #ff6b35;
            margin-top: 0;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
            padding: 5px 0;
            border-bottom: 1px solid #eee;
        }
        .detail-label {
            font-weight: bold;
            color: #555;
        }
        .detail-value {
            color: #333;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
        }
        .thank-you {
            background-color: #e8f5e8;
            padding: 15px;
            border-radius: 5px;
            text-align: center;
            margin: 20px 0;
            border-left: 4px solid #28a745;
        }
        .contact-info {
            background-color: #fff3cd;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
            border-left: 4px solid #ffc107;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo"> Summer Niche Adventures</div>
            <h1>Booking Confirmation</h1>
        </div>
        
        <div class="thank-you">
            <h2>🎉 Thank You for Your Booking!</h2>
            <p>Your adventure with Summer Niche Adventures has been confirmed. We're excited to help you explore the beauty of Kenya!</p>
        </div>        
        <div class="contact-info">
            <h3>📞 Contact Information</h3>
            <p><strong>Phone:</strong> +254 716 561 523</p>
            <p><strong>Email:</strong> info@summernicheadventures.com</p>
            <p>Feel free to contact us if you have any questions or need to make changes to your booking.</p>
        </div>
        
        <div class="footer">
            <p>© Summer Niche Adventures. All rights reserved.</p>
            <p>Mbaraki,Likoni, Mombasa, Kenya</p>
        </div>
    </div>
</body>
</html>
`

const getAdminEmailTemplate = (formData, bookingReference, totalPrice) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Booking - Summer Niche Adventures</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #ff6b35;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #ff6b35;
            margin-bottom: 10px;
        }
        .alert {
            background-color: #d4edda;
            padding: 15px;
            border-radius: 5px;
            text-align: center;
            margin: 20px 0;
            border-left: 4px solid #28a745;
            font-weight: bold;
        }
        .section {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .section h3 {
            color: #ff6b35;
            margin-top: 0;
            margin-bottom: 15px;
        }
        .detail-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            margin: 8px 0;
            padding: 5px 0;
            border-bottom: 1px solid #eee;
        }
        .detail-label {
            font-weight: bold;
            color: #555;
        }
        .detail-value {
            color: #333;
        }
        .highlight {
            background-color: #fff3cd;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
            border-left: 4px solid #ffc107;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo"> Summer Niche Adventures</div>
            <h1> New Booking Received</h1>
        </div>
        
        <div class="alert">
            A new booking has been submitted! Please review the details below and contact the client to confirm.
        </div>
        
        <div class="section">
            <h3>📋 Booking Information</h3>
            <div class="detail-row">
                <span class="detail-label">Booking Reference:</span>
                <span class="detail-value"><strong>${bookingReference}</strong></span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Booking Date:</span>
                <span class="detail-value">${new Date().toLocaleDateString()}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Service:</span>
                <span class="detail-value">${getServiceName(formData.serviceCategory, formData.selectedService)}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Category:</span>
                <span class="detail-value">${formData.serviceCategory}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Departure Date:</span>
                <span class="detail-value">${formData.departureDate}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Return Date:</span>
                <span class="detail-value">${formData.returnDate || 'Not specified'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Passengers:</span>
                <span class="detail-value">${formData.adults} Adults, ${formData.children} Children, ${formData.infants} Infants</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Total Amount:</span>
                <span class="detail-value" style="color: #28a745; font-weight: bold;">$${totalPrice}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Payment Method:</span>
                <span class="detail-value">${formData.paymentMethod}</span>
            </div>
        </div>
        
        <div class="section">
            <h3>👤 Client Information</h3>
            <div class="detail-grid">
                <div class="detail-row">
                    <span class="detail-label">Name:</span>
                    <span class="detail-value">${formData.firstName} ${formData.lastName}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Email:</span>
                    <span class="detail-value">${formData.email}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Phone:</span>
                    <span class="detail-value">${formData.phone}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Country:</span>
                    <span class="detail-value">${formData.country}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Nationality:</span>
                    <span class="detail-value">${formData.nationality}</span>
                </div>
            </div>
        </div>
        
        ${(formData.specialRequests || formData.dietaryRestrictions || formData.medicalConditions) ? `
        <div class="section">
            <h3>📝 Additional Information</h3>
            ${formData.specialRequests ? `
                <div class="detail-row">
                    <span class="detail-label">Special Requests:</span>
                    <span class="detail-value">${formData.specialRequests}</span>
                </div>
            ` : ''}
            ${formData.dietaryRestrictions ? `
                <div class="detail-row">
                    <span class="detail-label">Dietary Restrictions:</span>
                    <span class="detail-value">${formData.dietaryRestrictions}</span>
                </div>
            ` : ''}
            ${formData.medicalConditions ? `
                <div class="detail-row">
                    <span class="detail-label">Medical Conditions:</span>
                    <span class="detail-value">${formData.medicalConditions}</span>
                </div>
            ` : ''}
            ${formData.accommodationPreference ? `
                <div class="detail-row">
                    <span class="detail-label">Accommodation:</span>
                    <span class="detail-value">${formData.accommodationPreference}</span>
                </div>
            ` : ''}
            ${formData.transportPreference ? `
                <div class="detail-row">
                    <span class="detail-label">Transport:</span>
                    <span class="detail-value">${formData.transportPreference}</span>
                </div>
            ` : ''}
        </div>
        ` : ''}
        
        <div class="highlight">
            <h3>⚠️ Action Required</h3>
            <p>Please contact the client within 24 hours to:</p>
            <ul>
                <li>Confirm the booking details</li>
                <li>Provide payment instructions</li>
                <li>Share additional trip information</li>
                <li>Answer any questions they may have</li>
            </ul>
        </div>
        
        <div class="footer">
            <p>© Summer Niche Adventures. All rights reserved.</p>
            <p>This is an automated notification from the booking system.</p>
        </div>
    </div>
</body>
</html>
`

const getServiceName = (category, serviceId) => {
  const services = {
    tours: {
      'nairobi-city': 'Nairobi City Tour',
      'maasai-cultural': 'Maasai Cultural Experience',
      'lamu-historical': 'Lamu Historical Tour'
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

  return services[category]?.[serviceId] || 'Unknown Service'
}

// Contact email templates
const getContactClientEmailTemplate = (formData) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting Summer Niche Adventures</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #ff6b35;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #ff6b35;
            margin-bottom: 10px;
        }
        .thank-you {
            background-color: #e8f5e8;
            padding: 15px;
            border-radius: 5px;
            text-align: center;
            margin: 20px 0;
            border-left: 4px solid #28a745;
        }
        .message-summary {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
            border-left: 4px solid #ff6b35;
        }
        .contact-info {
            background-color: #fff3cd;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
            border-left: 4px solid #ffc107;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo"> Summer Niche Adventures</div>
            <h1>Thank You for Contacting Us!</h1>
        </div>
        
        <div class="thank-you">
            <h2>🎉 We've Received Your Message</h2>
            <p>Thank you for reaching out to Summer Niche Adventures. We've received your message and will get back to you within 24 hours.</p>
        </div>
         
        <div class="contact-info">
            <h3>📞 Contact Information</h3>
            <p><strong>Phone:</strong> +254 716 561 523</p>
            <p><strong>Email:</strong> info@summernicheadventures.com</p>
            <p>Feel free to contact us directly if you need immediate assistance.</p>
        </div>
        
        <div class="footer">
            <p>© 2026 Summer Niche Adventures. All rights reserved.</p>
            <p>Mbaraki, Likoni, Mombasa,Kenya</p>
        </div>
    </div>
</body>
</html>
`

const getContactAdminEmailTemplate = (formData) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission - Summer Niche Adventures</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #ff6b35;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #ff6b35;
            margin-bottom: 10px;
        }
        .alert {
            background-color: #d4edda;
            padding: 15px;
            border-radius: 5px;
            text-align: center;
            margin: 20px 0;
            border-left: 4px solid #28a745;
            font-weight: bold;
        }
        .section {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .section h3 {
            color: #ff6b35;
            margin-top: 0;
            margin-bottom: 15px;
        }
        .message-content {
            background-color: #fff;
            padding: 15px;
            border-left: 4px solid #ff6b35;
            margin: 15px 0;
            border-radius: 3px;
            font-style: italic;
        }
        .highlight {
            background-color: #fff3cd;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
            border-left: 4px solid #ffc107;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">🦁 Summer Niche Adventures</div>
            <h1>🆕 New Contact Form Submission</h1>
        </div>
        
        <div class="alert">
            A new contact form submission has been received! Please review the details below and respond to the inquiry.
        </div>
        
        <div class="section">
            <h3>👤 Contact Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Submission Date:</strong> ${new Date().toLocaleDateString()}</p>
            <p><strong>Submission Time:</strong> ${new Date().toLocaleTimeString()}</p>
        </div>
        
        <div class="section">
            <h3>📝 Message Content</h3>
            <div class="message-content">
                ${formData.message}
            </div>
        </div>
        
        <div class="highlight">
            <h3>⚠️ Action Required</h3>
            <p>Please respond to this inquiry within 24 hours:</p>
            <ul>
                <li>Reply to the client at: ${formData.email}</li>
                <li>Call the client at: ${formData.phone}</li>
                <li>Address their specific inquiry or request</li>
                <li>Provide relevant information about our services</li>
            </ul>
        </div>
        
        <div class="footer">
            <p>© 2026 Summer Niche Adventures. All rights reserved.</p>
            <p>This is an automated notification from the contact form system.</p>
        </div>
    </div>
</body>
</html>
`

// Quote request email templates
const getQuoteClientEmailTemplate = (formData, quoteReference) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quote Request Received - Summer Niche Adventures</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #ff6b35;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #ff6b35;
            margin-bottom: 10px;
        }
        .thank-you {
            background-color: #e8f5e8;
            padding: 15px;
            border-radius: 5px;
            text-align: center;
            margin: 20px 0;
            border-left: 4px solid #28a745;
        }
        .quote-summary {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
            border-left: 4px solid #ff6b35;
        }
        .contact-info {
            background-color: #fff3cd;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
            border-left: 4px solid #ffc107;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">🦁 Summer Niche Adventures</div>
            <h1>Quote Request Received!</h1>
        </div>
        
        <div class="thank-you">
            <h2>🎉 Thank You for Your Quote Request</h2>
            <p>Thank you for requesting a custom quote from Summer Niche Adventures. We've received your request and will prepare a personalized itinerary for you.</p>
        </div>
        
        <div class="quote-summary">
            <h3>📋 Quote Request Details</h3>
            <p><strong>Quote Reference:</strong> ${quoteReference}</p>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Trip Type:</strong> ${formData.tripType || 'Not specified'}</p>
            <p><strong>Destination:</strong> ${formData.destination || 'Not specified'}</p>
            <p><strong>Travel Dates:</strong> ${formData.departureDate && formData.returnDate ? `${formData.departureDate} to ${formData.returnDate}` : 'Not specified'}</p>
            <p><strong>Travelers:</strong> ${formData.adults} Adults, ${formData.children} Children, ${formData.infants} Infants</p>
            <p><strong>Budget Range:</strong> ${formData.budgetRange || 'Not specified'}</p>
        </div>
        
        <div class="contact-info">
            <h3>📞 What Happens Next?</h3>
            <p><strong>Within 24 hours:</strong> Our travel consultants will review your requirements</p>
            <p><strong>Within 48 hours:</strong> You'll receive a detailed quote with multiple options</p>
            <p><strong>Direct Contact:</strong> A consultant will call you to discuss your preferences</p>
            <p><strong>Phone:</strong> +254 716 561 523</p>
            <p><strong>Email:</strong> info@summernicheadventures.com</p>
        </div>
        
        <div class="footer">
            <p>© 2026 Summer Niche Adventures. All rights reserved.</p>
            <p>Mombasa Road, Nairobi, Kenya</p>
            <p>This is an automated confirmation email. Please do not reply to this email.</p>
        </div>
    </div>
</body>
</html>
`

const getQuoteAdminEmailTemplate = (formData, quoteReference) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Quote Request - Summer Niche Adventures</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #ff6b35;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #ff6b35;
            margin-bottom: 10px;
        }
        .alert {
            background-color: #d4edda;
            padding: 15px;
            border-radius: 5px;
            text-align: center;
            margin: 20px 0;
            border-left: 4px solid #28a745;
            font-weight: bold;
        }
        .section {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .section h3 {
            color: #ff6b35;
            margin-top: 0;
            margin-bottom: 15px;
        }
        .highlight {
            background-color: #fff3cd;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
            border-left: 4px solid #ffc107;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
        }
        .detail-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            margin: 8px 0;
            padding: 5px 0;
            border-bottom: 1px solid #eee;
        }
        .detail-label {
            font-weight: bold;
            color: #555;
        }
        .detail-value {
            color: #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo"> Summer Niche Adventures</div>
            <h1>🆕 New Quote Request</h1>
        </div>
        
        <div class="alert">
            A new quote request has been submitted! Please review the details below and prepare a comprehensive quote.
        </div>
        
        <div class="section">
            <h3>📋 Quote Information</h3>
            <div class="detail-row">
                <span class="detail-label">Quote Reference:</span>
                <span class="detail-value"><strong>${quoteReference}</strong></span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Request Date:</span>
                <span class="detail-value">${new Date().toLocaleDateString()}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Request Time:</span>
                <span class="detail-value">${new Date().toLocaleTimeString()}</span>
            </div>
        </div>
        
        <div class="section">
            <h3>👤 Client Information</h3>
            <div class="detail-grid">
                <div class="detail-row">
                    <span class="detail-label">Name:</span>
                    <span class="detail-value">${formData.firstName} ${formData.lastName}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Email:</span>
                    <span class="detail-value">${formData.email}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Phone:</span>
                    <span class="detail-value">${formData.phone}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Country:</span>
                    <span class="detail-value">${formData.country}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Company:</span>
                    <span class="detail-value">${formData.company || 'Not specified'}</span>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3>🗺️ Trip Details</h3>
            <div class="detail-grid">
                <div class="detail-row">
                    <span class="detail-label">Trip Type:</span>
                    <span class="detail-value">${formData.tripType || 'Not specified'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Destination:</span>
                    <span class="detail-value">${formData.destination || 'Not specified'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Departure Date:</span>
                    <span class="detail-value">${formData.departureDate || 'Not specified'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Return Date:</span>
                    <span class="detail-value">${formData.returnDate || 'Not specified'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Date Flexibility:</span>
                    <span class="detail-value">${formData.flexibility || 'Not specified'}</span>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3>👥 Group Information</h3>
            <div class="detail-row">
                <span class="detail-label">Total Travelers:</span>
                <span class="detail-value">${formData.adults} Adults, ${formData.children} Children, ${formData.infants} Infants</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Group Type:</span>
                <span class="detail-value">${formData.groupType || 'Not specified'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Accommodation:</span>
                <span class="detail-value">${formData.accommodationPreference || 'Not specified'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Transport:</span>
                <span class="detail-value">${formData.transportPreference || 'Not specified'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Meals:</span>
                <span class="detail-value">${formData.mealPreference || 'Not specified'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Budget Range:</span>
                <span class="detail-value">${formData.budgetRange || 'Not specified'}</span>
            </div>
        </div>
        
        ${formData.specialRequirements ? `
        <div class="section">
            <h3>📝 Special Requirements</h3>
            <div style="background-color: #fff; padding: 15px; border-left: 4px solid #ff6b35; border-radius: 3px;">
                ${formData.specialRequirements}
            </div>
        </div>
        ` : ''}
        
        ${formData.additionalServices && formData.additionalServices.length > 0 ? `
        <div class="section">
            <h3>🎯 Additional Services Requested</h3>
            <ul style="margin: 10px 0; padding-left: 20px;">
                ${formData.additionalServices.map(service => `<li style="margin: 5px 0;">${service}</li>`).join('')}
            </ul>
        </div>
        ` : ''}
        
        <div class="section">
            <h3>ℹ️ Additional Information</h3>
            <div class="detail-row">
                <span class="detail-label">First Time to Kenya:</span>
                <span class="detail-value">${formData.firstTimeKenya ? 'Yes' : 'No'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Travel Insurance Needed:</span>
                <span class="detail-value">${formData.travelInsurance ? 'Yes' : 'No'}</span>
            </div>
        </div>
        
        <div class="highlight">
            <h3>⚠️ Action Required</h3>
            <p>Please prepare and send a comprehensive quote within 48 hours:</p>
            <ul>
                <li>Review all client requirements and preferences</li>
                <li>Research suitable accommodations and activities</li>
                <li>Create multiple pricing options within budget range</li>
                <li>Contact client at: ${formData.email} or ${formData.phone}</li>
                <li>Provide detailed itinerary with inclusions/exclusions</li>
                <li>Include booking terms and conditions</li>
            </ul>
        </div>
        
        <div class="footer">
            <p>© Summer Niche Adventures. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`

// API endpoint to send booking emails
app.post('/api/send-booking-email', async (req, res) => {
  try {
    const { formData, bookingReference, totalPrice } = req.body

    // Send email to client
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: `Booking Confirmation - ${bookingReference} - Summer Niche Adventures`,
      html: getClientEmailTemplate(formData, bookingReference, totalPrice)
    }

    // Send email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'ellyman2021@gmail.com',
      subject: `New Booking - ${bookingReference} - ${formData.firstName} ${formData.lastName}`,
      html: getAdminEmailTemplate(formData, bookingReference, totalPrice)
    }

    // Send both emails using simple authentication
    await transporter.sendMail(clientMailOptions)
    await transporter.sendMail(adminMailOptions)

    res.json({ success: true, message: 'Emails sent successfully' })
  } catch (error) {
    console.error('Error sending emails:', error)
    res.status(500).json({ success: false, message: 'Failed to send emails', error: error.message })
  }
})

// API endpoint to send contact form emails
app.post('/api/send-contact-email', async (req, res) => {
  try {
    const { formData } = req.body

    // Send email to client (auto-reply)
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: 'Thank You for Contacting Summer Niche Adventures',
      html: getContactClientEmailTemplate(formData)
    }

    // Send email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'ellyman2021@gmail.com',
      subject: `New Contact Form Submission - ${formData.name}`,
      html: getContactAdminEmailTemplate(formData)
    }

    // Send both emails
    await transporter.sendMail(clientMailOptions)
    await transporter.sendMail(adminMailOptions)

    res.json({ success: true, message: 'Contact emails sent successfully' })
  } catch (error) {
    console.error('Error sending contact emails:', error)
    res.status(500).json({ success: false, message: 'Failed to send contact emails', error: error.message })
  }
})

// API endpoint to send quote request emails
app.post('/api/send-quote-request-email', async (req, res) => {
  try {
    const { formData, quoteReference } = req.body

    // Send email to client (auto-reply)
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: `Quote Request Received - ${quoteReference} - Summer Niche Adventures`,
      html: getQuoteClientEmailTemplate(formData, quoteReference)
    }

    // Send email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'ellyman2021@gmail.com',
      subject: `New Quote Request - ${quoteReference} - ${formData.firstName} ${formData.lastName}`,
      html: getQuoteAdminEmailTemplate(formData, quoteReference)
    }

    // Send both emails
    await transporter.sendMail(clientMailOptions)
    await transporter.sendMail(adminMailOptions)

    res.json({ success: true, message: 'Quote request emails sent successfully' })
  } catch (error) {
    console.error('Error sending quote request emails:', error)
    res.status(500).json({ success: false, message: 'Failed to send quote request emails', error: error.message })
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

// Serve React app for all other routes (commented out to fix error)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'))
// })

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`)
})
