'use client'

import { useState } from 'react'
import { Menu, X, Search, User } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    'ТЕЛЕКАНАЛИ',
    'ФІЛЬМИ',
    'МУЛЬТФІЛЬМИ',
    'СЕРІАЛИ',
    'ШОУ',
    'СПОРТ',
    'ОСВІТА'
  ]

  return (
    <header className="bg-background-dark text-white relative z-50">
      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold tracking-wider">
              MEGOGO
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium hover:text-accent-orange transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-2 px-4 py-2 border border-secondary-600 rounded-lg hover:border-accent-orange transition-colors duration-200">
              <span className="text-sm">Тарифи</span>
            </button>
            
            <button className="p-2 hover:bg-secondary-800 rounded-lg transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-2 text-sm">
              <span>UA</span>
            </div>
            
            <button className="text-sm hover:text-accent-orange transition-colors duration-200">
              УВІЙТИ
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-secondary-800 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background-dark border-t border-secondary-700">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium hover:text-accent-orange transition-colors duration-200 py-2"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-secondary-700">
                <button className="w-full text-left px-4 py-2 border border-secondary-600 rounded-lg hover:border-accent-orange transition-colors duration-200">
                  Тарифи
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}