import React from 'react'
import LeftPart from './LeftPart'
import modelImg from '../../assets/model.png'

const RightPart = () => {
  return (
    <div className='absolute top-1/20000 ml-[650px]'>
      <div>
        <img className='w-300 h-150 drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]' src={modelImg} alt='Model'></img>
      </div>
    </div>
  )
}

export default RightPart
