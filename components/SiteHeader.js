const SiteHeader = ({ weather }) => (
  <h1
    className={`absolute transition-all duration-1000 ease-in ${
      weather ? 'opacity-50 h-0 top-10 text-xl ' : 'opacity-100 top-1/2 text-5xl '
    } text-white `}
  >
    Weather API
  </h1>
);

export default SiteHeader;
