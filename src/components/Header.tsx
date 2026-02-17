'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [shadowStyle, setShadowStyle] = useState('');
  const [padding, setPadding] = useState('');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = 250; // max scroll to fully apply shadow
    const intensity = Math.min(scrollY / maxScroll, 1);

    // Create a shadow with gradually increasing opacity and blur
    const blur = 10 * intensity;
    const opacity = 0.05 + 0.025 * intensity; // from 0.05 to 0.1 opacity
    const shadow = `0 0 ${blur}px rgba(0, 0, 0, ${opacity.toFixed(2)})`;

    // Gradually add padding
    const newPadding = `${intensity * 24}px`

    setShadowStyle(shadow);
    setPadding(newPadding);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  return (
    <header 
      className={`z-999 fixed top-8 left-8 right-8 flex flex-row justify-between items-center pt-[0.75rem] pb-[0.75rem] rounded-xl bg-white`}
      style={{ 
        boxShadow: shadowStyle,
        paddingLeft: padding,
        paddingRight: padding,
      }}
    >
      <button className='hover:cursor-pointer'>
        <a href='#' className='text-[1.5rem]'>
          <span className='bold'>Joel Lum</span>
        </a>
      </button>

      <nav>
        <ul className='list-style-none flex flex-row gap-[1.5rem] text-gray-400'>
          <li>
            <button className='px-2 py-1 hover:text-blue-700 hover:cursor-pointer transition-colors duration-300'>
              <a href='#about'>About Me</a>
            </button>
          </li>
          <li>
            <button className='px-2 py-1 hover:text-blue-700 hover:cursor-pointer transition-colors duration-300'>
              <a href='#projects'>Projects</a>
            </button>
          </li>
          <li>
            <button className='px-2 py-1 hover:text-blue-700 hover:cursor-pointer transition-colors duration-300'>
              <a href='#tech'>Tech Stack</a>
            </button>
          </li>
          <li>
            <button className='px-2 py-1 hover:text-blue-700 hover:cursor-pointer transition-colors duration-300'>
              <a href='#extra'>Extracurriculars</a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}