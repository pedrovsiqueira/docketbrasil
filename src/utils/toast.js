import { toast } from 'react-toastify';
import checkImg from '../assets/check.svg';

export const notifySuccess = message => {
  toast.success(
    <div className="toast">
      <img src={checkImg} alt="check icon" />
      {message}
    </div>
  );
};

export const notifyError = message => {
  toast.error(message);
};
