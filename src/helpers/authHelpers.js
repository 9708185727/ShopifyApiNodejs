import jwt from "jsonwebtoken";
function createAuthToken(data){
    var Token=jwt.sign({data},process.env.JWT_SECRET);
    return Token;
}
export {createAuthToken,};