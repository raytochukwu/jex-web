'use client'
import React, { useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { TiMessages } from 'react-icons/ti'
import { RiMenu2Fill } from 'react-icons/ri'
import { ImCancelCircle } from 'react-icons/im'

const Header = () => {
  const pathname = usePathname()
  const [menu, setMenu] = useState(false)

  const menustyle = 'py-[8px] px-[14px] rounded-[20px] '

  return (
    <>
      <nav className="absolute top-0 w-full h-[96px] flex items-center justify-center ">
        <div className="w-[1315px] h-full px-[30px] py-[16px] flex  justify-between items-center">
          <Link
            href={'/'}
            passHref
            className="text-black md:w-[132px] md:h-[63px]  w-[82px] h-[39px]  flex items-center justify-center py-[10px] px-[10px] border-t-[1px] md:border-r-[6px] md:border-b-[6px] border-r-[3px] border-b-[3px]  border-l-[1px] rounded-[69px] bg-[#FAFFEA] border-black border-opacity-100"
          >
            <Image
              src="/images/logo1.png"
              width={500}
              height={500}
              alt="Logo"
            />
          </Link>
          <div className="md:flex hidden gap-8 items-center justify-center">
            <div className="flex text-[#575757] gap-3 font-inter text-sm font-medium leading-20  h-[36px]">
              <Link
                href="/"
                passHref
                className={`${menustyle}  ${
                  pathname === '/' ? 'bg-gray-200' : ''
                }`}
              >
                Home
              </Link>
              <Link
                href="/market"
                passHref
                className={`${menustyle}   ${
                  pathname === '/market' ? 'bg-gray-200' : ''
                }`}
              >
                Market Insights
              </Link>
              <Link
                href="/about"
                passHref
                className={`${menustyle}   ${
                  pathname === '/about' ? 'bg-gray-200' : ''
                }`}
              >
                About
              </Link>
              <Link
                href="/blog"
                passHref
                className={`${menustyle}   ${
                  pathname === '/blog' ? 'bg-gray-200' : ''
                }`}
              >
                Blog
              </Link>
            </div>
            <Link
              href={'/contact'}
              className=" text-center w-[119px] h-[36px] px-[14px] flex items-center gap-1  rounded-[30px] bg-[#CBFF2E] border-t-[1px] border-r-[6px] hover:border-r-[1px] hover:border-b-[1px] border-b-[8px] border-l-[1px] border-[solid] border-[#070A26]"
            >
              <p className="font-inter text-[14px] font-medium leading-[20px] text-black ">
                Let’s Talk
              </p>
              <TiMessages size={18} color="black" />
            </Link>
          </div>
          <RiMenu2Fill
            size={30}
            color="black"
            className="block md:hidden"
            onClick={() => setMenu(!menu)}
          />
        </div>
      </nav>
      {menu && (
        <div className="h-[932px] w-[430px] bg-[#F3ECFF] absolute top-0 left-0 z-50">
          <div className="h-[72px] w-full justify-end flex items-center px-[22px]">
            <ImCancelCircle
              color="black"
              size={30}
              onClick={() => setMenu(!menu)}
            />
          </div>
          <div className=" text-center pt-[47px] w-full  ">
            <div className="mb-[69px]">
              <Link
                href="/"
                passHref
                className={`${menustyle}  ${
                  pathname === '/' ? 'bg-white' : ''
                } text-black   `}
              >
                Home
              </Link>
            </div>
            <div className="mb-[69px]">
              <Link
                href="/market"
                passHref
                className={`${menustyle}  ${
                  pathname === '/market' ? 'bg-white' : ''
                } text-black  `}
              >
                Market Insights
              </Link>{' '}
            </div>
            <div className="mb-[69px]">
              <Link
                href="/about"
                passHref
                className={`${menustyle}  ${
                  pathname === '/about' ? 'bg-white' : ''
                } text-black   `}
              >
                About
              </Link>{' '}
            </div>
            <div className="mb-[251px]">
              <Link
                href="/blog"
                passHref
                className={`${menustyle}  ${
                  pathname === '/blog' ? 'bg-white' : ''
                } text-black  `}
              >
                Blog
              </Link>
            </div>
            <div className=" flex justify-center w-full">
              <Link
                href={'/contact'}
                className="  w-[119px] h-[36px] px-[14px] flex items-center gap-1  rounded-[30px] bg-[#CBFF2E] border-t-[1px] border-r-[6px] border-b-[8px] border-l-[1px] border-[solid] border-[#070A26]"
              >
                <p className="font-inter text-[14px] font-medium leading-[20px] text-black ">
                  Let’s Talk
                </p>
                <TiMessages size={18} color="black" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
