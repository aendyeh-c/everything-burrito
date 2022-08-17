import React from 'react'
import Burrito from './Burrito'
import './Header.scss'

type Props = {}

function Header(props: Props) {
  return (
    <header className='header-landing'>
      <div className='header-logo'>
        <Burrito scale={0.4} />
      </div>
      <div className='header-buttons c'>
        <nav className='header-nav'>
          <div className='padded-button'>
            <span>Home</span>
          </div>
          <div className='padded-button'>
            <span>About</span>
          </div>
        </nav>
        <div className='header-actions'>
          <div className='padded-button'>
            <div>Sign up</div>
          </div>
          <div className='padded-button'>
            Sign in
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header