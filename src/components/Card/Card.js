export const Card = ({ children, width, height, padding, margin, className }) => (
  <article
    className={`card ${className ? className : ''}`}
    style={{ width, height, padding, margin }}
  >
    {children}
  </article>
);
