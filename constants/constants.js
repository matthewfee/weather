export const WEATHER_API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const DARK_THEME = 'dark';

export const LIGHT_THEME = 'light';

export const DATE_FORMAT = 'YYYY-MM-DD HH:mm';

const dayColorOne = `rgba(213, 246, 255, 0.2)`;
const dayColorTwo = `rgba(3, 76, 140, 0.7)`;

const nightColorOne = `rgba(242, 240, 136, 0.2)`;
const nightColorTwo = `rgba(47, 47, 50, 0.95)`;

export const dayBackgroundImageString = `linear-gradient(to right bottom, ${dayColorOne}, ${dayColorTwo}), url(https://picsum.photos/2000/1400)`;

export const nightBackgroundImageString = `linear-gradient(to right bottom, ${nightColorOne}, ${nightColorTwo}), url(https://picsum.photos/2000/1400)`;
