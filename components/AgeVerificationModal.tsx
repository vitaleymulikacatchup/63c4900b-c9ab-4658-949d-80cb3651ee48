'use client'

import { useState, useEffect } from 'react'

export default function AgeVerificationModal() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show modal after component mounts (simulating age verification)
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleConfirm = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 max-w-md w-full text-white text-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full"></div>
        </div>
        
        <div className="relative z-10">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
            <div className="w-8 h-8 bg-white/40 rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold">🎭</span>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Підтвердження віку</h2>
          
          <p className="text-white/90 mb-6 leading-relaxed">
            Продовжуючи користуватися MEGOGO, ви підтверджуєте, що вам виповнилося 21 рік, та погоджуєтеся із Угодою користувача та Політикою конфіденційності
          </p>
          
          <button
            onClick={handleConfirm}
            className="w-full bg-white text-purple-700 font-semibold py-4 px-6 rounded-xl hover:bg-white/90 transition-colors duration-200"
          >
            Підтверджую
          </button>
        </div>
      </div>
    </div>
  )
}