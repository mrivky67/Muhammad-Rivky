
import React, { useState } from 'react';
import PixelButton from './PixelButton';
import { Gamepad } from 'lucide-react';

const PixelNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-retro-black border-b-4 border-retro-darkblue z-50 px-4 py-2">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Gamepad className="w-6 h-6 text-retro-yellow mr-2" />
          <span className="font-pixel text-sm sm:text-base text-retro-yellow">MUHAMMAD RIVKY</span>
        </div>
        
        <div className="hidden md:flex space-x-4">
          {['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)}
              className="font-pixel-secondary uppercase text-sm hover:text-retro-yellow transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
        
        <div className="md:hidden">
          <PixelButton 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="!px-2 !py-1 text-xs"
          >
            MENU
          </PixelButton>
          
          {isMenuOpen && (
            <div className="absolute top-full right-0 w-48 mt-2 bg-retro-black border-4 border-retro-darkblue z-50 pixel-borders">
              {['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="font-pixel-secondary w-full text-left block px-4 py-2 hover:bg-retro-darkblue transition-colors uppercase"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default PixelNavbar;
