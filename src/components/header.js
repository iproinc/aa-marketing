import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ siteTitle }) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [menuTriggerPoint, setMenuTriggerPoint] = useState(90);
  const scrollY = useScrollY();
  const windowSize = useWindowSize();

  useEffect(() => {
    if( windowSize.width > 786 ) {
      setMenuTriggerPoint(90)
    } else {
      setMenuTriggerPoint(50)
    }
  }, [windowSize.width])
  
  return (
    <header className={`sticky w-full top-0 z-50 ${scrollY > menuTriggerPoint ? "bg-mariner-50 backdrop-filter backdrop-blur-lg" : "bg-transparent"} transition-all ease-in-out duration-500 bg-opacity-90`}>
      <div className="relative w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto flex flex-row justify-between items-center py-4 lg:py-6 px-4">
        <Link to="/" >
          <StaticImage src="../images/adtrics-logo-primary.svg" height={40} alt={siteTitle} placeholder="none" />
        </Link>
        <div className="hidden md:flex md:flex-row items-center gap-6">
          <Link to="/about">About</Link>
          <Link to="/pricing">Pricing</Link>
          <a className="px-4 py-2 text-sm rounded bg-gray-100" href="https://app.adtrics.com/user/sign_in">Sign In</a>
          <a className="px-4 py-2 text-sm rounded bg-san-marino-500 text-white" href="https://app.adtrics.com/user/sign_up">Sign Up</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuToggle(!menuToggle)}>
            <FontAwesomeIcon icon={["fas", `${menuToggle ? "times" : "bars"}`]} className="text-xl lg:text-3xl text-gray-700"/>
          </button>
        </div>
      </div>
      {JSON.parse(menuToggle) === true ?
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

// Hooks
function useScrollY() {
  const [value, setScrollY] = useState(
    undefined
  );
  useEffect(() => {
    // set function to set state
    function handleScroll() {
      setScrollY(window.scrollY)
    }
    // add event listener for state 
    window.addEventListener('scroll', handleScroll)
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return value
}


function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
