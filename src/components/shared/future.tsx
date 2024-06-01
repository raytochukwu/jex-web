import React from 'react'
import { FiMail } from 'react-icons/fi'
import { BiMessageRoundedDetail } from 'react-icons/bi'
import Link from 'next/link'

const Future = () => {
  const phoneNumber = '2349063575264' // Replace with your phone number in international format
  const preFilledMessage =
    "Hello! I'm interested in learning more about your crypto exchange services. Could you please provide me with more information? Thank you!" // Replace with your pre-filled message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    preFilledMessage
  )}`
  return (
    <div className="xl:w-[1279px] mx-[21px] sm:h-[415px] h-[838px] bg-no-repeat md:bg-bottom  xl:bg-top bg-cover border border-black border-b-[8px] xl:mx-auto rounded-[50px] bg-[url('/images/bg2.2.png')]  md:bg-[url('/images/bg2.png')] mb-[119px] md:p-[75px] px-[21px] pt-[51px] ">
      <p className=" font-clash-display font-semibold md:text-[52px] text-[35px] md:leading-[62px] leading-[43px] text-[#070A26] mb-[10px]">
        Embrace your
        <br /> future with JEX
      </p>
      <p className="font-inter font-normal text-[16px] leading-6 text-[#070A26] mb-[30px]">
        Empower yourself with our cryptocurrency course and delve into the
        realms of crypto <br />
        and web3. Join the pioneers and leverage the growing adoption
        of cryptocurrency.
      </p>
      <div className="flex  gap-[24px]">
        <Link href="/contact" passHref>
          <div className="w-[154px] h-[48px] rounded-[30px] bg-white text-[#070A26] flex justify-center items-center border border-black gap-2">
            <p className=" font-inter text-[16px] leading-6 ">Contact Us</p>
            <FiMail />
          </div>
        </Link>
        <Link
          href={whatsappLink}
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-[154px] h-[48px] rounded-[30px]  bg-inherit text-[#070A26] flex justify-center items-center border border-r-[6px] border-b-[8px] border-black gap-2">
            <p className=" font-inter text-[16px] leading-6 ">Whatsapp</p>
            <BiMessageRoundedDetail size={24} />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Future
