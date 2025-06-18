import { useState } from 'react';
import { BsCupHotFill } from "react-icons/bs";
import { FaEye, FaPen } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';


export default function Home() {
  const initialCoffeData = useLoaderData();
  const [coffeData, setCoffeData] = useState(initialCoffeData)
  console.log(coffeData);

  const handleDelete = (_id) => {
    console.log(_id)

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffe-shop-server-fawn.vercel.app/Coffes/${_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => console.log(data))

        const remainingCoffe = coffeData.filter(coffe => coffe._id !== _id)
        setCoffeData(remainingCoffe)

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  return (
    <>
      <div className="bg-[url('/more/3.png')] bg-cover bg-bottom bg-no-repeat h-[80vh] w-full text-white">
        <div className='flex flex-col justify-center h-full ml-[45%] mr-[15%]'>
          <h1 className='text-5xl !text-white'>Would you like a Cup of Delicious Coffee?</h1>
          <p className='my-[1vw]'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
          <h1 className='btn btn-active btn-warning !text-lg text-gray-900 self-start'><Link to="/">Learn More</Link></h1>
        </div>
      </div>


      <div className='flex items-center justify-center bg-[#ECEAE3] w-full h-fit py-15 px-[10vw] gap-10 mb-[5vw]'>
        <div className='w-60'>
          <img src="/icons/1.png" alt="" />
          <h1 className='text-3xl my-4'>Awesome Aroma</h1>
          <p>You will definitely be a fan of the design & aroma of your coffee</p>
        </div>
        <div className='w-60'>
          <img src="/icons/2.png" alt="" />
          <h1 className='text-3xl my-4'>High Quality</h1>
          <p>We served the coffee to you maintaining the best quality</p>
        </div>
        <div className='w-60'>
          <img src="/icons/3.png" alt="" />
          <h1 className='text-3xl my-4'>Pure Grades</h1>
          <p>The coffee is made of the green coffee beans which you will love</p>
        </div>
        <div className='w-60'>
          <img src="/icons/4.png" alt="" />
          <h1 className='text-3xl my-4'>Proper Roasting</h1>
          <p>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </div>


      <div className='flex flex-col justify-center items-center bg-[url("/more/1.png")] bg-cover bg-no-repeat mb-[5vw]'>
        <p className='font-semibold'>--- Sip & Savor ---</p>
        <h1 className='text-4xl font-semibold text-[#331A15} my-5'>Our Popular Products</h1>
        <h1 className='btn btn-active btn-warning border-2 border-amber-950 !text-base mb-[6vh]'><Link to="/newCoffe">Add Coffee</Link><BsCupHotFill /></h1>
        <div className='flex flex-wrap gap-[1.2vw] justify-center items-center'>

          {coffeData.map((coffe, index) => {
            const { _id, Name, Chef, Supplier, Taste, Price, Details, Photo } = coffe;
            console.log(coffe)

            return (
              <div className="card card-side bg-[#F5F4F1] basis-1/4 " key={index}>
                <figure className='p-[1.5vw]'>
                  <img src={Photo} alt="" />
                </figure>
                <div className="card-body pl-0 justify-center">
                  <div className='flex gap-4'>
                    <div className='flex flex-col justify-center w-[12vw]'>
                      <h2 className=""><span className='font-bold'>Name: </span>{Name}</h2>
                      <h2 className=""><span className='font-bold'>Chef: </span>{Chef}</h2>
                      <h2 className=""><span className='font-bold'>Price: </span>{Price}</h2>
                    </div>
                    <div className="grid gap-2">
                      <Link to={`/coffeDetails/${_id}`}><button className="btn bg-amber-300 text-lg text-white"><FaEye /></button></Link>
                      <Link to={`/updateCoffe/${_id}`}><button className="btn bg-gray-600 text-lg text-white"><FaPen /></button></Link>
                      <button onClick={() => handleDelete(_id)} className="btn bg-red-400 text-lg text-white"><RiDeleteBin6Line /></button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}


        </div>
      </div>

      <div className='flex flex-col justify-around items-center my-20'>
        <p className=''>Follow Us Now</p>
        <h1 className='text-4xl my-1'>Follow on Instagram</h1>
        <div className='flex flex-wrap gap-[1vw] justify-center items-center my-6'>
          <img src="cups/Rectangle 9.png" className='basis-1/5 w-[8vw]' alt="" />
          <img src="cups/Rectangle 10.png" className='basis-1/5 w-[8vw]' alt="" />
          <img src="cups/Rectangle 11.png" className='basis-1/5 w-[8vw]' alt="" />
          <img src="cups/Rectangle 12.png" className='basis-1/5 w-[8vw]' alt="" />
          <img src="cups/Rectangle 13.png" className='basis-1/5 w-[8vw]' alt="" />
          <img src="cups/Rectangle 14.png" className='basis-1/5 w-[8vw]' alt="" />
          <img src="cups/Rectangle 15.png" className='basis-1/5 w-[8vw]' alt="" />
          <img src="cups/Rectangle 16.png" className='basis-1/5 w-[8vw]' alt="" />
        </div>
      </div>
    </>
  )
}
