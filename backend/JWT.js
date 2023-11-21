const {sign,verify}=require("jsonwebtoken");
const createToken =(user)=>{
   const accessToken = sign({username:user.username, id:user.id,role:user.role},"secret");
   return accessToken;
}
const validateToken = (req,res,next)=>{
    const accessToken = req.cookies["access-token"];
    if(!accessToken) return res.json({error:"user not authenticated"});
    try{
       const validToken = verify(accessToken,"secret");
       if(validToken){
           req.authenticated=true;
           return next();
       }
    }catch(err){
       return res.status(400).json({error:err})
    }
}
module.exports={createToken};