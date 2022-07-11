const HeroLayout = ({ children, isDaytime }) => (
  <div
    className="hero min-h-screen"
    style={{ backgroundImage: 'url(https://placeimg.com/1000/800/arch)' }}
  >
    <div className={`hero-overlay ${isDaytime ? 'bg-opacity-50' : 'bg-opacity-80'}`} />
    <div
      className="hero-content w-full text-center text-neutral-content
      max-w-md flex flex-col items-center rounded-md"
    >
      {children}
    </div>
  </div>
);

export default HeroLayout;
