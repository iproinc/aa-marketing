import React from 'react'

import ctabg from '../images/cta-bg.png'

function Cta(props) {
  return (
    <div className="w-full flex items-center justify-center bg-cover bg-center bg-blend-color-dodge p-8 py-16" style={{ backgroundImage: `url(${ctabg}), linear-gradient(94.41deg, #DBE4F7 0%, #FFFFFF 100%)` }}>
      <div className="max-w-xl lg:max-w-5xl mx-auto flex flex-col justify-center lg:items-center text-center">
        <p className="text-xl lg:text-2xl font-semibold leading-tight text-gray-700 mb-4">{props.subHeading}</p>
        <p className="text-xl lg:text-4xl font-bold leading-tight mb-8">{props.heading}</p>
        <a className="rounded bg-mariner-500 font-semibold lg:text-xl text-white text-center px-8 py-2 block lg:inline-block mb-3 hover:shadow-lg transition-all ease-in-out" href={`${props.link}`}>{props.button}</a>
        <p className="underline decoration-mariner-500 font-semibold">{props.finePrint}</p>
      </div>
    </div>
  )
}

export default Cta
