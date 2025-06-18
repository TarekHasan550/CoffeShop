import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router'
import Swal from 'sweetalert2'

export default function NewCoffe() {

  const handleNewCoffe = e => {
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);
    const newCoffe = Object.fromEntries(formData.entries())
    console.log(newCoffe);

    // send data to server
    fetch(`https://coffe-shop-server-fawn.vercel.app/Coffes`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCoffe)
    })
      .then(res => res.json())
      .then(data => {
        console.log("Response from server:", data)
        if (data.insertedId) {
          console.log("after add coffe: ", data)
          Swal.fire({
            title: "Coffee added!",
            icon: "success",
            draggable: true,
            timer: 2000
          });
        }
      })
      .catch(err => {
        console.error("Error adding coffee:", err)
        Swal.fire("Error", "Something went wrong!", "error")
      });
    form.reset()
  }
  return (
    <div className='p-[10vw] pt-0'>
      <h1><Link to="/" className='flex items-center gap-3 !text-2xl my-5'><FaArrowLeft /> Back to home</Link></h1>
      <div className='bg-base-300 p-[5vw]'>
        <div className='text-center'>
          <h1>Add New Coffee</h1>
          <p className='px-[10vw] py-8 leading-8 text-gray-600'>It’s a well-known truth that coffee lovers are easily drawn to the rich aroma and warm comfort of a perfectly brewed cup. Instead of meaningless filler, our coffee speaks with flavor — bold, balanced, and brewed to perfection. That’s why people keep coming back — not just for the taste, but for the experience in every sip..</p>
        </div>

        <div className='mx-[1vw]'>
          <form onSubmit={handleNewCoffe}>
            <div className='grid md:grid-cols-2 grid-cols-1 place-content-center'>
              <fieldset className="fieldset rounded-box p-4">
                <label className="label text-base font-bold text-[#1B1A1A]">Name</label>
                <input type="text" className="input border-none bg-white w-full" placeholder="Enter Name" name='Name' />
              </fieldset>
              <fieldset className="fieldset rounded-box p-4">
                <label className="label text-base font-bold text-[#1B1A1A]">Chef</label>
                <input type="text" className="input border-none bg-white w-full" placeholder="Enter Coffe Chef" name='Chef' />
              </fieldset>
              <fieldset className="fieldset rounded-box p-4">
                <label className="label text-base font-bold text-[#1B1A1A]">Supplier</label>
                <input type="text" className="input border-none bg-white w-full" placeholder="Enter Supplier Name" name='Supplier' />
              </fieldset>
              <fieldset className="fieldset rounded-box p-4">
                <label className="label text-base font-bold text-[#1B1A1A]">Taste</label>
                <input type="text" className="input border-none bg-white w-full" placeholder="Enter Coffe Taste" name='Taste' />
              </fieldset>
              <fieldset className="fieldset rounded-box p-4">
                <label className="label text-base font-bold text-[#1B1A1A]">Price</label>
                <input type="text" className="input border-none bg-white w-full" placeholder="Enter per Cup Price" name='Price' />
              </fieldset>
              <fieldset className="fieldset rounded-box p-4">
                <label className="label text-base font-bold text-[#1B1A1A]">Details</label>
                <textarea type="text" className="input border-none bg-white w-full p-2" placeholder="Enter coffee details" name='Details' />
              </fieldset>
            </div>
            <fieldset className="fieldset rounded-box p-4">
              <label className="label text-base font-bold text-[#1B1A1A]">Photo</label>
              <input type="url" className="input border-none bg-white w-full" placeholder="Enter Photo URL" name='Photo URL' />
            </fieldset>
            <h1 className='px-[1.2vw] mt-8'><input className='bg-[#D2B48C] w-full btn text-base border-[#331A15]' type="submit" value="Add Coffee" /></h1>
          </form>
        </div>
      </div>
    </div>
  )
}
