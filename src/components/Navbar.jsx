import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesDropdown, setIsServicesDropdown] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services', hasDropdown: true },
    { path: '/contact', label: 'Contact' },
    { path: '/booking', label: 'Book Now', isButton: true },
    { path: '/quote-request', label: 'Request Quote', isButton: true }
  ]

  const serviceSubsections = [
    { 
      id: 'tours', 
      label: 'Tours', 
      icon: (
        <svg className="w-4 h-4 text-orange" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      )
    },
    { 
      id: 'safaris', 
      label: 'Safaris', 
      icon: (
        <svg className="w-4 h-4 text-orange" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    { 
      id: 'excursions', 
      label: 'Excursions', 
      icon: (
        <svg className="w-4 h-4 text-orange" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    { 
      id: 'transfers', 
      label: 'Transfers', 
      icon: (
        <svg className="w-4 h-4 text-orange" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        </svg>
      )
    }
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/images/summerlogo.jpeg"
                alt="Summer Niche Adventures Logo"
                className="h-10 w-auto object-contain bg-transparent rounded-none mix-blend-multiply"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.path} className="relative">
                  <button
                    onMouseEnter={() => setIsServicesDropdown(true)}
                    onMouseLeave={() => setIsServicesDropdown(false)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                      location.pathname === link.path
                        ? 'text-green border-b-2 border-green'
                        : 'text-darkGray hover:text-orange'
                    }`}
                  >
                    {link.label}
                    <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {isServicesDropdown && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200"
                      onMouseEnter={() => setIsServicesDropdown(true)}
                      onMouseLeave={() => setIsServicesDropdown(false)}
                    >
                      {serviceSubsections.map((subsection) => (
                        <Link
                          key={subsection.id}
                          to={`/services#${subsection.id}`}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange transition-colors flex items-center"
                          onClick={() => setIsServicesDropdown(false)}
                        >
                          <span className="mr-2">{subsection.icon}</span>
                          {subsection.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.isButton ? (
                <Link
                  key={link.path}
                  to={link.path}
                  className="bg-orange hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md text-sm transition-all transform hover:scale-105"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-green border-b-2 border-green'
                      : 'text-darkGray hover:text-orange'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-darkGray hover:text-orange hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-green bg-gray-50'
                        : 'text-darkGray hover:text-orange hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  <div className="pl-6 space-y-1">
                    {serviceSubsections.map((subsection) => (
                      <Link
                        key={subsection.id}
                        to={`/services#${subsection.id}`}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-orange hover:bg-gray-50 transition-colors flex items-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="mr-2">{subsection.icon}</span>
                        {subsection.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : link.isButton ? (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block mx-3 my-2 bg-orange hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md text-base text-center transition-all transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-green bg-gray-50'
                      : 'text-darkGray hover:text-orange hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
