const { Schema, model } = require('mongoose');
const { PHONE_REGEX } = require('../utils');

const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 30,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 30,
  },
  phoneNumber: {
    type: String,
    maxlength: 20,
    match: PHONE_REGEX,
    required: true,
  },
});

const Contact = model('contact', ContactSchema);

module.exports = Contact;
