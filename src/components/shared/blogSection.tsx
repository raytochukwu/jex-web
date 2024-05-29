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
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get('/api/fetchArticles')
        console.log('Fetched Articles:', res.data.articles)
        setArticles(res.data.articles)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching articles:', error)
        setError('Failed to fetch articles')
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }
  const randomArticles = shuffleArray([...articles]).slice(0, 3)
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
        {randomArticles?.map((article, index) => (
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="xl:w-[386px] w-[354px] h-full"
            key={index}
          >
            <div
              className="mb-[28px] xl:w-[386px] w-[354] xl:h-[270px] h-[248px]  bg-cover bg-center "
              style={{ backgroundImage: `url(${article.urlToImage})` }}
            ></div>
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
