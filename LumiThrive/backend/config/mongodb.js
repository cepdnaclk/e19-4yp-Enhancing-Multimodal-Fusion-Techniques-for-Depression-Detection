import mongoose from 'mongoose'

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI) // includes /lumiThrive
    console.log("✅ Database connected")

  } catch (err) {
    console.error("❌ Database connection failed:", err.message)
  }
}

export default connectionDB
