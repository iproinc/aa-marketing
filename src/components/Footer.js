import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../images/adtrics-logo-primary.svg'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleFooterQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <footer className="bg-white flex flex-col justify-center items-center p-4 py-16 lg:py-8 min-h-[400px] text-san-marino-900">
      <div className="w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl flex flex-col gap-6 md:gap-8 justify-center items-center">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 w-full">
          <Link to="/">
            <img src={logo} className="h-[40px]" alt={data.site.siteMetadata?.title} />
          </Link>
          <div className="flex flex-col md:flex-row gap-6 text-sm">
            <div className="flex flex-col leading-10">
              <p className="font-bold text-base mb-2">Company</p>
              <Link to="/about" >About</Link>
              <Link to="/pricing" >Pricing</Link>
            </div>
            <div className="flex flex-col leading-10">
              <p className="font-bold text-base mb-2">Compliance</p>
              <Link to="/privacy-policy" >Privacy Policy</Link>
              <Link to="/terms-of-use" >Terms Of Use</Link>
            </div>
          </div>
        </div>
        <div className="w-full my-4 border-b border-gray-200"></div>
        <div className="w-full flex flex-col-reverse md:flex-row justify-between md:items-center">
          <p className="text-xs text-gray-500">{data.site.siteMetadata?.title } © Copyright {new Date().getFullYear()}. All Rights Reserved.</p>
          <div className="flex flex-row gap-6 mb-6">
            <a href="https://facebook.com/adtricshq" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={["fab", "facebook-square"]} className="text-xl"/>
            </a>
            <a href="https://instagram.com/adtrics" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={["fab", "instagram"]} className="text-xl"/>
            </a>
            <a href="https://linkedin.com/company/adtrics" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} className="text-xl"/>
            </a>
            <a href="https://twitter.com/adtrics" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={["fab", "twitter"]} className="text-xl"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
