const Button = ({ callback, styles, children, disabled }) => (
  <button
    className={`btn outline-none disabled:text-white/50 focus:outline-1 focus:outline-white  ${styles}`}
    onClick={callback}
    type="button"
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
