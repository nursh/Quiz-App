import React from 'react';
import sprite from '../assets/sprite.svg';


export default function Category({ category }) {
  return (
    <div>
      <svg>
        <use xlinkHref={`${sprite}#${category.icon}`} />
      </svg>
      <p className="text-center">{category.name}</p>  
    </div>
  )
}
