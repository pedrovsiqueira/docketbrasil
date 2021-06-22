import { toast } from 'react-toastify';
import checkImg from '../assets/check.svg';

const toastMessageDefaults = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
};

export const notifySuccess = message => {
  toast.success(
    <div className="toast">
      <img src={checkImg} alt="check icon" />
      {message}
    </div>,
    { ...toastMessageDefaults }
  );
};

export const notifyError = message => {
  toast.error(message, { ...toastMessageDefaults });
};
