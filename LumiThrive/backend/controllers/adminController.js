import validator from "validator"
import bcrypt from "bcryptjs"
import { v2 as cloudinary} from "cloudinary"
import counsellorModel from "../models/counsellorModel.js"
import jwt from 'jsonwebtoken'

//API for adding counsellor
const addCounsellor= async(req,res)=> {
    try {
        const { name, email,password,speciality, degree, experience, about, fees, address} = req.body
        const imageFile = req.file

        // checking for all data to add counsellor

        if (!name || !email ||!password ||!speciality ||!degree ||!experience ||!about ||!fees ||!address ){
            return res.json({success:false, message:"Missing Details"})
        }

        // validating email format
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Please enter a valid email"})
        }

        // validating strong password
        if(password.length <8){
            return res.json({success:false, message:"Please enter a strong password"})
        }

        // hashing counsellor password
        const salt= await bcrypt.genSalt(10)
        const hashedPassword= await bcrypt.hash(password, salt)

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:'image'})
        const imageUrl= imageUpload.secure_url

        const counsellorData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }

        const newCounsellor = new counsellorModel(counsellorData)
        await newCounsellor.save()

        res.json({success:true, message:"Counsellor Added"})

    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})

    }
}


// API for the admin login
const loginAdmin = async(req,res)=>{
    try{

        const {email,password}= req.body

        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){

            const token=jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success: true, token})

        }else{
            res.json({success:false, message:"Invalid Credentials"})
        }

    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})

    }
}

export {addCounsellor,loginAdmin}