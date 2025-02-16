import Contact from "../models/Contact.js"

const createContact=async(data)=>{
return await Contact.create({...data})

}
export {createContact};