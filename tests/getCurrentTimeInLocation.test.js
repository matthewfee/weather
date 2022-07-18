import { getCurrentTimeInLocation } from '../utilities/utilities';

test('currentTime should return same time as Javascript date object without time adjustment', () => {
  let dateTime = new Date().getTime();

  // compare to make sure dates are close

  dateTime = Math.floor(dateTime / 10);

  // compare by one decimal in case of second mismatch

  const result = Math.floor(getCurrentTimeInLocation(0) / 10);
  expect(result).toBeCloseTo(dateTime, 1);
});

test('current time in London should be one hour ahead of UTC', () => {
  const timezoneSeconds = 3600;
  const currentUTCHours = new Date().getUTCHours();
  const result = getCurrentTimeInLocation(timezoneSeconds);
  const resultHours = result.hour();

  expect(resultHours).toBe(currentUTCHours + 1);
});
