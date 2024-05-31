'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BlogSection from '../shared/blogSection'
import AppSection from '../shared/appSection'
import Future from '../shared/future'
import Footer from '../shared/footer'
import Header from '../shared/header'
import CryptoChart from '../shared/chart'
import { RiSearchLine } from 'react-icons/ri'
import Link from 'next/link'

interface Crypto {
  id: string
  name: string
  symbol: string
  image: string
  market_cap: number
  current_price: number
  price_change_percentage_24h: number
  high_24h: number
  low_24h: number
}

const Market = () => {
  const [cryptoData, setCryptoData] = useState<Crypto[]>([])
  const [search, setSearch] = useState<string>('')
  const [filteredData, setFilteredData] = useState<Crypto[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 11

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Crypto[]>(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
            },
          }
        )
        setCryptoData(response.data)
        setFilteredData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    setFilteredData(
      cryptoData.filter((crypto) =>
        crypto.name.toLowerCase().includes(search.toLowerCase())
      )
    )
    setCurrentPage(1) // Reset to first page on search change
  }, [search, cryptoData])

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  return (
    <div className="w-full">
      <div
        className="relative w-full mb-[100px]  bg-repeat-x"
        style={{ backgroundImage: 'url("/images/BACKGROUND.png")' }}
      >
        <Header />

        <div className="xl:w-[1268px]  mx-auto p-4 pt-[100px] text-black">
          <h1 className="lg:text-[48px] text-[40px] font-clash-display font-bold lg:mt-[80px] mt-[31px] mb-[24px] text-center lg:leading-[24px] leading-[46px]">
            First-hand Insight into the Market
          </h1>
          <p className=" font-inter text-[20px] font-normal text-center mb-[40px] leading[30px]">
            24hrs metrics that help you understand the market.{' '}
          </p>

          <div
            className=" lg:w-[438px]  w-[376px]  py-[20px] mx-auto  px-[16px] mb-[66px]  gap-[12px] rounded-[30px] items-center  flex "
            style={{
              borderWidth: '1px 6px 8px 1px',
              borderStyle: 'solid',
              borderColor: '#070A26',
              background: '#FAFFEA',
            }}
          >
            <RiSearchLine />
            <input
              type="text"
              placeholder="Search for an asset"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="overflow-x-scroll">
            <table className="w-[1230px] bg-white  ">
              <thead
                className="w-full mb-[10px]  text-left h-[84px] border border-black  "
                style={{ borderRadius: '25px' }}
              >
                <tr>
                  <th className="pl-[47px]   ">Name</th>
                  <th className="text-center">IC</th>
                  <th className="text-center">Market Cap</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Change</th>
                  <th className="text-center">Chart</th>
                  <th className="text-center">Trade Now</th>
                </tr>
              </thead>

              <tbody className=" w-full  border border-black ">
                {currentItems.map((crypto) => (
                  <tr
                    key={crypto.id}
                    className="border-t border-gray-200 gap-[32px] "
                  >
                    <td className="py-2 px-4 flex items-center gap-[32px] ">
                      <img src={crypto.image} className="w-[54px] h-[54px] " />
                      {crypto.name}
                    </td>
                    <td className="py-2 px-4">{crypto.symbol.toUpperCase()}</td>
                    <td className="py-2 px-4">
                      ${crypto.market_cap.toLocaleString()}
                    </td>
                    <td className="py-2 px-4">
                      ${crypto.current_price.toFixed(2)}
                    </td>
                    <td
                      className={`py-2 px-4 ${
                        crypto.price_change_percentage_24h >= 0
                          ? 'text-green-500'
                          : 'text-red-500'
                      }`}
                    >
                      {crypto.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td className="py-2 px-4 w-[213px]">
                      <CryptoChart
                        high={crypto.high_24h}
                        low={crypto.low_24h}
                      />
                    </td>
                    <td className="py-2 px-4">
                      <Link href="/contact " passHref>
                        <button className="text-blue-500 hover:underline">
                          Trade Now
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className=" w-[172px]  py-[8px]   px-[12px]  gap-[12px] rounded-[30px] items-center justify-center flex "
              style={{
                borderWidth: '1px 6px 8px 1px',
                borderStyle: 'solid',
                borderColor: '#070A26',
                background: 'white',
              }}
            >
              Previous
            </button>

            <span className="px-4 py-2">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className=" w-[172px]  py-[8px]   px-[12px]  gap-[12px] rounded-[30px] items-center justify-center flex "
              style={{
                borderWidth: '1px 6px 8px 1px',
                borderStyle: 'solid',
                borderColor: '#070A26',
                background: 'white',
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <BlogSection />
      <AppSection />
      <Future />
      <Footer />
    </div>
  )
}

export default Market
