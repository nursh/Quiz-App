import React from 'react';
import sprite from '../assets/sprite.svg';


export default function Header() {
  return (
    <div className="relative z-50 shadow-lg py-4 md:py-6 xl:py-8">
      <div className="flex justify-center items-center">
        <svg className="w-12 h-12 md:w-16 lg:w-20 xl:w-24 md:h-16 lg:h-20 xl:h-24">
          <use xlinkHref={`${sprite}#block`} />
        </svg>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ml-4 text-blue-900">Quizzimo</h1>
      </div>
    </div>
  )
}
