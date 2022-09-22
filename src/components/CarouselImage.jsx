import React from 'react'

export default function CarouselImage(props) {
    const{imgUrl,index}=props
  return (
    <div className={`carousel-item ${index===0? 'active':''}`}>
        <img src={imgUrl} className="d-block  w-full h-[450px] object-cover" alt="/"/>
    </div>
  )
}
