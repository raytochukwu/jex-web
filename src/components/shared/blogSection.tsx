'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface Article {
  title: string
  description: string
  url: string
  urlToImage: string
  source: { name: string }
}

const BlogSection: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    const fetchArticles = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY // Use NEXT_PUBLIC_ prefix for client-side env variables
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=${API_KEY}`
        )
        setArticles(res.data.articles)
      } catch (error) {
        console.error('Error fetching articles:', error)
      }
    }

    fetchArticles()
  }, [])
  console.log(articles)
  return (
    <div className="sm:w-full mb-[119px] w-[386px] mx-auto">
      <p className="lg:text-[49px] text-[32px] font-semibold lg:leading-[59px] leading-[42px] text-center text-black font-clash-display mb-[10px]">
        Exploring Possibilities JEX Blog
      </p>
      <p className="text-[16px] font-normal leading-[24px] text-center text-[#757575] font-inter mb-[80px]">
        Dive into the latest trends, insights, and updates in the world of
        cryptocurrencies,
        <br /> blockchain technology, and financial empowerment.
      </p>
      <div className="xl:w-[1277px] w-[386px] xl:h-[506px] mx-auto rounded-[50px] border border-black border-b-[8px] xl:px-[32px] px-[0px] xl:py-[49px] py-[25px] flex xl:flex-row flex-col justify-center items-center gap-[26px]">
        {articles.slice(0, 3).map((article, index) => (
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="xl:w-[386px] w-[354px] h-full"
            key={index}
          >
            <div className="mb-[28px] xl:w-[386px] w-[354] xl:h-[270px] h-[248px]">
              <img
                src={article.urlToImage}
                alt="hand"
                className="w-full h-full"
              />
            </div>
            <p className="font-inter font-extrabold text-[14px] leading-[18px] text-[#863DFF] mb-[5px]">
              News
            </p>
            <p className="font-clash-display lg:text-[23px] text-[20px] leading-[27px] font-medium text-black">
              {article.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default BlogSection