import React, { useContext } from 'react'
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../provider/AuthProvider';

const RightNav = () => {
  const {signInGoogle} = useContext(AuthContext);
  const handleGoogleSignIn = ()=>{
    signInGoogle()
    .then(res => {
      const user = res.user
    })
    .catch(err =>{
      console.log(err.message)
    })
  }
  return (
    <div className=''>
      <h1 className='text-center text-2xl font-semibold mb-5'>Log In with</h1>
      <button onClick={handleGoogleSignIn} className='btn flex items-center gap-2'><FcGoogle /> Google</button>
    </div>
  )
}

export default RightNav
