const express = require('express');
const { getContact, getContacts, createContact, updateContact, deleteContact } = require('../controllers/contact.controller');
const Contact = require('../models/contact.model');
const router = express.Router();

///route to get all contact
router.get('/v1', getContacts)
///route to get a single contact 
router.get('/v1:id', getContact);
///router to add a new contact
router.post('/v1', createContact);
///route to update (make changes to an existing) contact
router.put('/v1:id', updateContact)
///route to deleting a contact;
router.delete('/v1:id', deleteContact);

module.exports = router;