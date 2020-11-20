const Contact = require('../Models/Contact');

const { SUCCESS, ERROR } = require('../utils');

module.exports = async (req, res) => {
  try {
    return res.json({
      ...SUCCESS,
      contacts: await Contact.find({}),
    });
  } catch (e) {
    return res.json({
      ...ERROR,
      message: 'unknown error',
    });
  }
};
