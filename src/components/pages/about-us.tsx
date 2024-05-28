import React from 'react'
import Footer from '../shared/footer'
import Future from '../shared/future'
import AppSection from '../shared/appSection'
import BlogSection from '../shared/blogSection'
import Header from '../shared/header'
import Check from '../shared/check-mark'
import { FaRegStar } from 'react-icons/fa'
import { BsLightningCharge } from 'react-icons/bs'
import { RxRocket } from 'react-icons/rx'
import dynamic from 'next/dynamic'

const FAQ = dynamic(() => import('../shared/faq'), { ssr: false })
import { faqData } from '../shared/faq-data.js'

const AboutUs = () => {
  return (
    <div className="w-full">
      <div className="relative w-full xl:h-[1091px] xl:mb-[132px]  mb-[60px] bg-repeat-x bg-[url('/images/BACKGROUND.png')]">
        <Header />
        <div className="w-full  pt-[108px] mb-[27px] ">
          <div className="xl:w-[1350px] xl:h-[409px] px-[30px] xl:py-[75px] pt-[31px] flex xl:flex-row flex-col  xl:pt-[108px] mx-auto ">
            <div className="w-full">
              <p className="font-inter font-normal text-[15px] leading-5 text-[#808080] mb-[20px]">
                Our Story
              </p>
              <p className="font-clash-display font-semibold xl:text-[52px] text-[46px] leading-[62px] text-black">
                We’re going to become partners for a long run.{' '}
              </p>
            </div>
            <div className="w-full">
              <div className="flex xl:flex-row flex-col mb-[15px] w-full">
                <div className="flex  items-center gap-[15px] w-full xl:mb-0 mb-[15px]">
                  {' '}
                  <Check />{' '}
                  <p className="font-clash-display font-normal font text-[18px] leading-6 text-black  ">
                    Founded in 2014
                  </p>
                </div>
                <div className="flex  items-center gap-[15px] w-full">
                  {' '}
                  <Check />{' '}
                  <p className="font-clash-display font-normal text-[18px] leading-6 text-black ">
                    Community of 125K+
                  </p>
                </div>
              </div>
              <div className="flex xl:flex-row flex-col mb-[30px]">
                <div className="flex  items-center gap-[15px] w-full xl:mb-0 mb-[15px]">
                  {' '}
                  <Check />{' '}
                  <p className="font-clash-display font-normal text-[18px] leading-6 text-black ">
                    $100M in Transactions
                  </p>
                </div>
                <div className="flex  items-center gap-[15px] w-full">
                  {' '}
                  <Check />{' '}
                  <p className="font-clash-display font-normal text-[18px] leading-6 text-black ">
                    500+ global customers
                  </p>
                </div>
              </div>
              <p className="text-[#757575] font-normal font-inter text-[15px] leading-6">
                For over a decade, JEX has been at the forefront of enabling
                seamless transactions between cryptocurrency and fiat currency,
                establishing itself as the premier authority in both
                cryptocurrency exchange services and educational initiatives.
                With an extensive track record of facilitating such
                transactions, JEX stands as a beacon of reliability and
                expertise in the ever-evolving landscape of digital currency.
              </p>
            </div>
          </div>
        </div>

        <div
          className="  sm:w-full xl:h-[522px] h-[263px] bg-no-repeat  bg-center bg-cover "
          style={{ backgroundImage: 'url("/images/frame4.png")' }}
        ></div>
      </div>

      <div className="xl:h-[360px] xl:w-[1288px] w-[386px]  mx-auto xl:mb-[168px] mb-[60px] ">
        <p className="font-clash-display font-semibold xl:text-[42px] text-[36px] leading-[48px] text-black">
          Balance your passion <br /> with your passion for life.
        </p>
        <p className=" font-normal text-[18px] leading-7 font-inter text-[#4A4A4A] mb-[70px] ">
          We are a group of like-minded people who share the same core values.
        </p>
        <div className="flex xl:flex-row flex-col gap-[29px]">
          <div className="p-[30px] h-[166px] xl:w-[410px]  bg-[#DDE0FF]  xl:border xl:border-r-[11px] xl:border-b-[10px] border-black rounded-[14px]">
            <p className=" font-medium text-[24px] text-black leading-[31px] font-clash-display mb-[14px] ">
              Loyalty.
            </p>
            <p className=" font-inter font-normal text-[16px] leading-6 text-[#808080]">
              We fosters unity, trust, and success. Together, we achieve
              greatness through commitment, support, and dedication.
            </p>
          </div>
          <div className="p-[30px] pr-0 h-[166px] xl:w-[410px] w-[386px] bg-[#DDE0FF]   border-black rounded-[14px]">
            <p className=" font-medium text-[24px] text-black leading-[31px] font-clash-display mb-[14px] ">
              Trust.
            </p>
            <p className=" font-inter font-normal text-[16px] leading-6 text-[#808080]">
              Trust is the cornerstone of our relationships, ensuring
              transparency, reliability, and mutual respect in all endeavors.
            </p>
          </div>
          <div className="p-[30px] pr-0 h-[166px] xl:w-[410px] w-[386px] bg-[#DDE0FF]  xl:border xl:border-r-[11px] xl:border-b-[10px] border-black rounded-[14px]">
            <p className=" font-medium text-[24px] text-black leading-[31px] font-clash-display mb-[14px] ">
              Compassion.
            </p>
            <p className=" font-inter font-normal text-[16px] leading-6 text-[#808080]">
              Compassion fuels empathy, kindness, and understanding, fostering
              unity and positive impact within our communities and beyond.
            </p>
          </div>
        </div>
      </div>

      <div className=" xl:w-[1286px] xl:mx-auto xl:h-[615px] h-[867px] flex xl:flex-row flex-col mb-[91px] mx-[21px]  ">
        <div className="xl:pt-[100px] pt-0 w-full">
          <p className="font-clash-display font-semibold xl:text-[42px] text-[36px] leading-[48px] text-black">
            Our strength is <br />
            collaboration
          </p>
          <p className=" font-normal xl:text-[18px] text-[15px] leading-7 font-inter text-[#4A4A4A] mb-[20px] ">
            Our commitment to harnessing the collaborative potential with our
            users to achieve remarkable results is evident in the introduction
            of our referral program. Through this initiative, you can earn
            rewards for every new user you bring to our platform. As we continue
            to evolve, we remain steadfast in upholding our core values, which
            include:
          </p>
          <div className="flex  items-center gap-[22px] w-full mb-[15px]">
            <div className="h-[32px] w-[32px] bg-[#CBFF2E] flex justify-center items-center">
              <FaRegStar color="black" />
            </div>

            <p className="font-clash-display font-semibold text-[15px] leading-6 text-[#4A4A4A] ">
              Customer Satisfaction
            </p>
          </div>
          <div className="flex  items-center gap-[22px] w-full mb-[15px]">
            <div className="h-[32px] w-[32px] bg-[#CBFF2E] flex justify-center items-center">
              <BsLightningCharge color="black" />
            </div>

            <p className="font-clash-display font-semibold text-[15px] leading-6 text-[#4A4A4A] ">
              Swiftness
            </p>
          </div>
          <div className="flex  items-center gap-[22px] w-full mb-[15px]">
            <div className="h-[32px] w-[32px] bg-[#CBFF2E] flex justify-center items-center">
              <RxRocket color="black" />
            </div>

            <p className="font-clash-display font-semibold text-[15px] leading-6 text-[#4A4A4A] ">
              Impact
            </p>
          </div>
        </div>
        <div
          className="w-full bg-no-repeat bg-center bg-contain h-full  text-black"
          style={{ backgroundImage: 'url("/images/aboutus.webp.png")' }}
        ></div>
      </div>

      <FAQ data={faqData} />

      <BlogSection />
      <AppSection />
      <Future />
      <Footer />
    </div>
  )
}

export default AboutUs
