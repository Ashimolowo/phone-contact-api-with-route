const Contact = require("../models/contact.model");

///controller for all contacts 

getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({});
        res.status(201).json(contacts)
       } catch (error) {
        res.status(500).json({message: error.message})
       }
}

///controller for a single contact
const getContact = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findById(id)
        res.status(201).json(contact);
      } catch (error) {
        res.status(500).json({message: error.message})
        console.log(res.status(500).json({message: error.message}));
        
      }
}

///controlller to create a contact 
const createContact = async (req, res) => {
    try {
        const contact =   await Contact.create(req.body);
        res.status(201).json(contact);
        console.log("contact:", res.status(201).json(contact));
        
      } catch (err) {
        res.status(500).json({message: err.message})
        console.log("error:", res.status(500).json({message: err.message}));
        
      }
}

///controlller to update(make changes on) a contact
const updateContact = async (req,res) => {
    try {
        const {id} = req.params
       const contact = await Contact.findByIdAndUpdate(id, req.body);
       if (!contact) {
        return res.status(404).json({message: "Contact not Found"})
       }
       const updateContact = await Contact.findById(id)
       res.status(201).json(updateContact)
      } catch (error) {
       res.status(500).json({message: error.message})
      }
} 

////controller for deleting(removing) a contact
const deleteContact = async (req,res) => {
    try {
        const contact = await Contact.findByIdAndDelete(id);
        if (!contact) {
         return res.status(404).json({message: "Contact not Found"})
        }
        const updateContact = await Contact.findById(id)
        res.status(201).json(updateContact)
       } catch (error) {
        res.status(500).json({message: error.message})
       }
}


module.exports = {
    getContact,
    getContacts,
    createContact,
    updateContact,
    deleteContact
}




