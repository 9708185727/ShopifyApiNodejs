import {createContact} from "../services/contactService.js";
const addContact=async(req,res)=>{
    const data = req.body;
  
  
    if (!data.name) return res.status(422).send("name is required ");
    if (!data.phone) return res.status(422).send("contact phone is required ");
    if (!data.address) return res.status(422).send("contact address is required ");
    if (!data.message) return res.status(422).send("contact message is required ");
    try {
      const createdContact = await createContact(data);
  
      res.status(201).json(createdContact);
    } catch (error) {
      res.status(400).send(error.message);
    }
}
export {addContact}