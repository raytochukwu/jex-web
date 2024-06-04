import React from 'react'

import { FiMail } from 'react-icons/fi'
import { IoLogoWhatsapp } from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagramSquare } from 'react-icons/fa'

const Footer = () => {
  const phoneNumber = '2349063575264' // Replace with your phone number in international format
  const preFilledMessage =
    "Hello! I'm interested in learning more about your crypto exchange services. Could you please provide me with more information? Thank you!" // Replace with your pre-filled message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    preFilledMessage
  )}`

  const currentYear = new Date().getFullYear()
  return (
    <div className="xl:w-[1394px] mx-[21px] md:h-[676px] h-[508px] rounded-[50px] xl:py-[93px] py-[49px] lg:px-[324px] bg-[#070A26] xl:mx-auto mb-[32px]">
      <div className="mx-auto w-[175px] mb-[32px]">
        <Image src="/images/logo2.png" width={175} height={64} alt="Logo" />
      </div>
      <p className="text-center font-semibold text-white lg:text-[32px] text-[24px] leading-10 font-clash-display mb-[32px]">
        Empowering dreams,
        <br /> one crypto at a time
      </p>
      <div className="xl:flex   hidden items-center justify-center gap-8 text-white font-normal text-[18px]  text-inter mb-[40px]">
        <Link href="/" className="  ">
          Home
        </Link>
        <Link href="/market" className="  ">
          Market Insights
        </Link>
        <Link href="/about" className="  ">
          About
        </Link>
        <Link href="/blog" className="  ">
          Blog
        </Link>
      </div>
      <div className="w-[259px] mx-auto">
        <div className="flex justify-center items-center gap-4 mb-[32px]">
          <div className="w-[48px] h-[48px] rounded-[50%] flex justify-center items-center bg-[#CBFF2E] ">
            <FiMail color="black" size={24} />
          </div>
          <p className=" underline font-light text-[24px] leading-7 font-clash-display">
            hello@thejex.com
          </p>
        </div>
        <div className="w-[213px] mx-auto flex justify-center items-center gap-[15px] mb-[60px]">
          {/* <div className="w-[42px] h-[42px] flex justify-center items-center ">
            <RiTwitterXFill size={24} color="white" />
          </div>
          <div className="w-[42px] h-[42px] flex justify-center items-center ">
            <FaFacebook size={24} color="white" />
          </div>
          <div className="w-[42px] h-[42px] flex justify-center items-center ">
            <FaYoutube size={24} color="white" />
          </div>
          <div className="w-[42px] h-[42px] flex justify-center items-center ">
            <FaLinkedin size={24} color="white" />
          </div> */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[42px] h-[42px] flex justify-center items-center "
          >
            <IoLogoWhatsapp size={24} color="white" />
          </a>
          <a
            href="https://www.instagram.com/jexcrypto/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[42px] h-[42px] flex justify-center items-center "
          >
            <FaInstagramSquare size={24} color="white" />
          </a>
        </div>
      </div>
      <p className=" lg:text-[18px] text-[14px] text-center font-light leading-[25px] font-clash-display">
        © {currentYear} JEX Technologies. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
