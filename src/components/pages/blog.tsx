'use client'
import React, { useState, useEffect } from 'react'
import AppSection from '../shared/appSection'
import Future from '../shared/future'
import Footer from '../shared/footer'
import Header from '../shared/header'
import BlogCard from '../shared/blog-card'
import axios from 'axios'

interface Article {
  title: string
  description: string
  url: string
  urlToImage: string
  source: { name: string }
}

const BlogPage: React.FC = () => {
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
  const randomArticles = shuffleArray([...articles])

  return (
    <div className="w-full">
      <div
        className="relative w-full bg-repeat-x pb-[75px] mb-[69px]"
        style={{ backgroundImage: 'url("/images/BACKGROUND.png")' }}
      >
        <Header />
        <div className="xl:pt-[149px] pt-[117px] xl:w-[1216px] xl:mx-auto mx-[21px]">
          <p className="font-semibold xl:text-[52px] text-[36px] xl:leading-[62px] leading-[46px] font-clash-display text-black mb-[30px]">
            We're going to share insightful <br /> stuff along the way.
          </p>
        </div>
        <div className="xl:w-[1290px] sm:px-[21px] mx-auto grid xl:grid-cols-2 h-[1300px] overflow-y-scroll w-[387px] sm:w-full grid-flow-row gap-[42px]">
          {randomArticles?.map((article, index) => (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <BlogCard
                topic={'News'}
                image={
                  article?.urlToImage ? article?.urlToImage : '/images/COIN.png'
                }
                message={article.title}
              />
            </a>
          ))}
        </div>
      </div>
      <AppSection />
      <Future />
      <Footer />
    </div>
  )
}

export default BlogPage
