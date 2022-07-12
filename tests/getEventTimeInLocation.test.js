import moment from 'moment';
import { getEventTimeInLocation } from '../utilities/utilities';

test('getEvenTimeInLocation should return same time when there is no time adjustment', () => {
  const momentTime = moment.utc(1657628077).valueOf() * 1000;

  console.log(getEventTimeInLocation);
  expect(getEventTimeInLocation(1657628077, 0).valueOf()).toBe(momentTime);
});

test('getEvenTimeInLocation should return same time with 1 hour UTC adjustment', () => {
  const momentTime = moment.utc(1657631677).valueOf() * 1000;

  console.log(getEventTimeInLocation);
  expect(getEventTimeInLocation(1657628077, 3600).valueOf()).toBe(momentTime);
});
