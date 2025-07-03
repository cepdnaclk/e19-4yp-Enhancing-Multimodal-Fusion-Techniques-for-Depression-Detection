function Footer() {
  return (
    <div>

        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* Left  */}
            <div>
            <p className='text-xl font-medium mb-5'>LUMITHRIVE</p>
                <p className="w-full md:w-2/3 text-gray-600 leading-6">
                    LumiTrive is a trusted mental health platform connecting you with licensed counsellors for secure, 
                confidential, and personalized support. Book appointments, track progress, and take control of 
                your wellness journey—all in one place.</p>

            </div>

            {/* Center */}
            <div>

                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/* Right */}
            <div>

                <p className='text-xl font-medium mb-5' >GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+94704157095</li>
                    <li>LumiThrive@gmail.com</li>
                </ul>

            </div>
        </div>

        {/* Copyright Text */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>
                Copyright 2025@ LumiThrive - All Right Reserved.
            </p>
        </div>
      
    </div>
  )
}

export default Footer
