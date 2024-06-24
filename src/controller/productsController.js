import { Products } from "../model/productsModel.js"

//CREATE
export const createProduct= async (req,res,next)=>{
   const {title,description,price}=req.body

   if (!title || !description || !price) {
    return res.status(400).json({message:" All fields are required"})
   }

   try {
    const newProduct= new Products({
        title,
        description,
       price
    })
    await newProduct.save()
    res.status(201).json(newProduct)
   } catch (error) {
    next(error)
   }
}

//GET ALL
export const getAllProducts= async (req,res)=>{
    try {
     const products= await Products.find()
     if (products) {
     res.status(200).json(products)
     }else{
     res.status(404).json({message:"Products not found"})
     }
    } catch (error) {
        next(error)
    }
 }

//GET BY ID
export const getProductById= async (req,res)=>{
    const {id}=req.params
    if (!id) {
        return res.status(400).json({message:"Product Id is required"})
    }
    try {
     const product= await Products.findById(id)
     if (product) {
     res.status(200).json(product)
     } else{
     res.status(404).json({message:"Product not found"})
     }
    } catch (error) {
        next(error)
    }
 }

//DELETE
export const deleteProduct= async (req,res)=>{
    const {id}=req.params
    if (!id) {
        return res.status(400).json({message:"Product Id is required"})
    }
    try {
     const deletedProduct= await Products.findByIdAndDelete(id)
     if (deleteProduct) {
     res.status(200).json({message:"Product deleted successfully"})
        
     } else {
     res.status(404).json({message:"Product not found"})
        
     }
    } catch (error) {
        next(error)
    }
 }

//UPDATE
export const updateProduct= async (req,res)=>{
    const {id}=req.params
    const {title,description,price}=req.body

    if (!id) {
        return res.status(400).json({message:"Product Id is required"})
    }
    if (!title || !description || !price) {
        return res.status(400).json({message:" All fields are required"})
       }
    try {
     const updatedProduct= await Products.findByIdAndUpdate(id,{title,description,price}, {new:true})

     if (updateProduct) {
        res.status(200).json(updateProduct)
     } else{
        res.status(404).json({message:"Product not found"})
     }

    } catch (error) {
        next(error)
    }
 }
