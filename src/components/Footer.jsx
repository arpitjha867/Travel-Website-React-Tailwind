import React from 'react'
import {FaFacebook,FaTwitter,FaYoutube,FaPinterest,FaInstagram} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='w-full bg-gray-100 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
            <h1>TravelGram.</h1>
            <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon '/>
            <FaTwitter className='icon '/>
            <FaInstagram className='icon '/>
            <FaPinterest className='icon '/>
            <FaYoutube className='icon '/>                
            </div>
        </div>
        <div className='flex justify-between'>
            <ul className='lg:flex'>
                <li className='cursor-pointer TextTransition'>About</li>
                <li className='cursor-pointer TextTransition'>Partnership</li>
                <li className='cursor-pointer TextTransition'>Careers</li>
                <li className='cursor-pointer TextTransition'>Newsroom</li>
                <li className='cursor-pointer TextTransition'>Advertising</li>
            </ul>
            <ul className='text-rigth lg:flex'>
                <li className='cursor-pointer TextTransition'>Home</li>
                <li className='cursor-pointer TextTransition'>Destinations</li>
                <li className='cursor-pointer TextTransition'>Travel</li>
                <li className='cursor-pointer TextTransition'>View</li>
                <li className='cursor-pointer TextTransition'>Book</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
