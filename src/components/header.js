import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ siteTitle }) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [menuBGTrigger, setMenuBGTrigger] = useState(90);
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const { width } = useWindowDimensions();

  const onScroll = (e) => {
    setScrollTop(e.target.documentElement.scrollTop)
    setScrolling(e.target.documentElement.scrollTop > scrollTop)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  })

  useEffect(() => {
    if( width > 786 ) {
      setMenuBGTrigger(90)
    } else {
      setMenuBGTrigger(50)
    }
  }, [width])

  return (
    <header className={`sticky w-full top-0 z-50 ${scrollTop > menuBGTrigger || scrollTop > 90 ? "bg-mariner-50 backdrop-filter backdrop-blur-lg border-gray-100" : "bg-transparent"} transition-all ease-in-out duration-500 bg-opacity-90 border-b border-gray-transparent`}>
      <div className="relative w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto flex flex-row justify-between items-center py-4 lg:py-8 px-4">
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
          {menuToggle === false ? 
            <button onClick={() => setMenuToggle(!menuToggle)}>
              <FontAwesomeIcon icon={["fas", "bars"]} className="text-xl lg:text-3xl text-gray-700"/>
            </button>  
            :
            <button onClick={() => setMenuToggle(!menuToggle)}>
              <FontAwesomeIcon icon={["fas", "times"]} className="text-xl lg:text-3xl text-gray-700"/>
            </button>
          }
        </div>
      </div>
      {menuToggle === true ?
        <div className="absolute h-screen w-full z-50 bg-white backdrop-blur-sm p-6 shadow flex flex-col gap-6">
          <Link className="px-4" to="/about">About</Link>
          <Link className="px-4" to="/pricing">Pricing</Link>
          <a className="px-4 py-2 rounded bg-gray-100" href="https://app.adtrics.com/user/sign_in">Sign In</a>
          <a className="px-4 py-2 rounded bg-san-marino-500 text-white" href="https://app.adtrics.com/user/sign_up">Sign Up</a>
        </div>
        :      
        null
      }
    </header>
  )
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
