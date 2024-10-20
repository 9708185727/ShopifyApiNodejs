import User from "../models/User.js";
import  bcrypt from "bcryptjs";
const userCreate = async (data) => {
   
   
const userExists = await User.findOne({ email: data.email });
  if (userExists) throw new Error("User Email already exists");
  const hashpassword=bcrypt.hashSync(data.password);
  try {
    return await User.create({
        name:data.name,
        address:data.address,
        phone:data.phone,
        email:data.email,
        password:hashpassword,
        roles:data.roles,
      });
    
  } 
  
  catch (error) {
    console.log(error.message);

    
  }

};

const userLogin = async (data) => {

    const userExisting=  await User.findOne({email:data.email}) ;

if(!userExisting) throw new Error("user not exists");
const isMatch=bcrypt.compareSync(data.password,userExisting.password);

if(!isMatch){
    throw  Error('password  doesnot match');
}
   
return userExisting;

};

export default {
  userCreate,
  userLogin,
};
