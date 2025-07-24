import React, { useState } from 'react'
import signBg6copy from '../assets/signBg6copy.png';

const SignIn = () => {
  const [showFirst, setShowfirst] = useState(true);

  function Switch() {
    setShowfirst(!showFirst);
  }

  return (
    <div className='w-full h-full mt-10 py-24 bg-[#faf6f0]'>
      <div className='w-2/3 h-full py-10 mx-auto flex justify-center items-center  border rounded' style={{background:`url(${signBg6copy})`,objectFit:'contain'}}>
       {showFirst? (<div className='w-2/4 h-full  bg-white rounded-md flex flex-col p-10'>
          <h1 className='text-3xl mb-1 font-bold'>Login</h1>
          <p className='text-sm mb-8'>Don't have an account ?<span className='text-blue-600 font-semibold ms-1 cursor-pointer' onClick={Switch} >Sign Up</span></p>
          <form action="" className='flex flex-col gap-5'>
            <div>
              <input className='p-3 w-full border rounded shadow-lg' id="username" type="text" placeholder="Name" pattern="capital" required />
            </div>
            <div>
              <input className='p-3 w-full border rounded shadow-lg' id="phone number" type="text" placeholder=" Phone Number " required />
            </div>
            <hr />
            <div>
              <button className="p-2 mb-3 w-full rounded bg-[#eb6420] text-white text-lg hover:bg-[#fa854b]" type="submit" >LOGIN</button>
            </div>
          </form>
        </div>):


       ( <div className='w-2/4 h-full mx-auto bg-white rounded-md flex flex-col p-10'>
          <h1 className='text-3xl mb-1 font-bold'>Sign Up</h1>
          <p className='text-sm mb-8'>Already a member ?<span className='text-blue-600 font-semibold ms-1 cursor-pointer' onClick={Switch} >Login</span></p>
          <form action="" className='flex flex-col gap-5'>
            <div>
              <input className='p-3 w-full border rounded shadow-lg' id="username" type="text" placeholder="Name" pattern="capital" required />
            </div>
            <div>
              <input className='p-3 w-full border rounded shadow-lg' id="phone number" type="text" placeholder="Phone Number " required />
            </div>
            <div>
              <input className='p-3 w-full border rounded shadow-lg ' id="email" type="email" placeholder="Email " required />
            </div>
            <hr />
            <div>
              <button className="p-2 w-full rounded bg-[#eb6420] text-white text-lg hover:bg-[#fa854b]" type="submit">SIGN UP</button>
              <p className='text-xs'>By creating an account, I accept the <b>Terms & Conditions , Privacy Policy</b> and default <b>Notification Settings.</b></p>
            </div>
          </form>
        </div>)
}

      </div>
      {/* <div className='w-full object-cover h-full' style={{background:`url(${signBg6})`,width:'100%'}}>
      </div> */}
      {/* <div className='w-2/3' style={{background:`url(${signBg2})`}} > */}

      {/* <div className=' w-full relative'><img className='h-fit w-fit absolute ' src={signBg3} /></div>
        <div className='border'></div> */}

    </div>
  )
}

export default SignIn