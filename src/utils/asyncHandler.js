const asyncHandler=(requestHandler)=>{
    return (req,res,next)=>{
        console.log(res)
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler}
 


/////try catch below

// const asynHandler= (fn)=>async(req, res, next)=>{    //higher order function
// try {
//     await fn(req, res,next)
// } catch (error) {
//     res.status(error.code || 500).json({
//         success:false,
//         message:error.message
//     })
//     console.log(object)
// }
// }