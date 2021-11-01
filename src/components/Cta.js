import React from 'react'

import ctabg from '../images/cta-bg.png'

function Cta(props) {
  return (
    <div className="w-full lg:min-h-[400px] flex items-center justify-center bg-cover bg-center bg-blend-color-dodge p-8" style={{ backgroundImage: `url(${ctabg}), linear-gradient(94.41deg, #DBE4F7 0%, #FFFFFF 100%)` }}>
      <div className="max-w-xl lg:max-w-4xl mx-auto flex flex-col justify-center lg:items-center gap-4 lg:gap-6 text-center">
        <p className="text-xl lg:text-4xl font-bold leading-tight">{props.heading}</p>
        <a className="rounded bg-[#0083FC] font-semibold lg:text-xl text-white text-center px-4 py-2 block lg:inline-block mb-3 hover:shadow-lg transition-all ease-in-out" href="/">{props.button}</a>
        <p className="text-sm">{props.finePrint}</p>
      </div>
    </div>
  )
}

export default Cta
