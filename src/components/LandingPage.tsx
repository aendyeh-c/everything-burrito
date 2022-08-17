import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className='landing-page-container'>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default LandingPage