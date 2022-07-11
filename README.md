A weather application created with Next.js. When used, allowed you to search a city and then render the temperature and hours until sunset/sunrise. Dynamic theming adjust to night or day based on the API results.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Learn More

You can try out the project at the following URL:

- [Weather API](https://weather-api-dynamic.netlify.app/)
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Testing

To test the project, use the script `npm run test`. Testing is automated with snapshots through Jest.

## Dynamic City Weather

Icons automaticaly adjust based on the weather in a specific city:

- San Francisco - Cloudy
![San Francisco](https://github.com/matthewfee/weather/blob/main/public/icons/50d.png?raw=true)

Lighting also adjust based on whether it is currently day or night.
[Dynamic Lighting](https://imgur.com/a/eLTJMEu)

All API date is provided through the [Open Weather API](https://openweathermap.org/api).
