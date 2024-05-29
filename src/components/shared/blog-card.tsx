import Image from 'next/image'
import React from 'react'

interface BlogCardProps {
  image: string
  topic: string
  message: string
}

const BlogCard: React.FC<BlogCardProps> = ({ image, topic, message }) => {
  return (
    <div className="w-full  rounded-[20px] ">
      <div
        className="h-[435px] w-full mb-[31px] rounded-[20px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Optionally, you can add an overlay or content inside this div */}
      </div>
      <p className=" font-semibold text-[24px] text-black leading-5 font-clash-display mb-[10px]">
        {' '}
        {topic}
      </p>
      <p className=" font-normal text-[20px] text-black leading-7 font-clash-display mb-[10px]">
        {message}
      </p>
    </div>
  )
}

export default BlogCard
