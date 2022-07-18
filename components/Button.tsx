type ButtonProps = {
  callback: () => void;
  styles: string;
  children: React.ReactNode;
  disabled: boolean;
};

const Button = ({ callback, styles, children, disabled }: ButtonProps) => (
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
