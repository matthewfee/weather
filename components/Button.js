const Button = ({ callback, styles, children }) => (
  <button className={`btn ${styles}`} onClick={callback} type="button">
    {children}
  </button>
);

export default Button;
