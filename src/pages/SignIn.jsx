import React, { useState } from 'react'
import signBg from '../assets/signBg.png';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [showFirst, setShowfirst] = useState(true);
  const Navigate = useNavigate();
  const location = useLocation();
  const fromCart = location.state?.fromCart;
 
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({ name: '', phone: '' });
  const phoneRegex = /^[6-9]\d{9}$/; 


  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit Indian phone number.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  
  function Switch() {
    setShowfirst(!showFirst);
    setErrors({ name: '', email: '', phone: '' });
    setFormData({ name: '', email: '', phone: '' });
  }
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
     setErrors((prev) => ({ ...prev, [name]: '' }));
  };
  
  const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        localStorage.setItem('checkoutData', JSON.stringify(formData));
        
        setShowAlert(true);
        setFormData({ name: '', email: '', phone: '' }); // Clear form after submission
        
        setTimeout(() => {
          setShowAlert(false);
          if (fromCart) {
            Navigate('/cart');
          }
        }, 1000);
      }
  };
      
      return (
        <div className='w-full h-full mt-24 md:mt-10 lg:py-24 sm:py-0 sm:pt-5 bg-[#faf6f0] dark:bg-slate-950'>
      <div className='lg:w-2/3 sm:w-full h-full lg:py-10 mx-auto flex justify-center items-center  border dark:border-transparent rounded' style={{background:`url(${signBg})`,objectFit:'contain'}}>
       {showFirst? (<div className='lg:w-2/4 sm:3/4 lg:h-full h-fit  bg-white dark:bg-slate-600 dark:text-white shadow-slate-300 shadow-md rounded-md flex flex-col p-10 my-10'>
          <h1 className='text-3xl mb-1 font-bold'>Login</h1>
          <p className='text-sm mb-8'>Don't have an account ?<span className='text-blue-600 dark:text-blue-400 font-semibold ms-1 cursor-pointer' onClick={Switch} >Sign Up</span></p>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5' noValidate>
            <div>
              <input 
                onChange={handleChange} 
                name="name" 
                value={formData.name}
                className='p-3 w-full dark:text-slate-900 border rounded shadow-lg' 
                type="text" 
                placeholder="Name" 
                required 
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input 
                value={formData.phone} 
                name='phone' 
                onChange={handleChange} 
                className='p-3 w-full border dark:text-slate-900 rounded shadow-lg' 
                type="tel" 
                placeholder="Phone Number" 
                required 
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            <hr />
            <div>
              <button className="p-2 mb-3 w-full rounded bg-[#eb6420] text-white text-lg hover:bg-[#fa854b]" type="submit">LOGIN</button>
              {showAlert && (
                <div className="mt-4 bg-green-100 border text-center border-green-400 text-green-700 px-4 py-2 rounded">
                  Login successfull!
                </div>
              )}
            </div>
          </form>
        </div>) : 
        (
          <div className='lg:w-2/4 sm:w-3/4 lg:h-full h-fit mx-auto bg-white dark:bg-slate-600 dark:text-white rounded-md flex flex-col p-10'>
            <h1 className='text-3xl mb-1 font-bold'>Sign Up</h1>
            <p className='text-sm mb-8'>Already a member ?<span className='text-blue-600 dark:text-blue-400 font-semibold ms-1 cursor-pointer' onClick={Switch} >Login</span></p>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5' noValidate>
              <div>
                <input 
                  onChange={handleChange} 
                  name="name" 
                  value={formData.name}
                  className='p-3 w-full border dark:text-slate-900 rounded shadow-lg' 
                  type="text" 
                  placeholder="Name" 
                  required 
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <input 
                  value={formData.phone} 
                  name='phone' 
                  onChange={handleChange} 
                  className='p-3 w-full dark:text-slate-900 border rounded shadow-lg' 
                  type="tel" 
                  placeholder="Phone Number" 
                  required 
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
                <input 
                  value={formData.email} 
                  name='email' 
                  onChange={handleChange} 
                  className='p-3 w-full dark:text-slate-900 border rounded shadow-lg' 
                  type="email" 
                  placeholder="Email" 
                  required 
                />
              </div>
              <hr />
              <div>
                <button className="p-2 w-full rounded bg-[#eb6420] text-white text-lg hover:bg-[#fa854b]" type="submit">SIGN UP</button>
                {showAlert && (
                  <div className="mt-4 bg-green-100 border text-center border-green-400 text-green-700 px-4 py-2 rounded">
                    Sign Up successfull!
                  </div>
                )}
                <p className='text-xs'>By creating an account, I accept the <b>Terms & Conditions , Privacy Policy</b> and default <b>Notification Settings.</b></p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default SignIn
