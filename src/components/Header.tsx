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
      <div className='header-buttons'>
        <nav className='header-nav'>
          <a href='route'>
            <div className='padded-button'>
              <span>Home</span>
            </div>
          </a>
          <a href='route'>
            <div className='padded-button'>
              <span>About</span>
            </div>
          </a>
        </nav>
        <div className='header-actions'>
          <a href='route'>
            <div className='padded-button'>
              <div>Sign up</div>
            </div>
          </a>
          <a href='route'>
            <div className='padded-button'>
              Sign in
            </div>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header