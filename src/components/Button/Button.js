export const Button = ({ children, type, onClick, disabled, color, transparent }) => (
  <button
    disabled={disabled}
    type={type || 'button'}
    className={`btn btn--${color ? color : ''} btn--${transparent}`}
    onClick={onClick || null}
  >
    {children}
  </button>
);
