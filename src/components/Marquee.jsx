import React from 'react'

const Marquee = ({imageurls}) => {
  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
       {imageurls.map(url=> <img className='w-[6vw] flex-shrink-0' src={url}/>)}
       {/* {imageurls.map(url=> <img className='flex-shrink-0' src={url}/>)} */}
    </div>
  )
}

export default Marquee