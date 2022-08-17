import React from 'react'
import burritoSvg from './../assets/burrito.svg'

type Props = {
  scale?: number
}

function Burrito({ scale = 0.1 }: Props) {
  return (
    <div className='burrito-wrapper'>
      <img src={burritoSvg} alt="burrito" style={{width: `${scale * 100}%`}} />
    </div>
  )
}

export default Burrito