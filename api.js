const { Router } = require('express');
const createContact = require('./Roots/createContact');
const getContacts = require('./Roots/getContacts');

const api = Router();

api.get('/contacts', getContacts);

api.post('/new-contact', createContact);

module.exports = api;
