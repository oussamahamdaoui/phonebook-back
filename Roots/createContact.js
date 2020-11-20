const sanitize = require('sanitize-html');
const Contact = require('../Models/Contact');

const { SUCCESS, ERROR } = require('../utils');

module.exports = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
    } = req.body;

    const saved = await new Contact({
      firstName: sanitize(firstName),
      lastName: sanitize(lastName),
      phoneNumber,
    }).save();

    return res.json({
      ...SUCCESS,
      contactId: saved._id,
    });
  } catch (e) {
    return res.json({
      ...ERROR,
      message: 'unknown error',
    });
  }
};
