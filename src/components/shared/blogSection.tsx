import React from 'react'
import Image from 'next/image'

const BlogSection = () => {
  return (
    <div className="sm:w-full mb-[119px] w-[386px] mx-auto">
      <p className=" lg:text-[49px] text-[32px] font-semibold lg:leading-[59px] leading-[42px] text-center text-black font-clash-display mb-[10px]">
        {' '}
        Exploring Possibilities JEX Blog
      </p>
      <p className=" text-[16px] font-normal leading-[24px] text-center text-[#757575] font-inter mb-[80px]">
        Dive into the latest trends, insights, and updates in the world of
        cryptocurrencies,
        <br /> blockchain technology, and financial empowerment.
      </p>
      <div className="xl:w-[1277px] w-[386px]  xl:h-[455px] mx-auto rounded-[50px] border border-black border-b-[8px] xl:px-[32px] px-[0px] xl:py-[49px] py-[25px] flex xl:flex-row flex-col justify-center items-center gap-[26px]">
        <div className="xl:w-[386px] w-[354px]  h-full">
          <div className="mb-[28px]">
            <Image src="/images/cry1.png" alt="hand" width={386} height={270} />
          </div>
          <p className="font-inter font-extrabold text-[14px] leading-[18px] text-[#863DFF] mb-[5px]">
            Case Study
          </p>
          <p className=" font-clash-display lg:text-[23px] text-[20px] leading-[27px] font-medium text-black">
            Mastering Subscription Chaos: Your Guide to Streamlined Spending
          </p>
        </div>
        <div className="xl:w-[386px] w-[354px]  h-full">
          <div className="mb-[28px]">
            <Image src="/images/cry2.png" alt="hand" width={386} height={270} />
          </div>
          <p className="font-inter font-extrabold text-[14px] leading-[18px] text-[#863DFF] mb-[5px]">
            News
          </p>
          <p className=" font-clash-display  lg:text-[23px] text-[20px]  leading-[27px] font-medium text-black">
            AI and Your Financial Future: The Power of Data-Driven Decisions
          </p>
        </div>
        <div className="xl:w-[386px] w-[354px]  h-full">
          <div className="mb-[28px]">
            <Image src="/images/cry3.png" alt="hand" width={386} height={270} />
          </div>
          <p className="font-inter font-extrabold text-[14px] leading-[18px] text-[#863DFF] mb-[5px]">
            News
          </p>
          <p className=" font-clash-display  lg:text-[23px] text-[20px]  leading-[27px] font-medium text-black">
            Cashback Rewards Unleashed: Maximizing Savings with Memphis
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogSection
