const Button = ({ callback, styles, children }) => (
  <button
    className={`btn outline-none focus:outline-1 focus:outline-white  ${styles}`}
    onClick={callback}
    type="button"
  >
    {children}
  </button>
);

export default Button;
