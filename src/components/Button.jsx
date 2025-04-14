import { useState } from 'react'

export default function SimpleButton({ text, children }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button 
      className={`
        relative 
        overflow-hidden 
        px-6 py-2.5
        rounded-md 
        font-medium 
        text-white 
        bg-gradient-to-r 
        from-indigo-500 
        to-blue-500 
        ${isHovered ? 'from-indigo-600 to-blue-600 scale-[1.02] shadow-lg' : ''}
        transition-all 
        duration-300 
        transform 
        hover:scale-[1.02]
        shadow-md 
        hover:shadow-lg
        group
        ${children}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle background animation */}
      <div className={`
        absolute 
        inset-0 
        bg-white/10 
        opacity-0 
        group-hover:opacity-100 
        transition-opacity 
        duration-300
      `}></div>

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center gap-2 ">
        <span className="transition-transform duration-300 group-hover:translate-y-[-1px] text-center">
          {text}
        </span>
      </div>
    </button>
  )
}