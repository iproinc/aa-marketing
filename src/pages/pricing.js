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
      <div className="relative h-full lg:mt-[-104px] lg:pt-40 md:min-h-[400px] bg-cover bg-bottom flex flex-col items-center py-24 gap-12 z-10">
        <div className="max-w-4xl w-full mx-auto px-6 flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug drop-shadow-sm bg-clip-text text-center text-transparent bg-gradient-to-br from-san-marino-600 via-gray-800 to-mariner-600 p-2">Never Be Confused With Your Facebook Campaign Data Again</h1>
          <p className="text-base md:text-xl text-gray-500 text-center">Simple Pricing. <br className="md:hidden" /> Not Limited Be Ad Spend.</p>
        </div>
        <div className="max-w-6xl w-full mx-auto md:px-6 md:flex flex-col text-gray-800 text-sm rounded hidden">
          <div className="w-full flex flex-row">
            <div className="w-1/4"></div>
            {
              plans.map((plan, i) => {
                return (
                  <div key={i} className={`w-1/4 flex flex-col`}>
                    <div className="p-2 xl:p-6 border-b border-gray-200  xl:text-xl font-semibold">
                      {plan.plan}
                    </div>
                    <div className="p-2 xl:p-6 flex flex-col justify-between h-full">
                      <div className="mb-6 xl:mb-12">
                        <p className="text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-2">
                          {plan.price}
                          <span className="text-base xl:text-2xl">USD</span>
                        </p>
                        {i === 2 ? <p className="font-medium text-xs px-1 py-[1px] bg-yellow-400 rounded inline-block text-black align-middle">Most Popular - Save 16%</p> : null}
                      </div>
                      <a href={plan.link} className="py-2 flex justify-center items-center rounded border border-mariner-600 text-white bg-mariner-500 hover:bg-mariner-600 hover:transition-all ease-in-out duration-300 hover:shadow-xl hover:-translate-y-2">
                        {plan.button}
                      </a>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="flex flex-col">
            {
              Object.keys(plans[0].features).map((feature, i) => {
                return (
                  <div key={i} className={`flex flex-row odd:bg-san-marino-50`}>
                    <div className="p-6 w-1/4 flex justify-start items-center">
                      {feature}
                    </div>
                    {
                      plans.map((plan, j) => {
                        let values = Object.values(plan.features)
                        if(values[i] === true) {
                          return (
                            <div key={j} className={`py-6 w-1/4 flex justify-center items-center`}>
                              <FontAwesomeIcon icon={["fas", "check-circle"]}/>
                            </div>
                          )
                        } else {
                          return (
                            <div key={j} className={`p-6 w-1/4 flex justify-center items-center`}>
                              {values[i]}
                            </div>
                          )
                        }
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="max-w-6xl w-full mx-auto flex flex-col text-gray-800 text-sm md:hidden">
          <div className="w-full flex flex-col gap-4 p-4">
            {
              plans.map((plan, i) => {
                return (
                  <div key={i} className={`flex flex-col p-6 bg-gray-50 rounded-lg border border-gray-100 gap-6 ${ i === 2 ? "border-2 border-mariner-300 shadow-lg shadow-mariner-400/50" : null }`}>
                    <div className="p-2 border-b border-gray-200 text-xl font-semibold">
                      {plan.plan}
                    </div>
                    <div className="p-2 flex flex-col justify-between h-full gap-4">
                      <div>
                        <p className="text-5xl font-semibold text-gray-800">
                          {plan.price}
                          <span className="text-xl">USD</span>
                        </p>
                        {i === 2 ? <p className="font-medium text-xs px-1 py-[1px] bg-yellow-400 rounded inline-block text-black align-middle">Most Popular - Save 16%</p> : null}
                      </div>
                      <div>
                        {
                          Object.keys(plan.features).map((feature, i) => {
                            return (
                              <div key={i} className="flex flex-row odd:bg-san-marino-50">
                                <div className="w-1/2 p-4 flex justify-start items-center">
                                  {feature}
                                </div>
                                <div className="w-1/2 p-4 flex justify-center items-center">
                                  {
                                    Object.values(plan.features)[i] === true ?
                                      <FontAwesomeIcon icon={["fas", "check-circle"]}/>
                                    :
                                      <p>{Object.values(plan.features)[i]}</p>
                                  }
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                      <a href={plan.link} className="py-2 flex justify-center items-center rounded border border-mariner-600 text-white bg-mariner-500 hover:bg-mariner-600 hover:transition-all ease-in-out duration-300 hover:shadow-xl hover:-translate-y-2">
                        {plan.button}
                      </a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="relative bg-gradient-to-b from-[#1D2F56] to-[#0F182B] py-16 lg:pb-28 lg:pt-32 text-white overflow-hidden">
        <div className="relative max-w-4xl w-full mx-auto p-4">
          <div >
            <p className="font-bold text-white text-3xl mb-12">Join Adtrics Premium To Get Unlimited Analyses & Deeper Insights On Your Facebook Campaigns</p>
            {
              features.map((feature, i) => {
                let newText = feature.body.split('\n')
                return (
                  <div key={i} className="mb-16">
                    <div className="mb-2">
                      <span className="font-medium text-xl mb-6 mr-2">
                        {
                          feature.title
                        }
                      </span>
                      {
                        feature.available === true ?
                          <FontAwesomeIcon icon={["fas", "check"]} className="text-green-500 text-sm align-middle"/>
                        :
                          <span className="font-medium text-xs px-1 py-[1px] bg-yellow-400 rounded inline-block text-black align-middle">Coming Soon!</span>
                      }
                    </div>
                    {
                      newText.map((text, i) => (
                        <p key={i} className="mb-6 text-san-marino-200">{text}</p>
                      ))
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
        <StaticImage className="!absolute right-32 md:right-11 -bottom-14 md:-bottom-6 transform rotate-[-188deg] z-10" src="../images/grid-dots.png" alt="grid-dots" width={324} height={324} placeholder="none" />
        <StaticImage className="!absolute -right-32 md:right-11 -top-32 md:-top-6 transform rotate-[8deg] z-10" src="../images/grid-dots.png" alt="grid-dots" width={324} height={324} placeholder="none" />
      </div>
    </section>
    <section className="bg-white py-16 lg:py-24">
      <div className="md:max-w-xl lg:max-w-6xl w-full mx-auto px-2">
        <p className="text-4xl font-bold text-center mb-12 text-san-marino-900">Frequently Asked Questions</p>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
          {faqs.map((faq, i) => {
            return (
              <div key={i} className={`bg-gray-50 rounded-lg p-6 w-full ${i === 4 ? "col-span-2" : null}`}>
                <p className="text-san-marino-500 font-medium mb-4">{faq.question}</p>
                <p>{faq.answer}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
    <Cta
      heading="Create An Account Today & Try Out Adtrics For Free."
      subHeading="Still Need More Time?"
      button="Get Started For Free"
      finePrint="Free Forever. No Credit Card Required."
      link="https://app.adtrics.com/product_sets/new"
    />
  </Layout>
)

const features = [
  {
    title: "Facebook A.I. Analyzer",
    body: "Let Adtrics turn your Facebook campaign data into actionable, conversion-boosting insights to help you optimize your ad spend. Our goal is to help you achieve greater results for your business goals.",
    available: true,
  },
  {
    title: "Unlimited Basic Analyses",
    body: "Know your numbers before you make any marketing decisions. Use our Basic Analyzer to run different campaign performance scenarios to predict if your funnel is viable or not.",
    available: true,
  },
  {
    title: "Unlimited Advanced Analyses",
    body: "Run as many campaign analyses as you want with no extra charge regardless of how much you spend on ads! Adtrics will do the heavy lifting for you and provide you with actionable insights across all three campaign levels: campaign, ad set, and ad to maximize your advertising spend.",
    available: true,
  },
  {
    title: "Multi-Product AOV Analysis",
    body: "Got an entire sales funnel with upsells and downsells? Adtrics will consider your entire funnel to analyze your Facebook campaigns and give you the benchmark numbers needed to be profitable.",
    available: true,
  },
  {
    title: "Product Data Set Creation",
    body: "Provide us with your product data and Adtrics will let you know the benchmark numbers you need to aim for to ensure profitability of your campaigns.",
    available: true,
  },
  {
    title: "Facebook Integration",
    body: "Simply connect your Facebook ad account and instantly your campaign data will be available for Adtrics to start analyzing! No more generating reports, customizing columns, and pulling your hair to figure out what to do with your data! ",
    available: true,
  },
  {
    title: "Shopify Integration",
    body: "Connect your Shopify store with Adtrics so that no manual data input is required and you can even use your products’ exact conversion rates and AOV to analyze your campaigns.",
    available: true,
  },
]

const faqs = [
  {
    question: "Who Is Adtrics Suitable For?",
    answer: "If you’re advertising on Facebook, and you’re looking to save time, money, and effort when it comes to analyzing your Facebook campaigns, then Adtrics is the solution for you. Our Facebook A.I. analyzer will study your campaigns and tell you exactly what you need to do to achieve greater results and optimize your return on ad spend.",
  },
  {
    question: "How Is Adtrics Better Compared To Facebook’s Own Reporting With Ads Manager?",
    answer: "We see Adtrics and Facebook Ads Manager working hand-in-hand, rather than competing against each other. In fact, with our Facebook Integration, we are able to pull your campaign data directly from Facebook for analysis and provide you with actionable insights to maximize your ad spend! In short, Facebook’s own reporting only gives you the data, while Adtrics converts that data into results-driven next steps to help you achieve your campaign goals and grow your business.",
  },
  {
    question: "How Many Ad Accounts Can I Connect To Adtrics?",
    answer: "First off, you’re awesome for working on multiple ad accounts at the same time - it’s definitely a lot of work! Unfortunately, at this time, you can only connect 1 Facebook ad account with Adtrics but we’re working to accommodate multiple ad accounts in the near future. ",
  },
  {
    question: "How Do I Cancel?",
    answer: "Unlike hiring a full-time Facebook Data Analyst with contracts and obligations, you can cancel Adtrics at any time you wish. Your subscription will remain active until the end of your billing cycle. ",
  },
  {
    question: "Can I Try Adtrics For Free? ",
    answer: "Yes! Simply sign up for a free account right here and witness the power of Adtrics yourself! The free account has a daily analysis limit and will only provide top campaign level analysis. If you want to get deeper insights into your campaign performance, upgrade to Premium for unlimited access.",
  },
]

const plans = [
  {
    plan: "FREE",
    price: "$0",
    link: "http://app.adtrics.com/user/sign_up",
    button: "Get Started",
    features: {
      "Facebook Ad Account Integration": true,
      "Shopify Product Data Integration": true,
      "Basic Analysis: Manual Data Input": "Limit 2 Per Day",
      "Advanced Analysis: Campaign Level": "Limit 2 Per Day",
      "Advanced Analysis: Ad Set Level": true,
      "Advanced Analysis: Ad Level": true,
      "Product Data Set Creation": true,
    }
  },
  {
    plan: "3-Month Subscription",
    price: "$297",
    link: "http://app.adtrics.com/user/sign_up?plan=3monthplan",
    button: "Select Plan",
    features: {
      "Facebook Ad Account Integration": true,
      "Shopify Product Data Integration": true,
      "Basic Analysis: Manual Data Input": "Unlimited",
      "Advanced Analysis: Campaign Level": "Unlimited",
      "Advanced Analysis: Ad Set Level": "Unlimited",
      "Advanced Analysis: Ad Level": "Unlimited",
      "Product Data Set Creation": true,
    }
  },
  {
    plan: "12-Month Subscription",
    price: "$997",
    link: "http://app.adtrics.com/user/sign_up?plan=1yearplan",
    button: "Select Plan",
    features: {
      "Facebook Ad Account Integration": true,
      "Shopify Product Data Integration": true,
      "Basic Analysis: Manual Data Input": "Unlimited",
      "Advanced Analysis: Campaign Level": "Unlimited",
      "Advanced Analysis: Ad Set Level": "Unlimited",
      "Advanced Analysis: Ad Level": "Unlimited",
      "Product Data Set Creation": true,
    }
  }
]

export default PricingPage
