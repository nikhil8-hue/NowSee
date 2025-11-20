
const asyncHandler = (func)=>async()=>{
    try {
        await func(req,res,next);
    } catch (error) {
        console.log("Error in async handler", error);
    }

}; 


export default asyncHandler;