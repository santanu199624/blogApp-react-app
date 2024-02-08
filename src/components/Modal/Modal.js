import React from 'react'

const Modal = ({isOpen, onClose}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen? "" : "hidden"}`}>
      <div className='modal_container'>
        <div className='bg-indigo-500 text-center p-5 h-96 lg:w-[500px] rounded shadow-md'>
            {/* Modal Content */}
            <h2 className='text-xl font-semibold mb-4 mt-6 mb-5 uppercase'>Please Login Here!</h2>
            <form className='px-4'>
                {/* email */}
                <div className='mb-3'>
                    <input type="email" name='email' id='email' placeholder='example@gmail.com' autoComplete='off' className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md' />
                </div>
                {/* Password */}
                <div>
                    <input type="password" name='password' id='password' placeholder='Enter Your Password' autoComplete='off' className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md' />
                </div>
                {/* Submit Button */}
                <div>
                    <button className=' bg-orange-500 hover:bg-orange-700 text-white px-6 py-2 mt-5 rounded-md font-semibold'>Log In</button>
                </div>
            </form>
            {/* Modal Close btn */}
            <button onClick={onClose} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center mt-5'>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
