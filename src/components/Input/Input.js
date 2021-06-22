import { forwardRef } from 'react';
import ReactInputMask from 'react-input-mask';

export const Input = forwardRef(
  (
    {
      label,
      name,
      placeholder,
      value,
      onChange,
      onBlur,
      error,
      mask,
      type,
      width,
      maxWidth,
      className
    },
    ref
  ) => {
    const props = {
      id: name,
      name,
      placeholder,
      value,
      onChange,
      onBlur,
      ref,
      className: `field__input ${error ? 'field__input--error' : ''}`
    };

    return (
      <div
        className={`field ${error ? 'field__input-container--error' : ''} ${
          className ? className : ''
        }`}
        style={{ width, maxWidth }}
      >
        <label htmlFor={name} className="field__label">
          {label}
        </label>
        {mask ? <ReactInputMask {...props} mask={mask} /> : <input type={type} {...props} />}

        {error && <p role="alert">{error}</p>}
      </div>
    );
  }
);

Input.defaultProps = {
  placeholder: 'Digite aqui'
};
