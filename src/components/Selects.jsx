import React from 'react'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import KeyWest from '../assets/keywest.jpg'
import SelectsCard from './SelectsCard'

export default function Selects() {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      <SelectsCard imgSrc={BoraBora} imgTitle={'Borabora'}/>
      <SelectsCard imgSrc={BoraBora2} imgTitle={'West Indies'}/>
      <SelectsCard imgSrc={Maldives} imgTitle={'Maldives'}/>
      <SelectsCard imgSrc={Maldives2} imgTitle={'HaveLock Beach'}/>
      <SelectsCard imgSrc={KeyWest} imgTitle={'Keywest'}/>
      <SelectsCard imgSrc={BoraBora} imgTitle={'Carrebian'}/>
  
    </div>
  )
}
