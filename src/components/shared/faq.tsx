'use client'
import { useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { RiArrowUpSLine } from 'react-icons/ri'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  data: FAQItem[]
}

const FAQ: React.FC<FAQProps> = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [up, setUp] = useState<boolean>(false)

  const toggleAccordion = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index))
    setUp(!up)
  }

  return (
    <div className="lg:w-[834px] w-[387px] mx-auto py-[125px]">
      <div>
        <p className="mb-[10px] font-semibold xl:text-[49px] text-[36px] leading-[59px] font-clash-display text-black text-center  ">
          FAQS
        </p>
        <p className=" text-inter xl:text-[16px] text-[15px] leading-6 text-center font-normal mb-[67px] text-[#757575]">
          Find answers to commonly asked questions, addressing queries and
          <br />
          concerns to enhance your understanding and experience with us.
        </p>
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className="faq-item  mb-[25px] w-full  border border-r-[11px] border-b-[10px] rounded-[20px] border-black "
        >
          <div
            className={`question ${
              expandedIndex === index ? 'open' : ''
            } text-black px-[30px] py-[20px]  bg-[#FAFAFA] rounded-[20px] flex justify-between items-center font-semibold lg:text-[32px] text-[20px] leading-10 font-clash-display`}
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
            {up && expandedIndex === index ? (
              <div className="h-[42px] w-[42px] bg-black rounded  flex justify-center items-center ">
                <RiArrowUpSLine size={25} color="#CBFF2E" />
              </div>
            ) : (
              <div className="h-[42px] w-[42px] bg-[#CBFF2E] rounded  flex justify-center items-center ">
                <RiArrowDownSLine size={25} />
              </div>
            )}
          </div>
          {expandedIndex === index && (
            <div className="answer text-inter px-[62px]  pb-[39px] pt-[15px] text-[16px] text-[#757575] leading-6 ">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FAQ
