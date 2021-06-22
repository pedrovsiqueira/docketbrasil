import Loader from 'react-loader-spinner';

export const Button = ({ children, type, onClick, disabled, color, transparent, isLoading }) => (
  <button
    disabled={disabled}
    type={type || 'button'}
    className={`btn btn--${color ? color : ''} btn--${transparent ? transparent : ''}`}
    onClick={onClick || null}
  >
    {false ? <Loader type="Oval" color="#fff" height={18} width={18} visible={true} /> : children}
  </button>
);
