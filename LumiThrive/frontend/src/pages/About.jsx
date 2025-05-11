import { assets } from '../assets/assets_frontend/assets'

function About() {
  return (
    <div className='px-6 md:px-20'>
      {/* Header */}
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      {/* About Content */}
      <div className='my-12 flex flex-col md:flex-row gap-12 items-center'>
        <img className='w-full md:max-w-[360px] rounded-lg shadow-md' src={assets.about_image} alt="About Us" />
        <div className='flex flex-col justify-center gap-6 md:w-3/5 text-gray-700 text-[15px] leading-relaxed'>
          <p>
            At our core, we believe mental health is just as vital as physical well-being. Our mission is to foster a safe, supportive, and confidential space where individuals feel empowered to open up and begin their healing journey.
          </p>
          <p>
            We connect users with compassionate, licensed counsellors who are dedicated to understanding and supporting each person’s unique experiences. Whether you're coping with stress, anxiety, or depression—or simply seeking someone to talk to—we are here for you.
          </p>
          <div>
            <b className='text-gray-800 text-base'>Our Vision</b>
            <p className='mt-2'>
              To make mental health care accessible, stigma-free, and profoundly human—empowering individuals to lead healthier, happier, and more resilient lives through timely and professional emotional support.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='text-xl font-medium my-10 text-center'>
        <p>WHY <span className='text-gray-700'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row gap-6 mb-20'>
        {/* Efficiency */}
        <div className='border rounded-xl px-8 md:px-12 py-10 flex flex-col gap-4 text-[15px] text-gray-700 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm cursor-pointer'>
          <b>Efficiency</b>
          <p>
            Our platform is designed to match you with the right counsellor quickly and seamlessly. Every step—from discovery to booking—is optimized to save you time without compromising on quality.
          </p>
        </div>

        {/* Convenience */}
        <div className='border rounded-xl px-8 md:px-12 py-10 flex flex-col gap-4 text-[15px] text-gray-700 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm cursor-pointer'>
          <b>Convenience</b>
          <p>
            Access professional support anytime, from anywhere. Whether you're at home or on the move, our platform ensures a smooth, hassle-free experience with minimal wait times.
          </p>
        </div>

        {/* Personalization */}
        <div className='border rounded-xl px-8 md:px-12 py-10 flex flex-col gap-4 text-[15px] text-gray-700 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm cursor-pointer'>
          <b>Personalization</b>
          <p>
            We understand every individual is different. Our system tailors recommendations based on your specific needs, providing support that’s not just professional—but truly personal.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
