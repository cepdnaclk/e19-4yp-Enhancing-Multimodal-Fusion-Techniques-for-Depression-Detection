import React from 'react'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import {toast} from 'react-toastify'
import axios from 'axios'

const AddCouncellor = () => {

    const [docImg,setDocImg] = useState(false)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [experience,setExperience] = useState('1 Year')
    const [about,setAbout] = useState('')
    const [fees,setFees] = useState('')
    const [speciality,setSpeciality] = useState('Mental Health Counselor')
    const [degree,setDegree] = useState('')
    const [address1,setAddress1] = useState('')
    const [address2,setAddress2] = useState('')

    const {backendUrl, aToken} = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try{

            if(!docImg){
                return toast.error('Image Not Selected')
            }

            const formData = new FormData()

            formData.append('image',docImg)
            formData.append('name',name)
            formData.append('email',email)
            formData.append('password',password)
            formData.append('experience',experience)
            formData.append('fees',Number(fees))
            formData.append('about',about)
            formData.append('speciality',speciality)
            formData.append('degree',degree)
            formData.append('address',JSON.stringify({line1:address1,line2:address2}))

            // console log formdata
            formData.forEach((value,key)=> {
                console.log(`${key} : ${value}`);
            })

            const {data} = await axios.post(backendUrl + '/api/admin/add-councellor', formData, {headers: {aToken}})

            if (data.success) {
                toast.success(data.message)
            } else {
                toast.error(data.message)
            }

        } catch (error){

        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='m-5 w-full'>
            <p className='mb-3 text-lg font-medium'>Add Councellor</p>

            <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
                <div className='flex items-center gap-4 mb-8 text-gray-500'>
                    <label htmlFor="doc-img">
                        <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={docImg ? URL.createObjectURL(docImg) :assets.upload_area} alt='' />
                    </label>
                    <input onChange={(e)=> setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
                    <p>Upload councellor <br /> picture</p>
                </div>

                <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
                    <div className='w-full lg:flex-1 flex flex-col gap-4'>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Councellor name</p>
                            <input onChange={(e)=> setName(e.target.value)} value={name} type="text" placeholder='Name' className='border p-2 rounded' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Councellor Email</p>
                            <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder='Email' className='border p-2 rounded' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Councellor Password</p>
                            <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" placeholder='Password' className='border p-2 rounded' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Experience</p>
                            <select onChange={(e)=> setExperience(e.target.value)} value={experience} className='border p-2 rounded'>
                                <option value="1 Year">1 Year</option>
                                <option value="2 Year">2 Year</option>
                                <option value="3 Year">3 Year</option>
                                <option value="4 Year">4 Year</option>
                                <option value="5 Year">5 Year</option>
                                <option value="6 Year">6 Year</option>
                                <option value="7 Year">7 Year</option>
                                <option value="8 Year">8 Year</option>
                                <option value="9 Year">9 Year</option>
                                <option value="10 Year">10 Year</option>
                            </select>
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Fees</p>
                            <input onChange={(e)=> setFees(e.target.value)} value={fees} type="number" placeholder='fees' className='border p-2 rounded' required />
                        </div>
                    </div>

                    <div className='w-full lg:flex-1 flex flex-col gap-4'>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Speciality</p>
                            <select onChange={(e)=> setSpeciality(e.target.value)} value={speciality} className='border p-2 rounded'>
                                <option value="Mental Health Counselor">Mental Health Counselor</option>
                                <option value="Clinical Psychologist">Clinical Psychologist</option>
                                <option value="Child & Adolescent Counselor">Child & Adolescent Counselor</option>
                                <option value="Family & Marriage Counselor">Family & Marriage Counselor</option>
                                <option value="Grief & Trauma Specialist">Grief & Trauma Specialist</option>
                            </select>
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Education</p>
                            <input onChange={(e)=> setDegree(e.target.value)} value={degree} type="text" placeholder='Education' className='border p-2 rounded' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Address</p>
                            <input onChange={(e)=> setAddress1(e.target.value)} value={address1} type="text" placeholder='address 1' className='border p-2 rounded' required />
                            <input onChange={(e)=> setAddress2(e.target.value)} value={address2} type="text" placeholder='address 2' className='border p-2 rounded' required />
                        </div>
                    </div>
                </div>

                <div className='mt-6 flex flex-col gap-1 text-gray-600'>
                    <p>About Councellor</p>
                    <textarea onChange={(e)=> setAbout(e.target.value)} value={about} placeholder='write about councellor' rows={5} className='border p-2 rounded' required />
                </div>

                <div className='mt-6'>
                    <button type='submit'className='bg-primary px-10 py-3 mt-4 text-white rounded-full'>Add councellor</button>
                </div>
            </div>
        </form>
    )
}

export default AddCouncellor
