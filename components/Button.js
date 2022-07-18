const Button = ({ callback, styles, children }) => (
  <button className={`btn outline-none ${styles}`} onClick={callback} type="button">
    {children}
  </button>
);

export default Button;
