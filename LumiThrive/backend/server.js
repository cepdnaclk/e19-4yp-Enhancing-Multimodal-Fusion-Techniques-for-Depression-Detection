import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectionDB from './config/mongodb.js'
// app config
const app = express()
const port = process.env.PORT || 4000
connectionDB()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoint
app.get('/', (req, res) => {
  res.send("API WORKING")
})

// server listen
app.listen(port, () => {
  console.log("Server started on port", port)
})
