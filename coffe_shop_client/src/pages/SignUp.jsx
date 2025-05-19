import React, { use } from 'react'
import { AuthContext } from '../context/AuthProvider';

export default function SignUp() {
  const { user } = use(AuthContext);
  console.log(user);
  return (
    <div>
      im from signup
    </div>
  )
}
