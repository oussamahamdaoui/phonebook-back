const PHONE_REGEX = /^\+[0-9]{2} [0-9]{2} [0-9]{6,}$/;

const logger = {
  log(e) {
    console.log(e); // eslint-disable-line
  },
};

const ERROR = {
  error: true,
};

const SUCCESS = {
  error: false,
};

module.exports = {
  PHONE_REGEX,
  logger,
  ERROR,
  SUCCESS,
};
