'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [shadowStyle, setShadowStyle] = useState('');
  const [padding, setPadding] = useState('');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = 50; // max scroll to fully apply shadow
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
      className={`fixed top-10 left-8 right-8 flex flex-row justify-between items-center pt-[0.75rem] pb-[0.75rem] rounded-xl`}
      style={{ 
        boxShadow: shadowStyle,
        paddingLeft: padding,
        paddingRight: padding,
      }}
    >
      <a href="#title" className="text-[1.5rem]">
        <span className="bold">JOEL LUM</span>
      </a>

      <nav>
        <ul className="list-style-none flex flex-row gap-[1.5rem] text-gray-400">
          <li className='hover:text-blue-600'><a href="#about">About Me</a></li>
          <li className='hover:text-blue-600'><a href="#projects">Projects</a></li>
          <li className='hover:text-blue-600'><a href="#tech">Tech Stack</a></li>
          <li className='hover:text-blue-600'><a href="#extra">Extracurriculars</a></li>
        </ul>
      </nav>
    </header>
  );
}