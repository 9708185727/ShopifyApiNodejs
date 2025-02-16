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
    throw  Error('Password  does not Match');
}
   
return userExisting;

};
const getUser= async (query) => {
  const limit = query?.limit || 10;
  const sort = query?.sort ? JSON.parse(query.sort) : {};
  const filters = query?.filters ? JSON.parse(query.filters) : {};
  const page = query?.page || 1;
  const offset = (page - 1) * limit;
  const customQuery = Object.entries(filters).reduce((acc, [key, value]) => {
    const result = { ...acc, [key]: new RegExp(value, "i") };

    return result;
  }, {});

  return await User.find(customQuery).limit(limit).sort(sort).skip(offset);
};

export default {
  userCreate,
  userLogin,
  getUser,
};
