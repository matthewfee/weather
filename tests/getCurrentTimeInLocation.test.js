import { getCurrentTimeInLocation } from '../utilities/utilities';

test('currentTime should return same time as Javascript date object without time adjustment', () => {
  let dateTime = new Date().getTime();

  // compare to make sure dates are close

  dateTime = Math.floor(dateTime / 10);

  // compare by one decimal

  const result = Math.floor(getCurrentTimeInLocation(0) / 10);
  expect(result).toBeCloseTo(dateTime, 1);
});
