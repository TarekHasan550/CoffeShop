import React, { use } from 'react'
import { AuthContext } from '../context/AuthProvider';

export default function SignUp() {
  const { createUser } = use(AuthContext);
  console.log(createUser);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch(error => {
        console.error(error);
      })
  }
  return (
    <div className='grid place-items-center mx-auto my-[3vw] h-screen'>
      <form onSubmit={handleSignUp} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">SignUp</legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" name='email'/>

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" name='password'/>

        <button className="btn btn-neutral mt-4">Login</button>
      </form>
    </div>
  )
}
