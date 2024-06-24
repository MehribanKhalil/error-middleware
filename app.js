import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './src/router/productsRouter.js'
import { errorHandler } from './src/middleware/errorMiddleware.js'

const app=express()
dotenv.config()

//middleware
app.use(express.json())
app.use(cors())
app.use('/api/products',router)
app.use(errorHandler)

const PORT=process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log(`Server is running port ${PORT}`);
})