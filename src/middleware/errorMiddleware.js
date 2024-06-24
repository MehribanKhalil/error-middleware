export const errorHandler = ( error,req,res,next)=>{
    console.error(error.stack);

    const statusCode=error.statusCode || 500
    const errorMessage=error.message  || " Internal server error"

    res.status(statusCode).json({error : errorMessage})
}