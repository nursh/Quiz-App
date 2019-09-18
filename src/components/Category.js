import React from 'react';

import { NavLink } from 'react-router-dom';
import sprite from '../assets/sprite.svg';


export default function Category({ category }) {
  return (
    <NavLink to={`/categories/${category.name}`} className="md:w-5/12 lg:w-3/10 bg-white hover:bg-gray-300 focus:bg-gray-300 mb-10 m-auto py-6 w-11/12 border-gray-400 border-2 hover:shadow-2xl focus:shadow-2xl outline-none">
      <svg className="m-auto h-24 w-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
        <use xlinkHref={`${sprite}#${category.icon}`} />
      </svg>
      <p className="mt-4 text-center font-semibold text-gray-700 text-2xl lg:text-2xl">{category.name}</p>  
    </NavLink>
  )
}
