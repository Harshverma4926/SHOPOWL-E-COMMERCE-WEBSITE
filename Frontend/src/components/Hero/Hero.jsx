import React from 'react'
import DarkVeil from './DarkVeil';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

const Hero = () => {
  return (
    <div className='relative w-full h-[600px]'>
<div className='w-full h-full relative'>
  <DarkVeil
  hueShift={0}
  noiseIntensity={0}
  scanlineIntensity={0}
  speed={1.4}
  scanlineFrequency={0}
  warpAmount={0}
/>
</div>
<LeftPart/>
<RightPart/>
    </div>
  )
}

export default Hero
