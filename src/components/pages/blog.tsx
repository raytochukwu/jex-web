'use client'
import React, { useState, useEffect } from 'react'
import AppSection from '../shared/appSection'
import Future from '../shared/future'
import Footer from '../shared/footer'
import Header from '../shared/header'
import BlogCard from '../shared/blog-card'
import dummyData from '../shared/dummy-data'
import axios from 'axios'

interface Article {
  title: string
  description: string
  url: string
  urlToImage: string
  source: { name: string }
}

const BlogPage: React.FC = () => {
  // const [all, setAll] = useState(true)
  // const [investment, setInvestment] = useState(false)
  // const [crypto, setCrypto] = useState(false)
  // const investmentNewsData = dummyData?.filter(
  //   (item) => item.topic === 'Investment News'
  // )
  // const CryptoNewsData = dummyData?.filter(
  //   (item) => item.topic === 'Crypto News'
  // )
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
  return (
    <div className="w-full">
      <div
        className="relative w-full    bg-repeat-x pb-[75px] mb-[69px]"
        style={{ backgroundImage: 'url("/images/BACKGROUND.png")' }}
      >
        <Header />
        <div className="xl:pt-[149px] pt-[117px] xl:w-[1216px] xl:mx-auto mx-[21px] ">
          <p className=" font-semibold xl:text-[52px] text-[36px]  xl:leading-[62px] leading-[46px] font-clash-display text-black mb-[30px]">
            We're going to share insightful <br /> stuff along the way.
          </p>
          {/* <div className=" w-[387px] rounded-[100px] border border-black bg-white border-b-[8px] border-r-[6px] h-[52px] flex mb-[65px]">
            <button
              className={`flex rounded-[100px] justify-center items-center h-full  ${
                all ? 'bg-[#CBFF2E]' : ''
              } px-[30px] text-black`}
              onClick={() => {
                setAll(true), setCrypto(false), setInvestment(false)
              }}
            >
              all
            </button>
            <button
              className={`flex rounded-[100px] justify-center items-center h-full  ${
                investment ? 'bg-[#CBFF2E]' : ''
              } px-[30px] text-black`}
              onClick={() => {
                setAll(false), setCrypto(false), setInvestment(true)
              }}
            >
              Investment
            </button>
            <button
              className={`flex rounded-[100px] justify-center items-center h-full  ${
                crypto ? 'bg-[#CBFF2E]' : ''
              } px-[30px] text-black`}
              onClick={() => {
                setAll(false), setCrypto(true), setInvestment(false)
              }}
            >
              Crypto News
            </button>
          </div> */}
        </div>
        {/* {all && (
          <div className="flex xl:flex-row justify-center items-center xl:justify-start xl:items-start flex-col xl:w-[1216px] w-[387px] sm:w-full gap-[22px] md:px-[21px] mx-auto mb-[81px]">
            <div className="lg:w-[70%]  ">
              {' '}
              <BlogCard
                topic="Case Study"
                message="Mastering Subscription Chaos: Your Guide to Streamlined Spending"
                image="/images/blog1.png.png"
              />{' '}
            </div>
            <div className="lg:w-[30%] ">
              <div className="h-[363px] w-full p-[29px] bg-[#DDE0FF] rounded-[20px] text-[30px] leading-[38px] font-semibold font-inter">
                <p className="text-[25px] leading-[38px] font-semibold font-inter text-black mb-[19px]">
                  Our mission is enabling the magic of coding without learning
                  to code. Email Subscribe
                </p>
                <input
                  type="text"
                  className=" w-full h-[50px] p-[16px] text-[15px] text-[#808080] rounded-[67px] mb-[15px]"
                  placeholder="Email"
                />
                <button className="flex justify-center items-center w-full text-[16px] py-[15px] font-medium border-black leading-[24px] bg-[#CBFF2E] text-black border border-r-[6px] border-b-[8px] rounded-[38px] ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        )} */}

        <div className=" xl:w-[1290px] sm:px-[21px] mx-auto grid xl:grid-cols-2 h-[1300px] overflow-y-scroll  w-[387px] sm:w-full grid-flow-row gap-[42px]">
          {articles.map((article, index) => (
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <BlogCard
                key={index}
                topic={'News'}
                image={article.urlToImage}
                message={article.title}
              />
            </a>
          ))}
        </div>

        {/* {investment && (
          <div className=" xl:w-[1290px] mx-auto grid xl:grid-cols-2 w-[387px] sm:w-full grid-flow-row gap-[42px]">
            {investmentNewsData?.map((post) => (
              <BlogCard
                key={post.id}
                topic={post.topic}
                image={post.image}
                message={post.messages}
              />
            ))}
          </div>
        )}{' '} */}
        {/* {crypto && (
          <div className=" xl:w-[1290px] mx-auto grid xl:grid-cols-2 w-[387px] sm:w-full grid-flow-row gap-[42px]">
            {CryptoNewsData?.map((post) => (
              <BlogCard
                key={post.id}
                topic={post.topic}
                image={post.image}
                message={post.messages}
              />
            ))}
          </div>
        )} */}
      </div>
      <AppSection />
      <Future />
      <Footer />
    </div>
  )
}

export default BlogPage
