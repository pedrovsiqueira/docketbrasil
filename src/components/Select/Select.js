import { forwardRef } from 'react';

export const Select = forwardRef(
  ({ label, name, placeholder, value, onChange, onBlur, error, options, width, maxWidth }, ref) => {
    return (
      <div
        className={`field ${error ? 'field__input-container--error' : ''}`}
        style={{ width, maxWidth }}
      >
        <label htmlFor={name} className="field__label">
          {label}
        </label>
        <select
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          className={`field__input ${error ? 'field__input--error' : ''}`}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {error && <p role="alert">{error}</p>}
      </div>
    );
  }
);

Select.defaultProps = {
  placeholder: 'Digite aqui'
};
