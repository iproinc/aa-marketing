import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ siteTitle }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <header>
      <div className="relative w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto flex flex-row justify-between items-center py-8 px-4">
        <Link to="/" >
          <StaticImage src="../images/adtrics-logo-primary.svg" height={40} alt={siteTitle}/>
        </Link>
        <div className="hidden md:flex md:flex-row items-center gap-6">
          <Link to="/about">About</Link>
          <Link to="/pricing">Pricing</Link>
          <a className="px-4 py-2 text-sm rounded bg-gray-100" href="https://app.adtrics.com/user/sign_in">Sign In</a>
          <a className="px-4 py-2 text-sm rounded bg-san-marino-500 text-white" href="https://app.adtrics.com/user/sign_up">Sign Up</a>
        </div>
        <div className="md:hidden">
          {menuToggle === true ? 
            <button onClick={() => setMenuToggle(!menuToggle)}>
              <FontAwesomeIcon icon={["fas", "bars"]} className="text-3xl text-gray-700"/>
            </button>  
            :
            <button onClick={() => setMenuToggle(!menuToggle)}>
              <FontAwesomeIcon icon={["fas", "times"]} className="text-3xl text-gray-700"/>
            </button>
          }
        </div>
      </div>
      {menuToggle === true ?
        <div className="absolute h-screen w-full z-50 bg-white bg-opacity-95 backdrop-blur-sm p-6 shadow flex flex-col gap-6 text-xl">
          <Link className="px-4" to="/about">About</Link>
          <Link className="px-4" to="/pricing">Pricing</Link>
          <a className="px-4 py-2 text-lg rounded bg-gray-100" href="https://app.adtrics.com/user/sign_in">Sign In</a>
          <a className="px-4 py-2 text-lg rounded bg-san-marino-500 text-white" href="https://app.adtrics.com/user/sign_up">Sign Up</a>
        </div>
        :      
        null
      }
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
