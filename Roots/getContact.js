const Contact = require('../Models/Contact');

const { SUCCESS, ERROR } = require('../utils');

module.exports = async (req, res) => {
  try {
    const { contactId } = req.params;

    return res.json({
      ...SUCCESS,
      contact: await Contact.findOne({ _id: contactId }),
    });
  } catch (e) {
    return res.json({
      ...ERROR,
      message: 'unknown error',
    });
  }
};
