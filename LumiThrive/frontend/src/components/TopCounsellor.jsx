import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

function TopCounsellor() {

    const navigate = useNavigate()
    const { counsellors } = useContext(AppContext)

    function docSelect(id) {
        navigate(`/appointment/${id}`)
    }
    
    function clickMore() {
        navigate('/counsellor')
    }
  return (
    <div className='flex flex-col items-center gap-4 my-5 text-gray-900 '>
      <h1 className='text-3xl font-medium'>Top Counsellors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted counsellors</p>
      <div className='w-full grid [grid-template-columns:var(--grid-cols-auto)] gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {
            counsellors.slice(0, 10).map((item, index) => (
            <div onClick={() => {docSelect(item._id); scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-blue-50' src={item.image} alt={item.name} />
                <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
            </div>
            ))
        }
        </div>

            <button onClick={() => {clickMore(); window.scrollTo(0, 0);}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>
            more
            </button>

        </div>
  )
}

export default TopCounsellor
