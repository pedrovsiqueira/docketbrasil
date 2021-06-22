import ReactModal from 'react-modal';

export const Modal = ({ isOpen, onRequestClose, children, className }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react__modal__overlay"
    className={className}
    ariaHideApp={false}
  >
    {children}
  </ReactModal>
);
