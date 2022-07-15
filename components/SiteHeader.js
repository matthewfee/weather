const SiteHeader = ({ weather }) => (
  <h1
    className={`absolute tracking-widest text-center w-full font-semibold letter  uppercase ${
      weather
        ? 'opacity-50 h-0 top-[-100px] text-xl '
        : 'opacity-100 top-[-100px] text-4xl md:text-6xl text-white'
    } text-white `}
  >
    Sky Search
  </h1>
);

export default SiteHeader;
