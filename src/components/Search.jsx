import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'

export default function Search() {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>

        <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
        <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, ad veritatis. Vitae error quam hic perferendis deserunt libero? Consequuntur quam nostrum ad enim. Delectus voluptate quae qui! Exercitationem in veniam, enim perspiciatis ducimus, eligendi totam, consequuntur aliquam laborum alias aut. Rem, totam. Saepe ab, beatae, harum sit totam mollitia tempora dolore fugit perspiciatis pariatur repellendus qui vero quibusdam iste eveniet itaque magni ea libero est? Dicta veritatis quaerat aliquam molestiae tempora iste fuga consectetur at amet! Non, illo voluptatum! Minus totam nesciunt iste, quos illo possimus exercitationem eius officia obcaecati tempore voluptates repudiandae earum laboriosam! Iste at eos voluptas provident?</p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
            <div className='flex flex-col lg:flex-row text-center items-center'>
                <button>
                    <RiCustomerService2Fill size={50}/>
                </button>
                <div>
                    <h3 className='py-2'>LEADING SERVICE</h3>
                    <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 30 YEARS IN A-ROW</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row text-center items-center'>
                <button>
                    <MdOutlineTravelExplore size={50}/>
                </button>
                <div>
                    <h3 className='py-2'>LEADING SERVICE</h3>
                    <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 30 YEARS IN A-ROW</p>
                </div>
            </div>

        </div>

      </div>

      <div>
        <div  className='border text-center'>
            <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
            <p className='py-4'>12 HOURS LEFT</p>
            <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full'>
            <div className='flex flex-col'>
                <label>Destination</label>
                <select className='border rounded-md p-2'>
                    <option>Grande Antigua</option>
                    <option>Maldives</option>
                    <option>Borabora</option>
                    <option>Keywest</option>
                </select>
            </div>
            <div className='flex flex-col'>
                <label>Check-In</label>
                <input className='border rounded-md p-2' type="date" />
            </div>
            <div className='flex flex-col'>
                <label>Check-Out</label>
                <input className='border rounded-md p-2' type="date" />
            </div>
            <button className='w-full my-4'>Rates & Availabilities</button>
        </form>
      </div>
    </div>
  )
}
