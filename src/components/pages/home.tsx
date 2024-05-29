'use client'
import React, { useState, useEffect, ChangeEvent } from 'react'
import axios from 'axios'
import Header from '../shared/header'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { FiMail } from 'react-icons/fi'
import { BiMessageRoundedDetail } from 'react-icons/bi'
import { GrDocumentPerformance } from 'react-icons/gr'
import { FcMoneyTransfer } from 'react-icons/fc'
import { FiArrowRight } from 'react-icons/fi'
import { HiOutlineRefresh } from 'react-icons/hi'
import { GiTwoCoins } from 'react-icons/gi'
import Image from 'next/image'
import { RiBtcLine } from 'react-icons/ri'
import { BiGift } from 'react-icons/bi'
import { MdOutlineGppGood } from 'react-icons/md'
import { FiZap } from 'react-icons/fi'
import { FaRegFaceLaugh } from 'react-icons/fa6'
import Footer from '../shared/footer'
import Future from '../shared/future'
import AppSection from '../shared/appSection'
import BlogSection from '../shared/blogSection'
import Link from 'next/link'

interface CryptoCurrency {
  id: string
  name: string
  symbol: string
  image: string
}

const LandingPage = () => {
  const customDivClass = `md:text-[24px] text-[18px] md:w-[368px] w-[320px] h-[67px] flex items-center border md:border-b-[10px] border-b-[8px] md:border-r-[10px] border-r-[8px] rounded-[68px] border-black font-inter font-semibold leading-[30px]`
  const phoneNumber = '2348132865565' // Replace with your phone number in international format
  const preFilledMessage = 'Hello, I would like to chat with you!' // Replace with your pre-filled message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    preFilledMessage
  )}`

  const [fiatCurrencies, setFiatCurrencies] = useState<string[]>([])
  const [cryptoCurrencies, setCryptoCurrencies] = useState<CryptoCurrency[]>([])
  const [fiatCurrency, setFiatCurrency] = useState<string>('usd')
  const [cryptoCurrency, setCryptoCurrency] = useState<string>('bitcoin')
  const [usdAmount, setUsdAmount] = useState<number>(1)
  const [cryptoAmount, setCryptoAmount] = useState<number>(0)
  const [exchangeRate, setExchangeRate] = useState<number>(0)
  const [exchange, setExchange] = useState<boolean>(false)

  useEffect(() => {
    const fetchFiatCurrencies = async () => {
      try {
        const response = await axios.get<string[]>(
          'https://api.coingecko.com/api/v3/simple/supported_vs_currencies'
        )
        setFiatCurrencies(response.data)
      } catch (error) {
        console.error('Error fetching fiat currencies:', error)
      }
    }

    const fetchCryptoCurrencies = async () => {
      try {
        const response = await axios.get<CryptoCurrency[]>(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 100,
              page: 1,
              sparkline: false,
            },
          }
        )
        setCryptoCurrencies(response.data)
      } catch (error) {
        console.error('Error fetching crypto currencies:', error)
      }
    }

    fetchFiatCurrencies()
    fetchCryptoCurrencies()
  }, [])

  useEffect(() => {
    const fetchExchangeRate = async () => {
      const cryptoCurrencyData = cryptoCurrencies.find(
        (currency) => currency.id === cryptoCurrency
      )
      if (!cryptoCurrencyData) {
        console.error('Cryptocurrency not found')
        return
      }

      try {
        const response = await axios.get<{
          [key: string]: { [key: string]: number }
        }>(
          `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoCurrencyData.id}&vs_currencies=${fiatCurrency}`
        )
        const rate = response.data[cryptoCurrencyData.id][fiatCurrency]
        setExchangeRate(rate)
        setCryptoAmount(usdAmount / rate)
      } catch (error) {
        console.error('Error fetching exchange rate:', error)
      }
    }

    if (cryptoCurrencies.length > 0) {
      fetchExchangeRate()
    }
  }, [fiatCurrency, cryptoCurrency, usdAmount, cryptoCurrencies, exchange])

  const handleUsdChange = (e: ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(e.target.value)
    setUsdAmount(amount)
    setCryptoAmount(amount / exchangeRate)
  }

  const handleCryptoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(e.target.value)
    setCryptoAmount(amount)
    setUsdAmount(amount * exchangeRate)
  }

  return (
    <div className="w-full ">
      <div
        className="relative w-full h-[1091px]  bg-repeat-x  md:mb-0 mb-[126px]"
        style={{ backgroundImage: 'url("/images/BACKGROUND.png")' }}
      >
        <Header />
        <div className="w-full lg:w-[1280px] md:pl-[33px] px-[22px] md:pt-[171px] pt-[108px] text-black mx-auto ">
          <Link href="/contact " passHref>
            <div className="flex justify-between items-center  h-[33px] px-[15px] md:w-[355px] w-[314px] bg-[#F3ECFF] rounded-[21px] mb-[10px] ">
              <p className="font-inter  md:text-[14px]  text-[12px] font-normal leading-20 text-left text-black">
                {' '}
                👋 Are you ready to trade you can chat us up.
              </p>
              <MdOutlineKeyboardArrowRight size={18} />
            </div>
          </Link>
          <p className=" lg:w-[940px] font-clash-display md:text-[70px] text-[36px] font-semibold md:leading-[84px]  leading-[46px]  text-left mb-[20px]">
            Unlocking the <br className="  sm:hidden" /> future of{' '}
            <br className=" hidden md:block" />
            Crypto <br className="  sm:hidden" /> Exchange with JEX
          </p>
          <p className="font-inter md:text-[18px]   text-[16px] font-normal md:leading-[28px] leading-[24px] text-left text-[#757575] md:w-[650px]">
            Explore a new era of decentralized possibilities where security
            meets innovation. JEX is forging a connection between cryptocurrency
            and fiat, enabling seamless transaction speed.
          </p>
          <div className="w-full flex justify-between mt-[60px] mb-[113px]">
            <div className="flex gap-4 ">
              <div
                className=" w-[172px] md:py-[16px] py-[10px]  gap-[12px] md:px-[20px]   px-[18px] rounded-[30px] items-center justify-center flex "
                style={{
                  borderWidth: '1px 6px 8px 1px',
                  borderStyle: 'solid',
                  borderColor: '#070A26',
                  background: '#CBFF2E',
                }}
              >
                <p className=" text-[18px] "> Let’s Talk</p>
                <FiMail size={24} />
              </div>
              <Link
                href={whatsappLink}
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className=" w-[172px] md:py-[16px] py-[10px] md:px-[20px]   px-[18px]  gap-[12px] rounded-[30px] items-center justify-center flex "
                  style={{
                    borderWidth: '1px 6px 8px 1px',
                    borderStyle: 'solid',
                    borderColor: '#070A26',
                    background: 'white',
                  }}
                >
                  <p className="pr-[0px] text-[18px] "> Whatsapp</p>
                  <BiMessageRoundedDetail size={24} />
                </div>
              </Link>
            </div>
            <Link href="/market" passHref>
              <div className="w-[220px] hidden   lg:flex md:py-[16px] py-[10px] md:px-[20px]   px-[18px] rounded-tl-[30px] rounded-tr-[30px] rounded-tl-0 rounded-br-[30px] border-t-1 border border-black  border-t-6 border-r-8 border-b-8 border-l-6 bg-yellow-200">
                <p className="text-[18px] pr-[12px] "> Check Insights </p>
                <GrDocumentPerformance size={20} />
              </div>
            </Link>
          </div>
        </div>

        <div className="xl:w-[1280px] max-w-[1280px]mb-[89px] border border-b-[13px] md:pt-[44px] py-[30px] md:pb-[39px] px-[29px] md:px-[48px]  mx-[22px] md:[0px] border-black bg-[#DDE0FF] text-black  rounded-[30px] lg:mx-auto">
          <div className=" flex-col flex md:flex-row justify-between items-center md:mb-[26px] mb-[18px] w-full">
            <p className="font-inter font-semibold leading-10 md:text-[36px] text-[30px]">
              Exchange
            </p>
            <div className="flex justify-between items-center">
              <div className="bg-white  h-[50px] md:mr-[14px] mr-[12px] rounded-[15px] md:py-[10px] py-[8px] md:px-[11px] px-[8px] flex items-center justify-between">
                <p className="md:text-[20px] text-[16px]  font-medium leading-8">
                  1 {cryptoCurrency.toUpperCase()}
                </p>
                {/* <MdKeyboardArrowDown size={24} /> */}
              </div>
              <FiArrowRight size={16} />
              <p className="md:text-[24px] text-[20px] font-semibold leading-8 md:ml-[14px] ml-[12px] mr-[12px] md:mr-[14px]">
                {exchangeRate}
              </p>
              <p className="md:text-[24px] text-[18px] font-semibold leading-8 md:ml-[14px] ml-[12px] mr-[12px] md:mr-[14px]">
                {fiatCurrency.toUpperCase()}
              </p>
              <div
                onClick={() => setExchange(!exchange)}
                className="md:h-[32px] cursor-pointer h-[20px] md:w-[32px]  w-[20px] bg-[#CBFF2E] rounded-[50%] flex justify-center items-center"
              >
                <HiOutlineRefresh size={20} />
              </div>
            </div>
          </div>
          <div className=" flex-col md:flex-row sm:flex  justify-center    items-center w-full">
            <div
              className={`${customDivClass} bg-white mr-[18px]  pl-[32px] pr-[21px] py-[12px] justify-between mb-[27px] md:mb-0 `}
            >
              <input
                type="number"
                value={usdAmount}
                onChange={handleUsdChange}
                style={{ width: '45%' }}
              />
              <div className=" border-l-[1px] border-black h-full pl-[12px] flex items-center">
                <div className="h-[31px] w-[31px] rounded-[50%] bg-[#CBFF2E] flex justify-center items-center mr-[8px]">
                  <FcMoneyTransfer size={20} />
                </div>
                <select
                  value={fiatCurrency}
                  onChange={(e) => setFiatCurrency(e.target.value)}
                  style={{ width: '60%' }}
                >
                  {fiatCurrencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div
              className={`${customDivClass} bg-white mr-[42px]  pl-[32px] pr-[21px] py-[12px] justify-between mb-[27px] md:mb-0 `}
            >
              <input
                type="number"
                value={cryptoAmount}
                onChange={handleCryptoChange}
                style={{ width: '60%', marginRight: '20px' }}
              />
              <div className=" border-l-[1px] border-black h-full pl-[12px] flex items-center justify-end">
                <div className="h-[31px] w-[31px] rounded-[50%] bg-[#F7931A] flex justify-center items-center mr-[8px]">
                  <GiTwoCoins color="white" size={20} />
                </div>
                <select
                  value={cryptoCurrency}
                  onChange={(e: any) => setCryptoCurrency(e.target.value)}
                  style={{ width: '70%', marginRight: '0', paddingRight: '0' }}
                >
                  {cryptoCurrencies.map((currency) => (
                    <option key={currency.id} value={currency.id}>
                      {currency.symbol.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div
              onClick={() => setExchange(!exchange)}
              className={`${customDivClass} bg-[#CBFF2E]  cursor-pointer justify-center `}
            >
              Exchange
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px[32px] ">
        <div className=" xl:w-[1280px] xl:h-[192px] text-black mx-auto flex items-center pl-[30px] bg-no-repeat bg-right mb-[54px] xl:bg-[url('/images/half.png')] ">
          <p className="lg:text-[40px]  text-[32px] font-semibold leading-10 font-clash-display">
            {' '}
            Discover JEX's Unique Advantages
          </p>
        </div>
        <div className="xl:w-[1280px] xl:pl-[30px] mx-auto flex xl:flex-row flex-col justify-center items-center gap-[59px]  mb-[126px]">
          <div className="w-[365px] h-[347px] p-[20px] border border-black rounded-[20px] ">
            <div className="mb-[15px]">
              <Image
                src="/images/hand.svg.png"
                alt="hand"
                width={105}
                height={105}
              />
            </div>
            <p className=" font-semibold text-[30px] leading-7 font-clash-display text-black mb-[15px]">
              Instant Transactions
            </p>
            <p className=" font-inter font-normal text-[18px] leading-7 text-[#757575]">
              Experience the efficiency and swiftness of transactions
              facilitated by JEX, ensuring that your trading activities are
              executed seamlessly and without delay.
            </p>
          </div>
          <div className="w-[365px] h-[347px] p-[20px] border border-black rounded-[20px] bg-[#FAFFEA] ">
            <div className="mb-[15px]">
              <Image
                src="/images/world.svg.png"
                alt="hand"
                width={105}
                height={105}
              />
            </div>
            <p className=" font-semibold text-[30px] leading-7 font-clash-display text-black mb-[15px]">
              Empowering Users
            </p>
            <p className=" font-inter font-normal text-[18px] leading-7 text-[#757575]">
              Access valuable cryptocurrency insights and educational courses
              through JEX’s training program
            </p>
          </div>
          <div className="w-[365px] h-[347px] p-[20px] border border-black rounded-[20px] ">
            <div className="mb-[15px]">
              <Image
                src="/images/star.svg.png"
                alt="hand"
                width={105}
                height={105}
              />
            </div>
            <p className=" font-semibold text-[30px] leading-7 font-clash-display text-black mb-[15px]">
              Privacy Protection
            </p>
            <p className=" font-inter font-normal text-[18px] leading-7 text-[#757575]">
              Enhance your financial confidentiality through advanced security
              protocols, safeguarding the confidentiality and integrity of
              your transactions.
            </p>
          </div>
        </div>
        <div className="xl:w-[1283px] mb-[119px] xl:mx-auto xl:h-[530px] h-[814px] lg:px-[31px] px-[15px] mx-[21px]  py-[10px] border border-black rounded-[50px] flex xl:flex-row flex-col bg-[#FAFFEA]">
          <div className="h-full w-full  xl:pl-[31px] pt-[62px]  ">
            <div className="md:w-[562px] mx-auto">
              <p className=" font-clash-display font-semibold xl:text-[42px] text-[32px] leading-[43px] text-black mb-[20px]">
                Never get confused of where to trade your Crypto assets
              </p>
              <p className="xl:text-[18px] text-[16px] leading-7 font-normal font-inter text-[#808080] mb-[20px]">
                Trade your Crypto assets seamlessly with clarity and confidence.
                Stay focused and avoid confusion with the right trading
                platform.
              </p>
              <div className="flex  items-center mb-[20px] w-[177px]">
                <div className="h-[42px] w-[42px] bg-[#CBFF2E] flex justify-center text-black items-center mr-[10px]   rounded-[50%]">
                  <RiBtcLine size={24} />
                </div>
                <p className="text-[15px] font-clash-display text-black font-semibold leading-6 ">
                  Cryptocurrency
                </p>
              </div>
              <div className="flex  items-center mb-[20px] w-[177px]">
                <div className="h-[42px] w-[42px] bg-[#CBFF2E] flex justify-center text-black items-center  mr-[10px] rounded-[50%]">
                  <BiGift size={24} />
                </div>
                <p className="text-[15px] font-clash-display text-black  font-semibold leading-6 ">
                  Gift Cards
                </p>
              </div>
            </div>
          </div>
          <div className="h-full w-full flex justify-center items-center bg-no-repeat bg-center bg-contain bg-[url('/images/woman.png')]"></div>
        </div>
        <div className="xl:w-[1283px] mb-[119px] xl:mx-auto xl:h-[530px] h-[901px] lg:px-[31px] px-[15px] mx-[21px] py-[10px] border border-black rounded-[50px] flex xl:flex-row flex-col bg-[#DDE0FF]">
          <div className="h-full w-full flex justify-center items-center bg-no-repeat bg-center bg-contain bg-[url('/images/man.png')]  "></div>
          <div className="h-full w-full  xl:pl-[31px] pt-[62px] ">
            <div className="md:w-[562px] mx-auto">
              <p className=" font-clash-display font-semibold lg:text-[42px] text-[32px] leading-[43px] text-black mb-[20px]">
                Seamless & swift transaction on the go
              </p>
              <p className="lg:text-[18px] text-[16px] leading-7 font-normal font-inter text-[#808080] mb-[20px]">
                Experience seamless and swift transactions wherever you are.
                Trade on the go with convenience and efficiency, ensuring a
                smooth crypto journey.
              </p>
              <div className="flex  items-center mb-[20px] w-[177px]">
                <div className="h-[42px] w-[42px] bg-[#CBFF2E] flex justify-center text-black items-center mr-[10px]   rounded-[50%]">
                  <MdOutlineGppGood size={24} />
                </div>
                <p className="text-[15px] font-clash-display text-black font-semibold leading-6 ">
                  Secured
                </p>
              </div>
              <div className="flex  items-center mb-[20px] w-[177px]">
                <div className="h-[42px] w-[42px] bg-[#CBFF2E] flex justify-center text-black items-center  mr-[10px] rounded-[50%]">
                  <FiZap size={24} />
                </div>
                <p className="text-[15px] font-clash-display text-black  font-semibold leading-6 ">
                  Quick Response
                </p>
              </div>
              <div className="flex  items-center mb-[20px] ">
                <div className="h-[42px] w-[42px] bg-[#CBFF2E] flex justify-center text-black items-center  mr-[10px] rounded-[50%]">
                  <FaRegFaceLaugh size={24} />
                </div>
                <p className="text-[15px] font-clash-display text-black  font-semibold leading-6 ">
                  Friendly and Easy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:h-[1247px] h-[928px]  xl:w-[1396px] rounded-[50px] xl:mx-auto mx-[21px] bg-[#070A26] py-[75px] xl:px-[239px] mb-[119px]">
          <p className="xl:text-[73px] text-[32px] font-semibold font-clash-display text-center xl:leading-[81px] leading-[42px]">
            Trade Your Crypto <br /> Assets with JEX
          </p>
          <div className="xl:w-[600px] w-[288px] xl:h-[600px] h-[288px] mx-auto bg-center bg-no-repeat  rounded-[50%] bg-[url('/images/divcoin.png')] lg:bg-contain lg:bg-[url('/images/COIN.png')] xl:my-[125px] mt-[44px] mb-[74px] "></div>
          <div className="flex lg:flex-row flex-col justify-between items-center">
            <div className="mb-[33px] lg:mb-0">
              <p className="font-clash-display font-medium text-[24px] leading-8 text-white text-center mb-[17px]">
                Unleash Limitless Potential
              </p>
              <p className=" font-inter font-normal text-[18px] leading-6 text-center text-[#949494]">
                Be on the team that takes your happiness seriously. JEX is your
                ticket to decentralized possibilities.
              </p>
            </div>
            <div>
              <p className="font-clash-display font-medium text-[24px] leading-8 text-white text-center mb-[17px]">
                Secure Your Transactions
              </p>
              <p className=" font-inter font-normal text-[16px] leading-6 text-center text-[#949494]">
                Trade your Coin with unmatched security, growth potential, and a
                chance to shape the financial landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:w-full mb-[119px] w-[386px] mx-auto ">
          <p className=" lg:text-[49px] text-[32px] font-semibold lg:leading-[59px] leading-[42px] text-center text-black font-clash-display mb-[10px]">
            {' '}
            What can you Buy/
            <br className=" block lg:hidden" />
            Trade <br className=" hidden lg:block" /> with us?
          </p>
          <p className=" text-[16px]  font-normal leading-[24px] text-center text-[#757575] font-inter mb-[80px]">
            Explore diverse options: cryptocurrencies, gift cards, money pick up
            and
            <br className=" hidden lg:block" /> more. Unlock endless
            possibilities for buying and trading with our
            <br className=" hidden lg:block" />
            platform.
          </p>
          <div className="xl:w-[1277px] w-[386px]  xl:h-[455px] mx-auto rounded-[50px] border border-black border-b-[8px] xl:px-[32px] px-[0px] xl:py-[49px] py-[25px] flex xl:flex-row flex-col justify-center items-center gap-[59px]">
            <div className="h-full w-[365px] p-[20px] border border-black rounded-[20px] border-b-[8px]">
              <div className="mb-[15px]">
                <Image
                  src="/images/crypt.png"
                  alt="hand"
                  width={80}
                  height={80}
                />
              </div>
              <p className=" font-semibold text-[30px] leading-7 font-clash-display text-black mb-[15px]">
                Buy & Sell Crypto
              </p>
              <p className=" font-inter font-normal text-[18px] leading-[24px] text-[#757575]">
                Discover our unique trading speed that enables users easily sell
                their crypto for fiat and vice versa
              </p>
            </div>
            <div className="h-full w-[365px] p-[20px] border border-black rounded-[20px] bg-[#FAFFEA] ">
              <div className="mb-[15px]">
                <Image
                  src="/images/gift.png"
                  alt="hand"
                  width={80}
                  height={80}
                />
              </div>
              <p className=" font-semibold text-[30px] leading-7 font-clash-display text-black mb-[15px] ">
                Gift Card to Cash
              </p>
              <p className=" font-inter font-normal text-[18px] leading-[24px] text-[#757575]">
                We alleviate the inconvenience of potential scams or incomplete
                compensation for your gift card's value by offering the most
                competitive rates.
              </p>
            </div>
            <div className="h-full w-[365px] p-[20px] border border-black rounded-[20px] border-b-[8px]">
              <div className="mb-[15px]">
                <Image
                  src="/images/pay.png"
                  alt="hand"
                  width={80}
                  height={80}
                />
              </div>
              <p className=" font-semibold text-[30px] leading-7 font-clash-display text-black mb-[15px]">
                Crypto Education
              </p>
              <p className=" font-inter font-normal text-[18px] leading-[24px] text-[#757575]">
                Not only do we prioritize the efficiency of converting your
                cryptocurrency assets, but we also provide exclusive crypto
                insights and signals aimed at optimizing your profit potential
                in the cryptocurrency market.
              </p>
            </div>
          </div>
        </div>
        <BlogSection />
        <AppSection />
        <Future />
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage
