import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link, useLoaderData } from 'react-router'
import Swal from 'sweetalert2';

export default function UpdateCoffeDetails() {
  const coffeDetails = useLoaderData();
  const {_id, Name, Chef, Supplier, Taste, Price, Details, Photo } = coffeDetails;
  const handleUpdateCoffe = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffe = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/coffes/${_id}`, {
      method: "PUT",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updateCoffe)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true,
            timer: 1500
          });
        }
      })
      .catch(err => console.log(err));
  }
  return (
    <>
      <div className='p-[10vw] pt-0'>
        <h1><Link to="/" className='flex items-center gap-3 !text-2xl my-5'><FaArrowLeft /> Back to home</Link></h1>
        <div className='bg-base-300 p-[5vw]'>
          <div className='text-center'>
            <h1>Update Coffee</h1>
          </div>

          <div className='mx-[1vw]'>
            <form onSubmit={handleUpdateCoffe}>
              <div className='grid md:grid-cols-2 grid-cols-1 place-content-center'>
                <fieldset className="fieldset rounded-box p-4">
                  <label className="label text-base font-bold text-[#1B1A1A]">Name</label>
                  <input type="text" className="input border-none bg-white w-full" placeholder="Enter Name" defaultValue={Name} />
                </fieldset>
                <fieldset className="fieldset rounded-box p-4">
                  <label className="label text-base font-bold text-[#1B1A1A]">Chef</label>
                  <input type="text" className="input border-none bg-white w-full" placeholder="Enter Chef Name" defaultValue={Chef} />
                </fieldset>
                <fieldset className="fieldset rounded-box p-4">
                  <label className="label text-base font-bold text-[#1B1A1A]">Supplier</label>
                  <input type="text" className="input border-none bg-white w-full" placeholder="Enter Supplier Name" defaultValue={Supplier} />
                </fieldset>
                <fieldset className="fieldset rounded-box p-4">
                  <label className="label text-base font-bold text-[#1B1A1A]">Taste</label>
                  <input type="text" className="input border-none bg-white w-full" placeholder="Enter Coffe Taste" defaultValue={Taste} />
                </fieldset>
                <fieldset className="fieldset rounded-box p-4">
                  <label className="label text-base font-bold text-[#1B1A1A]">Price</label>
                  <input type="text" className="input border-none bg-white w-full" placeholder="Enter Coffee Price" defaultValue={Price} />
                </fieldset>
                <fieldset className="fieldset rounded-box p-4">
                  <label className="label text-base font-bold text-[#1B1A1A]">Details</label>
                  <input type="text" className="input border-none bg-white w-full" placeholder="Enter Coffee Details" defaultValue={Details} />
                </fieldset>
              </div>
              <fieldset className="fieldset rounded-box p-4">
                <label className="label text-base font-bold text-[#1B1A1A]">Photo</label>
                <input type="url" className="input border-none bg-white w-full" placeholder="Enter Photo URL" defaultValue={Photo} />
              </fieldset>
              <h1 className='px-[1.2vw] mt-8'><input className='bg-[#D2B48C] w-full btn text-base border-[#331A15]' type="submit" value="Update Details" /></h1>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
