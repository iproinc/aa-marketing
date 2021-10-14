import React from 'react'

import ctabg from '../images/cta-bg.png'

function Cta() {
  return (
    <div className="w-full min-h-[400px] flex items-center justify-center bg-cover bg-bottom bg-blend-color-dodge" style={{ backgroundImage: `url(${ctabg}), linear-gradient(94.41deg, #DBE4F7 0%, #FFFFFF 100%)` }}>
      <div className="max-w-xl mx-auto flex flex-col items-center gap-6 text-center">
        <p className="text-4xl font-bold leading-tight">Your Personal Ad Analyst At Your Service</p>
        <a className="rounded bg-[#0083FC] font-semibold text-xl text-white px-4 py-2 inline-block mb-3 hover:shadow-lg transition-all ease-in-out" href="https://app.adtrics.com/user/sign_up">Start Your Free Trial Now</a>
        <p className="text-sm">7-Day Free Trial. No Credit Card Required. Cancel Anytime.</p>
      </div>
    </div>
  )
}

export default Cta
