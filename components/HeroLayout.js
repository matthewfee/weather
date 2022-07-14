const HeroLayout = ({ children, isDaytime }) => (
  <div
    className="hero hero-background h-screen min-h-[110vh] w-screen min-w-fit  "
    style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
      backgroundImage: `url(https://picsum.photos/2000/1400)`,
    }}
  >
    <div
      className={`hero-overlay ${
        isDaytime ? `opacity-50` : `opacity-75`
      }  transition-all ease-in-out duration-[4000ms] `}
      style={{
        backgroundColor: `${isDaytime ? '#0788D9' : 'black'}`,
      }}
    />
    <div
      className="hero-content w-full text-center text-neutral-content
      max-w-md flex flex-col justify-center rounded-md p-0 m-0"
    >
      {children}
    </div>
  </div>
);

export default HeroLayout;
