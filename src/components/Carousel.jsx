import React from 'react'
// import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import CarouselImage from './CarouselImage'
const sliderData=[
    {
        url:'https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        url:'https://images.unsplash.com/flagged/photo-1557899775-24a0957d3895?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        url:'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        url:'https://images.unsplash.com/photo-1532254497630-c74966e79621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        url:'https://images.unsplash.com/photo-1547594022-1e40e87849e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
]

export default function Carousel() {
    // const [slide , setSlide]=useState(0)
    // const length=sliderData.length
    // const prevHandle=()=>{
    //     setSlide(slide===0 ? length-1:slide-1)
    // }
    // const nextHandle=()=>{
    //     setSlide(slide===length-1 ? 0 : slide+1)
    // }
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        <div id="carouselExampleControls" className="carousel slide w-[800px] h-[450px] " data-bs-ride="carousel">
            <div className="carousel-inner">
                {
                    sliderData.map((element,index)=>{
                        return <CarouselImage imgUrl={element.url} index={index} />
                    })
                }

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}
