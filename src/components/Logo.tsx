import { useState } from 'react';

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-24 h-24 md:w-32 md:h-32"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-full h-full gradient-green-gold rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 ${isHovered ? 'animate-shake' : ''}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-16 h-16 md:w-20 md:h-20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 10L70 30L50 50L30 30L50 10Z"
            fill="white"
            opacity="0.9"
            className="animate-pulse"
          />
          
          <path
            d="M30 40L50 60L70 40"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
          
          <circle
            cx="50"
            cy="75"
            r="8"
            fill="white"
            opacity="0.9"
          />
          
          <path
            d="M25 75L75 75"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.7"
          />
          
          <path
            d="M20 85L35 70M65 70L80 85"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
        
        <div className="absolute inset-0 rounded-2xl bg-white opacity-0 hover:opacity-10 transition-opacity" />
      </div>
      
      <div className={`absolute -inset-1 gradient-green-gold rounded-2xl blur-lg opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-50 animate-pulse' : ''}`} style={{ zIndex: -1 }} />
    </div>
  );
};

export default Logo;
