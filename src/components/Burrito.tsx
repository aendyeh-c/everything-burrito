import React from 'react'
import burritoSvg from './../assets/burrito.svg'

type Props = {
  foo?: number
}

function Burrito({ foo }: Props) {
  return (
    <div className='burrito-wrapper'>
      <img src={burritoSvg} alt="burrito" />
    </div>
  )
}

export default Burrito