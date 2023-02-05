const asyncHandler = require('express-async-handler');


const accessChat = asyncHandler(async(req,res)=>{
    const {userId} = req.body;
    if(!userId){
        console.log("User ID param not sent with request");
        return res.sendStatus(400);
    }
    
}); 