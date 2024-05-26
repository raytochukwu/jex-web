import React from 'react'
import Image from 'next/image'

const AppSection = () => {
  return (
    <div className="xl:w-[1279px] mx-[21px] sm:h-[415px] h-[779px] border bg-no-repeat md:bg-top bg-cover  bg-[#DDE0FF]  border-black border-b-[8px] md:mx-auto rounded-[50px] md:bg-[url('/images/bg1.png')] bg-[url('/images/bg1.1.png')] md:p-[75px] px-[21px] pt-[51px] mb-[119px]">
      <p className=" font-clash-display font-semibold sm:text-[52px] text-[35px]  leading-[43px] md:leading-[62px] text-[#070A26] mb-[10px]">
        JEX App Coming
        <br /> Soon
      </p>
      <p className="font-inter font-normal text-[16px] leading-6 text-[#070A26] mb-[30px]">
        Exciting news! Get ready for the JEX app launch. Stay tuned for
        <br className=" hidden md:block" /> a revolutionary experience in
        trading and managing your assets.
      </p>
      <div className="flex  gap-[24px]">
        <div className="sm:h-[52px] sm:w-[180px] w-[124px] h-[35px] ">
          {' '}
          <Image
            src="/images/appstore.png"
            alt="hand"
            width={180}
            height={52}
          />
        </div>
        <div className="sm:h-[52px] sm:w-[180px] w-[124px] h-[35px] ">
          {' '}
          <Image
            src="/images/googleplay.png"
            alt="hand"
            width={180}
            height={52}
          />
        </div>
      </div>
    </div>
  )
}

export default AppSection
