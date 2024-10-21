const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'kindly include contact name']
        },
       mobileNumber: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: false

        }
    }
);
const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact