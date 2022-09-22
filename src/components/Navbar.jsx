import React,{useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook,FaTwitter,FaYoutube,FaPinterest,FaInstagram} from 'react-icons/fa'

export default function Navbar() {
    const[nav,setNav]=useState(false) 
    const [logo ,setLogo]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
        setLogo(!logo)
    }
  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div >
        <h1 className={logo ? 'hidden TextTransition' : 'block TextTransition'}>TravelGram.</h1>
      </div>
      <ul className='hidden md:flex'>
        <li className='TextTransition'>Home</li>
        <li className='TextTransition'>Destination</li>
        <li className='TextTransition'>Travel</li>
        <li className='TextTransition'>View</li>
        <li className='TextTransition'>Book</li>
      </ul>
      <div className='hidden md:flex'>
        <BiSearch className='mr-2 cursor-pointer ' size={20}/>
        <BsPerson className='cursor-pointer' size={20}/>
      </div>
      {/* hamburger */}
      <div onClick={handleNav} className='md:hidden  z-10'>
        {nav ? <AiOutlineClose size={20} className="text-black"/> :<HiOutlineMenuAlt4 size={20}/>}
        
      </div>
      {/* mobile dropdown menu */}
      <div className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col md:hidden' : 'absolute left-[-100%] md:hidden ' }>
        <ul>
            <h1>TravelGram.</h1>
        <li className='border-b TextTransitionNavbarMenu'>Home</li>
        <li className='border-b TextTransitionNavbarMenu'>Destination</li>
        <li className='border-b TextTransitionNavbarMenu'>Travel</li>
        <li className='border-b TextTransitionNavbarMenu'>View</li>
        <li className='border-b TextTransitionNavbarMenu'>Book</li>
        <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
        </div>
        <div className='flex justify-between my-6'>
            <FaFacebook className='icon'/>
            <FaTwitter className='icon'/>
            <FaInstagram className='icon'/>
            <FaPinterest className='icon'/>
            <FaYoutube className='icon'/>
        </div>
        </ul>
      </div>
    </div>
  )
}
