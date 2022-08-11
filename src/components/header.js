import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../images/adtrics-logo-primary.svg'

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
    <header className={`sticky w-full top-0 z-50  ${scrollY > menuTriggerPoint ? "bg-white backdrop-filter backdrop-blur-md shadow" : "bg-transparent" } transition-all ease-in-out duration-700 bg-opacity-90 text-san-marino-900`}>
      <div className="py-[15px] px-[10px]">
        <div className="relative w-full mx-auto flex flex-row justify-between items-center px-3">
          <Link to="/" className="py-[5px]">
            <img src={logo} className="w-[100px]" alt={siteTitle} />
          </Link>
          <div className="hidden md:flex md:flex-row text-sm items-center gap-6">
            <Link to="/about">About</Link>
            <Link to="/pricing">Pricing</Link>
            <a href="https://app.adtrics.com/user/sign_in">Sign In</a>
            <a className="py-[6px] px-3 h-[35px] rounded bg-mariner-500 text-white flex justify-center items-center" role="button" href="https://app.adtrics.com/product_sets/new">Go To App</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuToggle(!menuToggle)} className="w-6 h-6">
              <FontAwesomeIcon icon={["fas", `${menuToggle ? "times" : "bars"}`]} className="text-2xl lg:text-3xl text-gray-700 w-full h-full"/>
            </button>
          </div>
        </div>
      </div>
      {JSON.parse(menuToggle) === true ?
        <div className="absolute w-full z-40 px-6 pb-8 pt-16 flex flex-col justify-between gap-y-8 rounded-b-2xl border-t border-gray-100 bg-white backdrop-filter backdrop-blur-md bg-opacity-90 shadow-2xl">
          <div className="grid grid-cols-1 gap-8">
            <Link to="/about">About</Link>
            <Link to="/pricing">Pricing</Link>
            <a href="https://app.adtrics.com/user/sign_in">Sign In</a>
            <a className="py-[6px] px-3 h-[35px] rounded bg-mariner-500 text-white flex justify-center items-center" role="button" href="https://app.adtrics.com/product_sets/new">Go To App</a>
          </div>
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
