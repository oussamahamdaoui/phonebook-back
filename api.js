const { Router } = require('express');
const createContact = require('./Roots/createContact');
const getContact = require('./Roots/getContact');
const getContacts = require('./Roots/getContacts');
const updateContact = require('./Roots/updateContact');

const api = Router();

api.get('/contacts', getContacts);

api.get('/contact/:contactId', getContact);

api.post('/new-contact', createContact);

api.post('/update-contact', updateContact);

module.exports = api;
