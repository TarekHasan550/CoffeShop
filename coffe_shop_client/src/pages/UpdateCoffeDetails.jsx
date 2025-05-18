import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router'

export default function UpdateCoffeDetails() {
  return (
    <>
      <div className='p-[10vw] pt-0'>
        <h1><Link to="/" className='flex items-center gap-3 !text-2xl my-5'><FaArrowLeft /> Back to home</Link></h1>
        <div className='bg-base-300 p-[5vw]'>
          <div className='text-center'>
            <h1>Update Coffee</h1>
          </div>

          <div className='mx-[1vw]'>
            <div className='grid md:grid-cols-2 grid-cols-1 place-content-center'>
              <fieldset className="fieldset rounded-box p-4">
                <label className="label text-base font-bold text-[#1B1A1A]">Name</label>
                <input type="text" className="input border-none bg-white w-full" placeholder="Enter Name" />
              </fieldset>
              <fieldset className="fieldset rounded-box p-4">
                <label className="label text-base font-bold text-[#1B1A1A]">Quantity</label>
                <input type="text" className="input border-none bg-white w-full" placeholder="Enter Coffe Quantity" />
              </fieldset>
              <fieldset className="fieldset rounded-box p-4">
                <label className="label text-base font-bold text-[#1B1A1A]">Supplier</label>
                <input type="text" className="input border-none bg-white w-full" placeholder="Enter Supplier Name" />
              </fieldset>
              <fieldset className="fieldset rounded-box p-4">
                <label className="label text-base font-bold text-[#1B1A1A]">Taste</label>
                <input type="text" className="input border-none bg-white w-full" placeholder="Enter Coffe Taste" />
              </fieldset>
              <fieldset className="fieldset rounded-box p-4">
                <label className="label text-base font-bold text-[#1B1A1A]">Price</label>
                <input type="text" className="input border-none bg-white w-full" placeholder="Enter Coffee Price" />
              </fieldset>
              <fieldset className="fieldset rounded-box p-4">
                <label className="label text-base font-bold text-[#1B1A1A]">Details</label>
                <input type="text" className="input border-none bg-white w-full" placeholder="Enter Coffee Details" />
              </fieldset>
            </div>
            <fieldset className="fieldset rounded-box p-4">
              <label className="label text-base font-bold text-[#1B1A1A]">Photo</label>
              <input type="url" className="input border-none bg-white w-full" placeholder="Enter Photo URL" />
            </fieldset>
            <h1 className='px-[1.2vw] mt-8'><input className='bg-[#D2B48C] w-full btn text-base border-[#331A15]' type="submit" value="Update Details" /></h1>
          </div>
        </div>
      </div>
    </>
  )
}
