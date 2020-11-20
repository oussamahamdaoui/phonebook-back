const { PHONE_REGEX } = require('./utils');

test('expect phone regex to match valid phone number', () => {
  expect(PHONE_REGEX.test('+33 06 23392740')).toBe(true);
});

test('expect phone regex to not match if no +', () => {
  expect(PHONE_REGEX.test('33 06 233927404545')).toBe(false);
});

test('expect phone regex to not match if short number', () => {
  expect(PHONE_REGEX.test('+33 06 23')).toBe(false);
});

test('expect phone regex to not match if no space', () => {
  expect(PHONE_REGEX.test('+33 0623392740')).toBe(false);
  expect(PHONE_REGEX.test('+3306 23392740')).toBe(false);
  expect(PHONE_REGEX.test('+330623392740')).toBe(false);
});
