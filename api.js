const { Router } = require('express');
const getContacts = require('./Roots/getContacts');

const api = Router();

api.get('/contacts', getContacts);

module.exports = api;
