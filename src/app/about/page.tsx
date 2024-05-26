// import AboutUs from '@accounts/components/pages/about-us'
import React from 'react'
import dynamic from 'next/dynamic'
const AboutUs = dynamic(() => import('@accounts/components/pages/about-us'), {
  ssr: false,
})

const Page = () => {
  return (
    <div>
      <AboutUs />
    </div>
  )
}

export default Page
