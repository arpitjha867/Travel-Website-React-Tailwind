import React from 'react'

export default function SelectsCard(props) {
    const {imgSrc,imgTitle}=props
  return (
    <div className='relative'>
        <img src={imgSrc} alt="/" className='h-full w-full object-cover '/>
        <div className='bg-gray-900/30 w-full h-full top-0 left-0 absolute  selectCardImg   cursor-pointer'>
            <p className='absolute text-white left-4 bottom-4 text-2xl font-bold '>{imgTitle}</p>
        </div>
    </div>
  )
}
