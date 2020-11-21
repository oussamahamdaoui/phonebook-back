const sanitize = require('sanitize-html');
const Contact = require('../Models/Contact');

const { SUCCESS, ERROR } = require('../utils');

module.exports = async (req, res) => {
  try {
    const {
      contactId,
      newPhoneNumber,
      newFirstName,
      newLastName,
    } = req.body;

    await Contact.findOneAndUpdate({ _id: contactId }, {
      phoneNumber: newPhoneNumber,
      firstName: sanitize(newFirstName),
      lastName: sanitize(newLastName),
    }, { useFindAndModify: true });

    return res.json({
      ...SUCCESS,
    });
  } catch (e) {
    return res.json({
      ...ERROR,
      message: 'unknown error',
    });
  }
};
