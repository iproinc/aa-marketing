import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cta from '../components/Cta'

import BGimage from '../images/home/header-bg.png'
import dropshipIcon from '../images/home/graphic-dropship.png'
import podIcon from '../images/home/graphic-pod.png'
import saleIcon from '../images/home/graphic-sale.png'
import digitalIcon from '../images/home/graphic-digital.png'
import settingsIcon from '../images/home/graphic-settings.png'
import analyzeIcon from '../images/home/graphic-analyze.png'
import dataIcon from '../images/home/graphic-data.png'

const IndexPage = () => {

  return (
    <Layout>
      <Seo title="Home" />
      <section className="pt-32 lg:pt-40 h-full lg:min-h-[700px] bg-cover bg-bottom flex overflow-hidden px-6" style={{ backgroundImage: `url(${BGimage})` }}>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full max-w-[635px] gap-5 lg:gap-7 flex flex-col items-start">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight drop-shadow-sm">Facebook Ads Insights <br /> For eCommerce Advertisers</h1>
            <p className="text-lg lg:text-xl font-medium text-san-marino-700">Eliminate The Guesswork And Be Data-Informed For All Your ROI-Optimizing Decisions</p>
            <div>
              <a className="rounded bg-[#0083FC] font-semibold md:text-xl text-white text-center px-8 md:px-4 py-2 inline-block mb-3" href="https://app.adtrics.com/user/sign_up">Start Your Free Trial Now</a>
              <p className="text-sm">7-Day Free Trial. No Credit Card Required. Cancel Anytime.</p>
            </div>
          </div>
          <div className="lg:mr-[-388px] hidden md:block">
            <StaticImage className="lg:w-[860px]" src='../images/home/header-graphic.png' width={860} alt="header graphic"/>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-4 lg:gap-6 px-4 mb-14">
            <p className="font-medium text-lg lg:text-2xl bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-indigo-500">Introducing Adtrics</p>
            <div className="border-b-4 border-mariner-100 w-24"></div>
            <p className="font-bold text-2xl lg:text-4xl mb-2">Your Personal Ad Analyst Without The 5-Figure Salary</p>
            <p>Whether you’re a solopreneur, SMB, or even a full-fledged enterprise selling goods online, Adtrics can analyze your Facebook campaign in seconds to save you time and money.</p>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 px-4">
            <p className="font-medium text-mariner-500 text-sm tracking-wide">SUITABLE BUSINESSES INCLUDE</p>
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-7">
              {suitableBusinesses.map((business, i) => (
                <div key={i} className="rounded border border-mariner-100 p-2 lg:p-6 pt-8 leading-loose relative">
                  <img className="transform rotate-[-8deg] absolute -top-6" src={business.icon} width={50} height={50} alt={business.title} />
                  <p className="font-bold mb-2">{business.title}</p>
                  <ul className="fa-ul ml-6 text-sm lg:text-base leading-loose">
                    {business.businesses.map((niche, i) => (
                      <li key={i}><span className="fa-li"><FontAwesomeIcon icon={["fas", "dot-circle"]} className="text-mariner-500 text-sm"/></span>{niche}</li>
                    ))}
                  </ul>
                  <p className="text-sm lg:text-base leading-loose">And more...</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto flex flex-col gap-y-12 lg:gap-y-36">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 flex flex-col gap-6 p-6">
              <p className="font-medium text-xl lg:text-2xl">Facebook A.I. Analyzer</p>
              <p className="text-gray-700">Take the guesswork out of analyzing your Facebook campaigns and feel confident knowing exactly what to do next to optimize your ad spend!</p>
              <p className="text-gray-700">Adtrics will do all the grunt work and provide you with actionable insights to help you achieve your business goals.</p>
            </div>
            <div className="md:w-1/2">
              <StaticImage src="../images/home/section1-graphic.png" alt="Analyzer Screen" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse justify-between items-center">
            <div className="md:w-1/2 flex flex-col gap-6 p-6 lg:pl-36">
              <p className="font-medium text-xl lg:text-2xl">Facebook Integration</p>
              <p className="text-gray-700">Simply connect your Facebook ad account and instantly your campaign data will be available for Adtrics to start analyzing! </p>
              <p className="text-gray-700">No more generating reports, customizing columns, and pulling your hair to figure out what to do with your data! </p>
            </div>
            <div className="md:w-1/2">
              <StaticImage src="../images/home/section2-graphic.png" alt="Facebook Integration Screen" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 flex flex-col gap-6 p-6">
              <p className="font-medium text-xl lg:text-2xl">Unlimited Campaign Analysis </p>
              <p className="text-gray-700">Run as many campaign analysis as you want with no extra change regardless of how much you spend on ads. </p>
              <p className="text-gray-700">Our focus is simple: to get you results! </p>
            </div>
            <div className="md:w-1/2">
              <StaticImage src="../images/home/section3-graphic.png" alt="Campaign Analysis Screen" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-4 lg:gap-6 px-4 mb-14">
            <p className="font-medium text-lg lg:text-2xl bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-indigo-500">Discover Adtrics In Action</p>
            <div className="border-b-4 border-mariner-100 w-24"></div>
            <p className="font-bold text-2xl lg:text-4xl mb-2">Converting Your Facebook Ads Data Into Actionable Insights</p>
          </div>
          <div className="w-full mx-auto flex flex-col items-center gap-12 px-4">
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-7">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col gap-2 lg:gap-6 items-start lg:items-center p-4 lg:text-center">
                  <img src={step.icon} width={50} height={50} alt={step.title} />
                  <p className="text-xl lg:text-2xl font-medium">{step.title}</p>
                  <p className="text-gray-700">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta 
        heading="Your Personal Ad Analyst At Your Service"
        button="Start Your Free Trial"
        finePrint="7-Day Free Trial. No Credit Card Required. Cancel Anytime."
      />
    </Layout>
  )
}

const suitableBusinesses = [
  {
    title: "Dropshipping",
    businesses: [
      "Home & Kitchen",
      "Kids & Toys",
      "Pets"
    ],
    icon: dropshipIcon,
  },
  {
    title: "Print-On-Demand",
    businesses: [
      "Fashion & Apparel",
      "Custom Jewelry",
      "Arts & Photography"
    ],
    icon: podIcon,
  },
  {
    title: "Direct eCommerce",
    businesses: [
      "Home & Kitchen",
      "Kids & Toys",
      "Health & Wellness"
    ],
    icon: saleIcon,
  },
  {
    title: "Digital Publishing",
    businesses: [
      "Online Courses",
      "Paperback & Kindle",
      "Coaching Programs"
    ],
    icon: digitalIcon,
  },
]

const steps = [
  {
    title: "Step 1: Setting Your Benchmark KPIs",
    body: "Let Adtrics know your product-specific data for the campaign that you’re running and find out exactly what your minimum and maximum target KPI benchmarks are to be profitable. Adtrics makes sure that you stay on track without needing to waste another dime with your advertising spend. ",
    icon: settingsIcon,
  },
  {
    title: "Step 2: Analyzing Your Campaign Performance",
    body: "Simply indicate the Facebook campaign in the specific timeframe you wish to analyze and Adtrics will do all the grunt work for you. Literally with just a click of the button and a few milliseconds later, you will get a low-down of your campaign performance and feel confident knowing exactly what to do next.",
    icon: analyzeIcon,
  },
  {
    title: "Step 3: Transforming Your Data Into ROI-Driven Actions",
    body: "Adtrics tells you exactly if a campaign should be monitored further or pause it quickly so that you will know exactly what to do next with your data. Adtrics even provides you with opportunity insights to improve your campaign performance to maximize your ad spend and achieve a greater ROI.",
    icon: dataIcon,
  },
]

export default IndexPage
