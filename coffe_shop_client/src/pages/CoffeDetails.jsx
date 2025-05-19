import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link, useLoaderData } from 'react-router'

export default function CoffeDetails() {
  const coffeDetails = useLoaderData();
  console.log(coffeDetails)
  return (
    <>
      <h1><Link to="/" className='flex items-center gap-3 !text-2xl my-5 mx-[20vw]'><FaArrowLeft /> Back to home</Link></h1>
      <div className="card bg-base-300 shadow-sm grid grid-cols-2 p-15 mx-[20vw] mb-20">
        <figure>
          <img src={coffeDetails.Photo} alt="" className='w-[20vw]'/>
        </figure>
        <div className="flex flex-col justify-center gap-2">
          <h1 className="">Niceties</h1>
          <p><strong>Name: </strong> { coffeDetails.Name}</p>
          <p><strong>Chef: </strong>{ coffeDetails.Chef}</p>
          <p><strong>Supplier: </strong>{coffeDetails.Supplier}</p>
          <p><strong>Taste: </strong>{coffeDetails.Taste}</p>
          <p><strong>Price: </strong>{coffeDetails.Price}</p>
          <p><strong>Details: </strong>{coffeDetails.Details}</p>
        </div>
      </div>
    </>
  )
}
