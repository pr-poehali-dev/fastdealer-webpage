import { useState, useRef } from 'react';

const Logo = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const logoRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!logoRef.current) return;
    
    const rect = logoRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const distanceX = mouseX - centerX;
    const distanceY = mouseY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    const threshold = 150;
    
    if (distance < threshold) {
      const force = (threshold - distance) / threshold;
      const moveX = -(distanceX / distance) * force * 30;
      const moveY = -(distanceY / distance) * force * 30;
      setPosition({ x: moveX, y: moveY });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={logoRef}
      className="relative w-32 h-32 md:w-40 md:h-40"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="w-full h-full gradient-green-gold rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-200 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-20 h-20 md:w-24 md:h-24"
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
      
      <div 
        className="absolute -inset-1 gradient-green-gold rounded-2xl blur-lg opacity-30 transition-all duration-200"
        style={{ 
          zIndex: -1,
          transform: `translate(${position.x}px, ${position.y}px)`
        }} 
      />
    </div>
  );
};

export default Logo;