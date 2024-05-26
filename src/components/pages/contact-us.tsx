'use client'
import React, { useState } from 'react'
import FAQ from '../shared/faq'
import BlogSection from '../shared/blogSection'
import AppSection from '../shared/appSection'
import Future from '../shared/future'
import Footer from '../shared/footer'
import { faqData } from '../shared/faq-data'
import Header from '../shared/header'
import Check from '../shared/check-mark'
import { FiMail } from 'react-icons/fi'
import { BiMessageRoundedDetail } from 'react-icons/bi'
import Link from 'next/link'

const ContactUs = () => {
  const customDivClass = `md:text-[24px] text-[18px] md:w-[368px] w-[320px] h-[67px] flex items-center border md:border-b-[10px] border-b-[8px] md:border-r-[10px] border-r-[8px] rounded-[68px] border-black font-inter font-semibold leading-[30px]`
  const phoneNumber = '08132865565' // Replace with your phone number in international format
  const preFilledMessage = 'Hello, I would like to chat with you!' // Replace with your pre-filled message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    preFilledMessage
  )}`

  return (
    <div className="w-full">
      <div
        className="relative w-full xl:h-[850px]  h-[1337px]  bg-repeat-x  mb-[170px]"
        style={{ backgroundImage: 'url("/images/BACKGROUND.png")' }}
      >
        <Header />

        <div className=" xl:w-[1283px] xl:pt-[187px]  pt-[117px] mx-auto flex ">
          <div className=" flex xl:flex-row flex-col w-full h-[658px] gap-[16px]">
            <div className="text-black w-full xl:pt-[180px] pb-[15px] pr-[45px] pl-[15px]">
              <p className="mb-[20px]">Contact us</p>
              <p className="font-clash-display font-semibold xl:text-[52px] text-[46px] xl:leading-[62px] leading-[46px] text-black mb-[30px] lg-mb-0">
                We’re going to become partnerts for long run.
              </p>
              <div className="flex xl:flex-row flex-col mb-[30px]">
                <div className="flex  items-center gap-[15px] w-full mb-[15px]">
                  {' '}
                  <Check />{' '}
                  <p className="font-clash-display font-normal text-[18px] leading-6 text-black ">
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
                <div className="flex  items-center gap-[15px] w-full mb-[15px]">
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
                For over a decade, Jex has been at the forefront of enabling
                seamless transactions between cryptocurrency and fiat currency,
                establishing itself as the premier authority in both
                cryptocurrency exchange services and educational initiatives.
                With an extensive track record of facilitating such
                transactions, JEX stands as a beacon of reliability and
                expertise in the ever-evolving landscape of digital currency.
              </p>
            </div>
            <div className="w-full px-[15px] ">
              <div className="w-full px-[15px] md:px-[37px] pt-[37px]   pb-[52px] bg-[#F4F4F4] ">
                <p className="py-[20px] text-black font-semibold text-[32px] leadind-[34px] font-clash-display ">
                  Talk to us
                </p>
                <p className=" font-inter font-normal text-[15px] text-[#808080] pb-[30px]">
                  Don't hesitate to reach out to our team.
                </p>
                <form>
                  <input
                    type="email"
                    name="email"
                    className="w-full h-[50px] p-[16px] text-[#808080] mb-[28px]"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="text"
                    name="name"
                    className="w-full h-[50px] p-[16px] text-[#808080] mb-[28px]"
                    placeholder="Your name"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    className="w-full h-[50px] p-[16px] text-[#808080] mb-[28px]"
                    placeholder="Company name"
                  />
                  <textarea
                    name="message"
                    className="w-full p-[16px] text-[#808080] mb-[28px]"
                    rows={5}
                    placeholder="Free Message"
                    required
                  ></textarea>
                  <div className="flex justify-between items-center text-black w-full">
                    <Link
                      href={whatsappLink}
                      passHref
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        type="button"
                        className="border border-r-[6px] border-b-[8px] border-l-[0px] border-black gap-[8px] flex justify-center items-center py-[8px] px-[14px] rounded-[30px] bg-[#CBFF2E]"
                      >
                        Whatsapp <BiMessageRoundedDetail />
                      </button>
                    </Link>
                    <button
                      type="submit"
                      className="border border-r-[6px] border-b-[8px] border-l-[0px] border-black gap-[8px] flex justify-center items-center py-[8px] px-[14px] rounded-[30px] bg-[#CBFF2E]"
                    >
                      Submit <FiMail />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
      <FAQ data={faqData} />
      <BlogSection />
      <AppSection />
      <Future />
      <Footer />
    </div>
  )
}

export default ContactUs
