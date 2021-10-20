import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    <footer className="bg-white flex flex-col justify-center items-center p-4 py-16 lg:py-8 min-h-[400px]">
      <div className="w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl flex flex-col gap-6 md:gap-8 justify-center items-center">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 w-full">
          <div className="">
            <StaticImage src="../images/adtrics-logo-primary.svg" height={40} alt={data.site.siteMetadata?.title} placeholder="none" />
          </div>
          <div className="flex flex-col md:flex-row gap-6 text-sm">
            <div className="flex flex-col leading-8">
              <p className="font-bold text-base mb-2">Company</p>
              <Link to="/about" >About</Link>
              <Link to="/pricing" >Pricing</Link>
            </div>
            <div className="flex flex-col leading-8">
              <p className="font-bold text-base mb-2">Compliance</p>
              <Link to="/private-policy" >Private Policy</Link>
              <Link to="/terms-of-use" >Terms Of Use</Link>
            </div>
          </div>
        </div>
        <div className="w-full my-4 border-b border-gray-200"></div>
        <div className="w-full flex flex-col-reverse md:flex-row justify-between md:items-center gap-6">
          <p className="text-xs text-gray-500">{data.site.siteMetadata?.title } © Copyright {new Date().getFullYear()}. All Rights Reserved.</p>
          <div className="flex flex-row gap-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={["fab", "facebook-square"]} className="text-xl"/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={["fab", "instagram"]} className="text-xl"/>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} className="text-xl"/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={["fab", "twitter"]} className="text-xl"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
