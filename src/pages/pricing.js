import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cta from '../components/Cta'

import BGimage from '../images/home/header-bg.png'

const PricingPage = () => (
  <Layout>
    <Seo title="Pricing" />
    <section>
      <div className="hidden sticky top-28 lg:top-36 mt-[-500px] lg:mt-[-700px] max-w-6xl w-full mx-auto md:grid grid-cols-12 gap-6 z-40 pb-12 px-6">
        <div className="col-span-5 col-start-8 bg-white border-[6px] border-gray-50 shadow-2xl rounded-lg p-4 lg:p-12 w-full max-w-[457px]">
          <div>
            <p className="mb-6 font-bold">Billed Yearly</p>
            <p className="mb-2 font-bold text-5xl lg:text-6xl text-san-marino-800">$997<span className="text-base font-bold text-san-marino-500 align-top ml-1">USD</span></p>
            <p className="mb-3 font-medium text-xs px-2 py-[2px] bg-yellow-400 rounded inline-block">(~$83 USD Per Month)</p>
            <p className="text-sm lg:text-base">Just one fancy dinner per month</p>
          </div>
          <div className="my-4 lg:my-6 border-b border-gray-200"></div>
          <div>
            <ul className="fa-ul ml-6 font-medium">
              <li className="mb-4 lg:mb-6 text-sm lg:text-base"><span className="fa-li"><FontAwesomeIcon icon={["fas", "infinity"]} className="text-mariner-200 text-sm"/></span>Unlimited Campaign Analysis</li>
              <li className="mb-4 lg:mb-6 text-sm lg:text-base"><span className="fa-li"><FontAwesomeIcon icon={["fas", "ad"]} className="text-mariner-200 text-sm"/></span>No Maximum Ad Spend</li>
              <li className="mb-4 lg:mb-6 text-sm lg:text-base"><span className="fa-li"><FontAwesomeIcon icon={["fab", "facebook-square"]} className="text-mariner-200 text-sm"/></span>Facebook Integration</li>
              <li className="mb-4 lg:mb-6 text-sm lg:text-base"><span className="fa-li"><FontAwesomeIcon icon={["fas", "bullhorn"]} className="text-mariner-200 text-sm"/></span>1 Facebook Ad Account</li>
            </ul>
          </div>
          <div className="md:my-4 lg:my-6 border-b border-gray-200"></div>
          <div>
            <a className="rounded-lg bg-[#0083FC] font-semibold lg:text-xl text-white text-center px-4 py-2 block mb-3 hover:shadow-lg transition-all ease-in-out" href="/">Start My Free Trial Now</a>
            <p className="text-xs lg:text-sm text-center">7-Day Free Trial. <br /> No Credit Card Required. Cancel Anytime.</p>
          </div>
        </div>
      </div>
      <div className="relative h-full lg:mt-[-104px] lg:pt-40 md:min-h-[400px] lg:min-h-[650px] bg-cover bg-bottom flex items-center py-12" style={{ backgroundImage: `url(${BGimage})` }}>
        <div className="max-w-6xl w-full mx-auto md:grid grid-cols-12 gap-6 px-6">
          <div className="col-span-7 gap-y-4 md:gap-7 flex flex-col items-start">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold leading-snug drop-shadow-sm bg-clip-text text-transparent bg-gradient-to-br from-san-marino-600 via-gray-800 to-mariner-600">Never Be Confused With Your Facebook Campaign Data Again</h1>
            <div className="border-b-4 border-mariner-200 w-[120px] "></div>
            <p className="text-base md:text-xl font-medium">One Simple Pricing. <br className="md:hidden" /> Not Limited Be Ad Spend.</p>
          </div>
        </div>
      </div>
      <div className="md:hidden w-full mx-auto p-2 pb-12">
        <div className="col-span-5 col-start-8 bg-white border-[6px] border-gray-50 shadow rounded-lg p-4 w-full max-w-[457px]">
          <div>
            <p className="mb-6 font-bold">Billed Yearly</p>
            <p className="mb-2 font-bold text-5xl text-san-marino-800">$997<span className="text-base font-bold text-san-marino-500 align-top ml-1">USD</span></p>
            <p className="mb-3 font-medium text-xs px-2 py-[2px] bg-yellow-400 rounded inline-block">(~$83 USD Per Month)</p>
            <p className="text-base">Just one fancy dinner per month</p>
          </div>
          <div className="my-4 border-b border-gray-200"></div>
          <div>
            <ul className="fa-ul ml-6 font-medium">
              <li className="mb-4 text-sm"><span className="fa-li"><FontAwesomeIcon icon={["fas", "infinity"]} className="text-mariner-200 text-sm"/></span>Unlimited Campaign Analysis</li>
              <li className="mb-4 text-sm"><span className="fa-li"><FontAwesomeIcon icon={["fas", "ad"]} className="text-mariner-200 text-sm"/></span>No Maximum Ad Spend</li>
              <li className="mb-4 text-sm"><span className="fa-li"><FontAwesomeIcon icon={["fab", "facebook-square"]} className="text-mariner-200 text-sm"/></span>Facebook Integration</li>
              <li className="mb-4 text-sm"><span className="fa-li"><FontAwesomeIcon icon={["fas", "bullhorn"]} className="text-mariner-200 text-sm"/></span>1 Facebook Ad Account</li>
            </ul>
          </div>
          <div className="my-4 border-b border-gray-200"></div>
          <div>
            <a className="rounded-lg bg-[#0083FC] font-semibold lg:text-xl text-white text-center px-4 py-2 block mb-3 hover:shadow-lg transition-all ease-in-out" href="/">Start My Free Trial Now</a>
            <p className="text-xs lg:text-sm text-center">7-Day Free Trial. <br /> No Credit Card Required. Cancel Anytime.</p>
          </div>
        </div>
      </div>
      <div className="relative bg-gradient-to-b from-[#1D2F56] to-[#0F182B] py-16 lg:py-28 text-white overflow-hidden">
        <div className="relative max-w-6xl w-full mx-auto md:grid grid-cols-12 gap-6 p-4 z-30">
          <div className="col-span-7">
            {features.map((feature, i) => {
              let newText = feature.body.split('\n')
              return (
                <div key={i} className="mb-16">
                  <div className="mb-4 lg:mb-6"><span className="font-medium text-xl mb-6 mr-2">{feature.title}</span>{feature.available === true ? <FontAwesomeIcon icon={["fas", "check"]} className="text-green-500 text-sm align-middle"/> : <span className="font-medium text-xs px-1 py-[1px] bg-yellow-400 rounded inline-block text-black align-middle">Coming Soon!</span> }</div>
                  {newText.map((text, i) => (
                    <p key={i} className="mb-6 text-san-marino-200">{text}</p>
                  ))}
                </div>
              )
            })}
          </div>
        </div>
        <StaticImage className="!absolute right-32 md:right-11 -bottom-14 md:-bottom-6 transform rotate-[-188deg] z-10" src="../images/grid-dots.png" alt="grid-dots" width={324} height={324} placeholder="none" />
        <StaticImage className="!absolute -right-32 md:right-11 -top-32 md:-top-6 transform rotate-[8deg] z-10" src="../images/grid-dots.png" alt="grid-dots" width={324} height={324} placeholder="none" />
      </div>
    </section>
    <section className="bg-white py-16 lg:py-24">
      <div className="md:max-w-xl lg:max-w-6xl w-full mx-auto px-2">
        <p className="text-4xl font-bold text-center mb-12 text-san-marino-900">Frequently Asked Questions</p>
        <div className="flex flex-col flex-wrap gap-6 lg:h-[540px] justify-between">
          {faqs.map((faq, i) => {
            return (
              <div key={i} className="bg-gray-50 rounded-lg p-6 w-full lg:w-1/2">
                <p className="text-san-marino-500 font-medium mb-4">{faq.question}</p>
                <p>{faq.answer}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
    <Cta 
      heading="Let Us Analyze Your Ads For You "
      button="Start Your Free Trial"
      finePrint="7-Day Free Trial. No Credit Card Required. Cancel Anytime."
    />
  </Layout>
)

const features = [
  {
    title: "Facebook A.I. Analyzer",
    body: "Take the guesswork out of analyzing your Facebook campaigns and feel confident knowing exactly what to do next to optimize your ad spend! \n Adtrics will do all the grunt work and provide you with actionable insights to help you achieve your business goals. ",
    available: true,
  },
  {
    title: "Facebook Integration",
    body: "Simply connect your Facebook ad account and instantly your campaign data will be available for Adtrics to start analyzing! No more generating reports, customizing columns, and pulling your hair to figure out what to do with your data! ",
    available: true,
  },
  {
    title: "Unlimited Campaign Analysis",
    body: "Run as many campaign analysis as you want with no extra change regardless of how much you spend on ads. Our focus is simple: to get you results! ",
    available: true,
  },
  {
    title: "Shopify Integration",
    body: "Connect your Shopify store with Adtrics so that no manual data input is required and you can even use your offer’s exact conversion rate and AOV to analyze your campaigns! ",
    available: false,
  },
  {
    title: "Automated KPI Rules",
    body: "Set your campaign performance targets using KPI metrics that matter to you and Adtrics will monitor them like a hawk for you 24/7. ",
    available: false,
  },
  {
    title: "Instant Campaign Notifications",
    body: "Get instantly notified through email and desktop push notifications the moment your campaign performance targets are reached so that you can take action right away! ",
    available: false,
  },
  {
    title: "Multi-Product AOV Analysis",
    body: "Got an entire sales funnel with upsells and downsells? Adtrics will consider your entire funnel to analyze your Facebook campaigns and give you the benchmark numbers needed to be profitable.",
    available: false,
  },
]

const faqs = [
  {
    question: "Who Is Adtrics Suitable For?",
    answer: "If you’re running an offer on Facebook ads, and you’re looking to save time, money, and effort when it comes to analyzing your campaign performance, then Adtrics is the solution for you. Our Facebook A.I. analyzer will study your campaigns and tell you exactly what you need to do to achieve greater results and growth for your business. ",
  },
  {
    question: "How Is Adtrics Better Compared To Facebook’s Own Reporting With Ads Manager?",
    answer: "We see Adtrics and Facebook Ads Manager to work hand-in-hand. In fact, with our Facebook Ad Integration, we are able to pull your campaign data directly from Facebook to analyze and provide you with actionable insights to maximize your ad spend! In short, Facebook’s own reporting only gives you the data, while Adtrics takes the data and turns them into results-driven next steps that you can do to achieve your campaign goals. ",
  },
  {
    question: "Does The Trial Have Any Limitations?",
    answer: "Our 7-day free trial allows you to test drive Adtrics in its fullest potential so that you can immediately take our actionable insights to optimize your Facebook campaigns. ",
  },
  {
    question: "How Many Ad Accounts Can I Connect To Adtrics?",
    answer: "First off, you’re awesome for working on multiple ad accounts at the same time - it’s definitely not easy! Unfortunately, at this time, you can only connect 1 Facebook ad account with Adtrics, but we’re working to accommodate multiple ad accounts in the near future. ",
  },
  {
    question: "How Do I Cancel?",
    answer: "You may cancel Adtrics any time and your subscription will stay active until the end of your current billing cycle.",
  },
]

export default PricingPage
