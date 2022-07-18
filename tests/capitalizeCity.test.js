import { fixCityCapitalization } from '../utilities/utilities';

test('it should make an uppercase input into lowercase', () => {
  const result = fixCityCapitalization('CAMBRIDGE');
  expect(result).toBe('cambridge');
});

test('it should leave country letters capitalized', () => {
  const result = fixCityCapitalization('CAMBRIDGE, UK');
  expect(result).toBe('cambridge, UK');
});

test('it should leave country and state abbreviations capitalized', () => {
  const result = fixCityCapitalization('Salt Lake City, UT, USA');
  expect(result).toBe('salt lake city, UT, USA');
});
