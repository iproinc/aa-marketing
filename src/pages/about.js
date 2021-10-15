import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import Layout from '../components/layout'
import Seo from '../components/seo'
import Cta from '../components/Cta'

function AboutPage() {
  return (
    <Layout>
      <Seo title="About" />
      <section className="bg-white py-48 overflow-hidden">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-12 gap-6">
          <div className="col-span-7 flex flex-col gap-6">
            <p className="text-4xl font-medium">The birth of Adtrics was sparked from a simple question, </p>
            <p className="text-san-marino-500 italic font-bold">“what would people who are advertising on Facebook need help with, to be more effective on the platform?”</p>
            <p>The answer? A way to analyze their Facebook data.</p>
            <p>If you’re currently advertising on Facebook, you can probably agree that putting an ad up on Facebook is pretty straightforward. You can easily find courses and even free YouTube videos to walk you through step-by-step. The real challenge comes after when the ads are up, and you’re cluelessly looking at the data, trying to decipher what those numbers on the table mean, and what you should do next. </p>
          </div>
          <div className="relative col-span-5">
            <StaticImage className="" src="../images/graphic-data-processing.png" alt="Data processing"/>
            <StaticImage className="absolute -right-44 transform rotate-[120deg]" src="../images/grid-dots-2.png" alt="grid dots" width={324} height={324}/>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-12 gap-6">

          <div className="relative col-span-6 p-12 rounded-2xl overflow-hidden ring-4 ring-white ring-inset ring-opacity-50 bg-gradient-to-br from-[#fff7c980] to-[#ffc58780]">
            <p className="font-bold text-6xl leading-tight mb-6">The Story Lies In The Data </p>
            <div className="leading-relaxed text-san-marino-900">
              <p className="mb-6">If you have heard myths about “Facebook ads do not work”, “the platform is saturated”,  or that “it’ll cost you an arm and a leg”, then let us prove to you that Facebook ads is still by far one of the most cost-effective advertising platforms out there (We promise we’re not sponsored. We just know it works after spending millions of dollars on Facebook and counting). </p>
              <p>Facebook ads can work for you too if you know how to analyze the data correctly. In fact, it is now easier than ever before because Adtrics can tell you the story of your Facebook campaigns, and show you exactly what to do next to maximize your ad spend for the greatest results.</p>
            </div>
            <StaticImage className="absolute top-[-100px] right-[-500px] transform rotate-45 mix-blend-color-dodge" src="../images/graphic-rect-2.png" alt="Rectangle Asset" width={516} height={516} />
          </div>

          <div className="relative col-span-6 p-12 rounded-2xl overflow-hidden ring-4 ring-white ring-inset ring-opacity-50 bg-gradient-to-br from-[#dbf7f380] to-[#929de780]">
            <p className="font-bold text-6xl leading-tight mb-6">Our Mission: Simplifying Data Analysis For Advertisers</p>
            <div className="leading-relaxed text-san-marino-900">
              <p>We acknowledge that data and numbers can be intimidating but we don’t want that to stop you from realizing the value of your advertising campaigns. Our goal is to save you time and money by making it ridiculously easy for you to dissect your data without any guesswork, and helping you feel confident in leveraging the numbers to grow your business. </p>
            </div>
            <StaticImage className="absolute top-[-100px] right-[-500px] transform rotate-45 mix-blend-color-dodge" src="../images/graphic-rect-2.png" alt="Rectangle Asset" width={516} height={516} />
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
}

export default AboutPage
