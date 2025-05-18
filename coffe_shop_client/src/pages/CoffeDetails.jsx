import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router'

export default function CoffeDetails() {
  return (
    <>
      <h1><Link to="/" className='flex items-center gap-3 !text-2xl my-5 mx-[20vw]'><FaArrowLeft /> Back to home</Link></h1>
      <div className="card bg-base-300 shadow-sm grid grid-cols-2 p-15 mx-[20vw] mb-20">
        <figure>
          <img src="/1.png" alt="" className='w-[20vw]'/>
        </figure>
        <div className="flex flex-col justify-center gap-2">
          <h1 className="">Niceties</h1>
          <p><strong>Name: </strong> Americano Coffee</p>
          <p><strong>Chef: </strong>Mr. Matin Paul</p>
          <p><strong>Supplier: </strong>Cappu Authorizer</p>
          <p><strong>Taste: </strong>Sweet and hot</p>
          <p><strong>Category: </strong>Americano</p>
          <p><strong>Details: </strong>Espresso with hot water</p>
        </div>
      </div>
    </>
  )
}
