import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AIChatbox = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [conversationContext, setConversationContext] = useState({
    userName: null,
    interests: [],
    budget: null,
    travelDates: null,
    groupSize: null,
    previousTopics: [],
    conversationStage: 'greeting'
  })
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(getGreetingMessage())
      }, 500)
    }
  }, [isOpen])

  const getGreetingMessage = () => {
    const greetings = [
      "Hello! 👋 I'm your personal safari assistant at Summer Niche Adventures. I'd love to help you plan your perfect African adventure. What brings you here today?",
      "Welcome! 🌍 I'm here to help you discover incredible safari experiences in Kenya. Are you looking for a specific type of adventure?",
      "Hi there! 🦁 I'm your AI travel companion. Whether you're dreaming of seeing the Big Five or exploring Kenya's stunning landscapes, I'm here to guide you. What's on your mind?",
      "Greetings! 🦒 Welcome to Summer Niche Adventures. I can help you find the perfect safari, tour, or excursion. Tell me - what kind of experience are you hoping for?"
    ]
    return greetings[Math.floor(Math.random() * greetings.length)]
  }

  const addUserMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      type: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    setMessages(prev => [...prev, newMessage])
  }

  const addBotMessage = (text, options = [], whatsappLink = null) => {
    const newMessage = {
      id: Date.now(),
      type: 'bot',
      text: text,
      options: options,
      whatsappLink: whatsappLink,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    setMessages(prev => [...prev, newMessage])
  }

  const processUserMessage = async (userText) => {
    const text = userText.toLowerCase()
    let response = ''
    let options = []

    // Extract information from user message
    extractUserInfo(userText)

    // Conversation flow based on context
    switch (conversationContext.conversationStage) {
      case 'greeting':
        if (text.includes('safari') || text.includes('tour') || text.includes('trip') || text.includes('adventure')) {
          response = getEnthusiasticResponse(userText)
          setConversationContext(prev => ({ ...prev, conversationStage: 'interest_exploration' }))
          options = ['Wildlife Safari', 'Cultural Tours', 'Beach Excursions', 'Tell me more about all options']
        } else if (text.includes('help') || text.includes('information') || text.includes('what')) {
          response = "I'd be happy to help! We offer a variety of experiences including wildlife safaris to see the Big Five, cultural tours exploring Kenya's heritage, beach excursions along the coast, and private transfers. What type of adventure interests you most?"
          setConversationContext(prev => ({ ...prev, conversationStage: 'interest_exploration' }))
          options = ['Wildlife Safaris', 'Cultural Tours', 'Beach Excursions', 'All Services']
        } else {
          response = "That's wonderful! To give you the best recommendations, could you tell me what type of experience you're looking for? For example, are you interested in wildlife safaris, cultural tours, or perhaps beach excursions?"
          setConversationContext(prev => ({ ...prev, conversationStage: 'interest_exploration' }))
        }
        break

      case 'interest_exploration':
        if (text.includes('wildlife') || text.includes('safari') || text.includes('animals')) {
          response = getWildlifeResponse()
          setConversationContext(prev => ({ 
            ...prev, 
            interests: [...prev.interests, 'wildlife'],
            conversationStage: 'preference_deepening' 
          }))
          options = ['Big Five Safari', 'Bird Watching', 'Photography Safari', 'Custom Experience']
        } else if (text.includes('culture') || text.includes('heritage') || text.includes('history')) {
          response = getCulturalResponse()
          setConversationContext(prev => ({ 
            ...prev, 
            interests: [...prev.interests, 'culture'],
            conversationStage: 'preference_deepening' 
          }))
          options = ['Historical Sites', 'Local Communities', 'Traditional Experiences', 'Mix with Wildlife']
        } else if (text.includes('beach') || text.includes('coast') || text.includes('marine')) {
          response = getBeachResponse()
          setConversationContext(prev => ({ 
            ...prev, 
            interests: [...prev.interests, 'beach'],
            conversationStage: 'preference_deepening' 
          }))
          options = ['Marine Parks', 'Beach Tours', 'Water Activities', 'Combine with Safari']
        } else if (text.includes('all') || text.includes('everything') || text.includes('mix')) {
          response = "Perfect! Kenya offers incredible diversity. You could experience wildlife safaris in national parks like Maasai Mara, explore cultural sites in Mombasa's Old Town, and enjoy beautiful beaches along the coast. Many of our guests love combining these experiences. What sounds most appealing to start with?"
          setConversationContext(prev => ({ 
            ...prev, 
            interests: ['wildlife', 'culture', 'beach'],
            conversationStage: 'preference_deepening' 
          }))
          options = ['Start with Wildlife', 'Start with Culture', 'Start with Beach', 'Custom Combination']
        } else {
          response = "I'd love to learn more about your preferences. Are you drawn to wildlife encounters, cultural experiences, or perhaps coastal adventures? Or maybe you'd like to combine different types of experiences?"
          options = ['Wildlife Focus', 'Culture Focus', 'Beach Focus', 'Combination']
        }
        break

      case 'preference_deepening':
        if (text.includes('big five') || text.includes('lions') || text.includes('elephants')) {
          response = getBigFiveResponse()
          setConversationContext(prev => ({ 
            ...prev, 
            interests: [...prev.interests, 'big five'],
            conversationStage: 'logistics_inquiry' 
          }))
          options = ['Maasai Mara', 'Tsavo Parks', 'Amboseli', 'Multiple Parks']
        } else if (text.includes('bird') || text.includes('photography')) {
          response = getBirdingResponse()
          setConversationContext(prev => ({ 
            ...prev, 
            interests: [...prev.interests, 'birding'],
            conversationStage: 'logistics_inquiry' 
          }))
          options = ['Lake Nakuru', 'Lake Naivasha', 'Multi-park Tour', 'Custom Birding']
        } else if (text.includes('custom') || text.includes('flexible')) {
          response = "Excellent choice! Our private safaris offer complete flexibility. We can customize everything from the parks you visit to the pace of your journey, accommodation style, and even specific wildlife you hope to see. How many days are you thinking for your adventure?"
          setConversationContext(prev => ({ ...prev, conversationStage: 'duration_inquiry' }))
          options = ['2-3 Days', '4-5 Days', '6-7 Days', 'Not sure yet']
        } else {
          response = "Great choice! To help me recommend the perfect itinerary, could you tell me how many days you're planning to spend with us? This will help me suggest the best combination of destinations and experiences."
          setConversationContext(prev => ({ ...prev, conversationStage: 'duration_inquiry' }))
          options = ['2-3 Days', '4-5 Days', '6-7 Days', 'Longer trip']
        }
        break

      case 'duration_inquiry':
        const duration = extractDuration(userText)
        if (duration) {
          setConversationContext(prev => ({ ...prev, duration: duration }))
          response = getDurationBasedResponse(duration)
          setConversationContext(prev => ({ ...prev, conversationStage: 'group_inquiry' }))
          options = ['Solo Traveler', 'Couple', 'Family with Kids', 'Group of Friends']
        } else {
          response = "That's helpful context. Whether it's a quick getaway or an extended adventure, we have options for you. Are you traveling solo, as a couple, with family, or in a group?"
          setConversationContext(prev => ({ ...prev, conversationStage: 'group_inquiry' }))
          options = ['Solo', 'Couple', 'Family', 'Group']
        }
        break

      case 'group_inquiry':
        const groupSize = extractGroupSize(userText)
        if (groupSize) {
          setConversationContext(prev => ({ ...prev, groupSize: groupSize }))
        }
        response = getGroupSizeResponse()
        setConversationContext(prev => ({ ...prev, conversationStage: 'budget_inquiry' }))
        options = ['Budget-Conscious', 'Mid-Range', 'Luxury Experience', 'Flexible on Budget']
        break

      case 'budget_inquiry':
        const budget = extractBudget(userText)
        if (budget) {
          setConversationContext(prev => ({ ...prev, budget: budget }))
        }
        response = getBudgetResponse()
        setConversationContext(prev => ({ ...prev, conversationStage: 'recommendation' }))
        options = ['Show Me Recommendations', 'Learn More About Services', 'Talk to Human Agent', 'Continue Chatting']
        break

      case 'recommendation':
        if (text.includes('recommend') || text.includes('show') || text.includes('option')) {
          response = getPersonalizedRecommendation()
          options = ['Book This Trip', 'Modify Preferences', 'See Other Options', 'Contact for Custom Quote']
        } else if (text.includes('human') || text.includes('agent') || text.includes('person')) {
          response = {
            text: "📱 **Talk to a Human Agent Directly**\n\n📞 **Phone/WhatsApp**: +254 716 561 523",
            whatsappLink: "https://wa.me/254716561523",
            followUp: "Our team is available to help you with personalized planning, custom quotes, and any questions you may have. Would you like me to take you to our contact page as well?"
          }
          options = ['Yes, take me to contact', 'Continue with AI chat', 'Start booking process']
        } else if (text.includes('modify') || text.includes('change') || text.includes('different')) {
          response = "No problem! Let's adjust your preferences. What would you like to change - the duration, group size, budget, or perhaps the type of experience?"
          setConversationContext(prev => ({ ...prev, conversationStage: 'preference_deepening' }))
          options = ['Change Duration', 'Change Group Size', 'Change Budget', 'Change Experience Type']
        } else {
          response = "I'm here to help! Would you like to see personalized recommendations based on our conversation, learn more about specific services, or perhaps connect with a human agent for more detailed planning?"
          options = ['Show Recommendations', 'Learn About Services', 'Connect with Human', 'Ask Something Else']
        }
        break

      default:
        response = getGeneralResponse(userText)
        options = ['Tell me about safaris', 'Pricing information', 'Contact support', 'Start over']
    }

    setIsTyping(true)
    const typingDelay = Math.random() * 1000 + 1500 // 1.5-2.5 seconds
    await new Promise(resolve => setTimeout(resolve, typingDelay))
    setIsTyping(false)
    
    // Handle response as object (for WhatsApp link) or string
    if (typeof response === 'object' && response.whatsappLink) {
      addBotMessage(response.text + '\n\n' + response.followUp, options, response.whatsappLink)
    } else {
      addBotMessage(response, options)
    }
  }

  const extractUserInfo = (text) => {
    const lowerText = text.toLowerCase()
    
    // Extract name if mentioned
    const nameMatch = text.match(/(?:my name is|i'm|i am|call me)\s+([a-zA-Z]+)/i)
    if (nameMatch && !conversationContext.userName) {
      setConversationContext(prev => ({ ...prev, userName: nameMatch[1] }))
    }

    // Extract budget if mentioned
    if (lowerText.includes('$') || lowerText.includes('budget') || lowerText.includes('price')) {
      const budgetMatch = text.match(/\$?\s*(\d+)/)
      if (budgetMatch) {
        setConversationContext(prev => ({ ...prev, budget: budgetMatch[1] }))
      }
    }
  }

  const extractDuration = (text) => {
    const lowerText = text.toLowerCase()
    if (lowerText.includes('2') || lowerText.includes('two') || lowerText.includes('short')) return '2-3'
    if (lowerText.includes('3') || lowerText.includes('three')) return '3-4'
    if (lowerText.includes('4') || lowerText.includes('four') || lowerText.includes('medium')) return '4-5'
    if (lowerText.includes('5') || lowerText.includes('five')) return '5-6'
    if (lowerText.includes('6') || lowerText.includes('six') || lowerText.includes('week')) return '6-7'
    if (lowerText.includes('7') || lowerText.includes('seven') || lowerText.includes('long')) return '7+'
    return null
  }

  const extractGroupSize = (text) => {
    const lowerText = text.toLowerCase()
    if (lowerText.includes('solo') || lowerText.includes('alone') || lowerText.includes('1')) return 1
    if (lowerText.includes('couple') || lowerText.includes('partner') || lowerText.includes('2')) return 2
    if (lowerText.includes('family') || lowerText.includes('kids') || lowerText.includes('children')) return 'family'
    if (lowerText.includes('group') || lowerText.includes('friends') || lowerText.includes('team')) return 'group'
    return null
  }

  const extractBudget = (text) => {
    const lowerText = text.toLowerCase()
    if (lowerText.includes('budget') || lowerText.includes('affordable') || lowerText.includes('cheap')) return 'budget'
    if (lowerText.includes('mid') || lowerText.includes('moderate') || lowerText.includes('reasonable')) return 'mid'
    if (lowerText.includes('luxury') || lowerText.includes('premium') || lowerText.includes('high-end')) return 'luxury'
    return null
  }

  const getEnthusiasticResponse = (userText) => {
    const responses = [
      "That's fantastic! Kenya offers some of the most incredible safari experiences in the world. From the vast savannas of Maasai Mara to the red elephants of Tsavo, there's something magical waiting for you. What specifically draws you to a safari experience?",
      "Wonderful! A safari is truly a life-changing experience. Imagine waking up to the sounds of wildlife, seeing lions in their natural habitat, and witnessing landscapes that take your breath away. What kind of wildlife encounters are you most excited about?",
      "Excellent choice! Our safaris offer intimate wildlife experiences with professional guides who know exactly where to find the most incredible sightings. Are you hoping to see the Big Five, or do you have other wildlife interests?"
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const getWildlifeResponse = () => {
    return "Kenya is world-renowned for its wildlife! You could witness the Great Migration in Maasai Mara, see the last northern white rhinos at Ol Pejeta, or spot the famous red elephants of Tsavo. Our private safaris give you the best chance for incredible wildlife encounters. What type of wildlife experience appeals to you most?"
  }

  const getCulturalResponse = () => {
    return "Kenya's rich cultural heritage is fascinating! You could explore the ancient Swahili architecture in Mombasa's Old Town, visit traditional Maasai communities, or learn about the country's colonial history. Our cultural tours offer authentic experiences with local guides. Which aspect of Kenyan culture interests you?"
  }

  const getBeachResponse = () => {
    return "The Kenyan coast is stunning! From the pristine beaches of Diani to the marine parks of Wasini Island, there's incredible beauty to discover. You could swim with dolphins, explore coral reefs, or simply relax on beautiful white sand beaches. Would you prefer marine adventures or beach relaxation?"
  }

  const getBigFiveResponse = () => {
    return "The Big Five - lions, leopards, elephants, rhinos, and buffalo - are the crown jewels of African safaris! Maasai Mara offers some of the best Big Five viewing, especially during the migration season. Tsavo is famous for its red elephants, while Ol Pejeta has the last northern white rhinos. Which park sounds most appealing to you?"
  }

  const getBirdingResponse = () => {
    return "Kenya is a bird watcher's paradise with over 1,000 species! Lake Nakuru is famous for its flamingos, Lake Naivasha offers incredible water bird diversity, and different parks host unique species. Our guides are expert birders who can help you spot both common and rare species. Would you like to focus on specific bird species or general birding?"
  }

  const getDurationBasedResponse = (duration) => {
    const responses = {
      '2-3': "Perfect for a quick safari adventure! In 2-3 days, you could experience Tsavo East or West, visit Ol Pejeta Conservancy, or enjoy a Maasai Mara highlight tour. These shorter trips are great for seeing incredible wildlife without needing extensive time. What's your preferred departure point - Nairobi or the coast?",
      '3-4': "An excellent duration! This gives you time to really immerse yourself. You could combine Tsavo East and West, do a comprehensive Maasai Mara experience, or explore multiple destinations. This timeframe allows for both morning and afternoon game drives for maximum wildlife sightings.",
      '4-5': "Wonderful! This opens up fantastic possibilities. You could experience the complete Maasai Mara with migration viewing, combine Samburu and Lake Nakuru for diverse ecosystems, or do a grand Tsavo experience. This duration also allows for cultural experiences alongside wildlife.",
      '5-6': "This is a fantastic length for a truly immersive experience! You could combine multiple parks like Lake Nakuru, Naivasha, and Maasai Mara, or do an extensive northern circuit including Samburu. This gives you time to really connect with the land and its wildlife.",
      '7+': "An extended adventure - how exciting! This allows for the ultimate Kenyan experience. You could combine coast and safari, visit multiple diverse ecosystems, or really immerse yourself in one region. We can create a completely customized journey that matches your dreams."
    }
    return responses[duration] || responses['3-4']
  }

  const getGroupSizeResponse = () => {
    const userName = conversationContext.userName || 'there'
    return `Thanks for sharing that, ${userName}! Knowing your group helps me recommend the perfect experience. Whether you're traveling solo, as a couple, with family, or in a group, we have options that work beautifully. What's your budget range for this adventure? This helps me suggest the best accommodation and experience level.`
  }

  const getBudgetResponse = () => {
    return "Understanding your budget helps me recommend the perfect experience! We offer options from budget-friendly shared safaris to luxury private experiences with premium accommodations. All our experiences include professional guides and authentic wildlife encounters. Based on our conversation, I can now provide personalized recommendations. Would you like to see them?"
  }

  const getPersonalizedRecommendation = () => {
    const interests = conversationContext.interests
    const duration = conversationContext.duration || '3-4'
    const groupSize = conversationContext.groupSize || 'couple'
    
    let recommendation = "Based on our conversation, here's my personalized recommendation for you:\n\n"
    
    if (interests.includes('wildlife') || interests.includes('big five')) {
      recommendation += "🦁 **Wildlife Focus**: I'd recommend starting with Maasai Mara for incredible Big Five viewing. The private safari experience gives you flexibility and the best wildlife encounters.\n\n"
    }
    
    if (interests.includes('culture')) {
      recommendation += "🏛️ **Cultural Addition**: Consider adding a Mombasa City Tour to explore Swahili heritage and historical sites like Fort Jesus.\n\n"
    }
    
    if (interests.includes('beach')) {
      recommendation += "🏖️ **Beach Experience**: The Kisite-Mpunguti Marine Park tour offers amazing dolphin watching and snorkeling.\n\n"
    }
    
    recommendation += `For a ${duration}-day trip with your ${groupSize}, I'd suggest our private safari options which offer the best value and experience. All include professional guides, comfortable accommodations, and authentic wildlife encounters.\n\n`
    recommendation += "Would you like to proceed with booking, or would you prefer to modify any of these preferences?"
    
    return recommendation
  }

  const getAllPrices = () => {
    return `Here's our complete pricing guide:\n\n🦁 TOURS\n• Tsavo East & Tsavo West Private Safari: From $650 (3 Days / 2 Nights)\n• Maasai Mara Safari: From $500 (3 Days / 2 Nights)\n• Lake Naivasha, Hell's Gate & Geothermal Spa: From $500 (3 Days / 2 Nights)\n• Tsavo West National Park from Mombasa: From $450 (2 Days / 1 Night)\n• Tsavo East National Park & Salt Lick Safari Lodge: From $550 (3 Days / 2 Nights)\n• Samburu National Reserve & Lake Nakuru: From $1200 (4 Days / 3 Nights)\n• Tsavo East National Park from Mombasa/Diani/Kilifi: From $450 (2 Days / 1 Night)\n• Ol Pejeta Conservancy - Sweetwaters Serena Camp: From $580 (2 Days / 1 Night)\n\n🦁 **SAFARIS**\n• Tsavo East & Tsavo West Private Safari: From $650 (3 Days / 2 Nights)\n• Maasai Mara Safari: From $500 (3 Days)\n• Lake Naivasha, Hell's Gate & Geothermal Spa: From $500 (3 Days / 2 Nights)\n• Amboseli Safari from Mombasa/Diani/Kilifi: From $510 (2 Days / 1 Night)\n• Lake Nakuru, Lake Naivasha and Masai Mara: From $1400 (5 Days 4 Nights)\n• Taita Hills Wildlife Sanctuary from Mombasa: From $350 (2 Days / 1 Night)\n• Masai Mara National Reserve from Nairobi: From $1300 (4 Days / 3 Nights)\n\n🏝️ **EXCURSIONS**\n• Mombasa City Tour – Full Day: From $150 (Full Day)\n• Kisite-Mpunguti Marine National Park: From $200 (Full Day)\n• Nairobi National Park – Full-Day: From $180 (Full Day)\n\n🚗 **TRANSFERS**\n• Airport Transfer: From $50 (1-2 Hours)\n• Hotel Transfer Service: From $40 (Variable)\n• SGR Standard Gauge Railway: From $200 (Custom)\n\nAll prices include professional guides, authentic experiences, and are per person unless specified. Would you like more details about any specific package?`
  }

  const getGeneralResponse = (userText) => {
    const text = userText.toLowerCase()
    
    if (text.includes('price') || text.includes('cost') || text.includes('how much') || text.includes('pricing') || text.includes('rates')) {
      return getAllPrices()
    }
    
    if (text.includes('book') || text.includes('reserve') || text.includes('reservation')) {
      return "I'd be happy to help you start the booking process! You can use our online booking form, or if you prefer personal assistance, I can connect you with our team. The booking form collects your preferences and our team will follow up with confirmation and payment details. Would you like me to guide you to the booking page?"
    }
    
    if (text.includes('contact') || text.includes('phone') || text.includes('email') || text.includes('reach') || text.includes('human') || text.includes('agent') || text.includes('person') || text.includes('speak') || text.includes('talk')) {
      return {
        text: "📱 **Talk to a Human Agent Directly**\n\n📞 **Phone/WhatsApp**: +254 716 561 523",
        whatsappLink: "https://wa.me/254716561523",
        followUp: "Our team is available to help you with personalized planning, custom quotes, and any questions you may have. You can also use our contact page for general inquiries. Would you like me to take you to the contact page?"
      }
    }
    
    if (text.includes('best time') || text.includes('when') || text.includes('season')) {
      return "Kenya is great year-round, but different seasons offer different experiences! The Great Migration in Maasai Mara happens July-October. Dry seasons (Jan-Mar, Jun-Oct) offer better wildlife viewing. Wet seasons (Apr-May, Nov-Dec) are lush with fewer crowds and great birding. When are you planning to travel?"
    }
    
    if (text.includes('safe') || text.includes('safety') || text.includes('dangerous')) {
      return "Safety is our top priority! Kenya's tourism areas are very safe, and we work with experienced guides who know the best practices. Our vehicles are well-maintained, and we monitor all conditions. We've been operating safely for years and have excellent safety records. Do you have any specific safety concerns?"
    }
    
    return "I'm here to help with anything about your Kenyan adventure! Whether you have questions about specific destinations, wildlife, logistics, pricing, or anything else, feel free to ask. What would you like to know more about?"
  }

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    addUserMessage(inputValue)
    const userMessage = inputValue
    setInputValue('')
    
    await processUserMessage(userMessage)
  }

  const handleOptionClick = async (option) => {
    addUserMessage(option)
    
    // Check if user wants to start booking process
    if (option.toLowerCase().includes('start booking') || option.toLowerCase().includes('booking process')) {
      addBotMessage("Great choice! I'll take you to our booking form where you can provide all the details for your adventure. 🎯")
      setTimeout(() => {
        navigate('/booking')
      }, 1500)
    } else {
      await processUserMessage(option)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(e)
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-orange hover:bg-orange-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center animate-float"
        style={{ minWidth: '60px', minHeight: '60px' }}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col" style={{ height: '600px', maxHeight: '80vh' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-orange to-green p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🦁</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Safari Assistant</h3>
                  <p className="text-sm opacity-90 flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    message.type === 'user'
                      ? 'bg-orange text-white rounded-br-sm'
                      : 'bg-white text-gray-800 rounded-bl-sm shadow-md'
                  }`}
                >
                  {message.type === 'bot' && (
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">🦁</span>
                      <span className="text-xs text-gray-500">{message.timestamp}</span>
                    </div>
                  )}
                  <p className="whitespace-pre-wrap">{message.text}</p>
                  {message.type === 'user' && (
                    <span className="text-xs text-white/70 mt-1 block">{message.timestamp}</span>
                  )}
                  
                  {/* WhatsApp Link Button */}
                  {message.whatsappLink && (
                    <a
                      href={message.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Chat on WhatsApp
                    </a>
                  )}
                  
                  {/* Quick Reply Options */}
                  {message.options && message.options.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(option)}
                          className="w-full text-left px-4 py-2 bg-orange/10 hover:bg-orange/20 text-orange rounded-lg transition-colors text-sm font-medium border border-orange/30"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-sm p-4 shadow-md">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🦁</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent resize-none"
                rows={1}
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="bg-orange hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-3 rounded-full transition-colors flex items-center justify-center"
                style={{ minWidth: '48px', minHeight: '48px' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by Owiti TechAfrica Solutions • Your conversation helps us provide better service
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default AIChatbox
