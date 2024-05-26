import React from 'react'

interface BlogCardProps {
  image: string
  topic: string
  message: string
}

const BlogCard: React.FC<BlogCardProps> = ({ image, topic, message }) => {
  return (
    <div className="w-full  rounded-[20px] ">
      <div className="h-[435px] w-full mb-[31px] rounded-[20px]  ">
        <img
          src={image}
          alt={topic}
          className="w-full h-full rounded-[20px] "
        />
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
