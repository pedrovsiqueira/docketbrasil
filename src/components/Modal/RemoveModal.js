import { ButtonIcon, Modal, Button } from '../';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';

export const RemoveModal = ({ isRemoving, onRequestClose, handleRemove }) => {
  return (
    <Modal
      isOpen={isRemoving}
      onRequestClose={() => onRequestClose(false)}
      className="react__modal__content"
    >
      <div className="modal__remove">
        <div className="modal__remove__header">
          <h2>Confirmar exclusão</h2>

          <ButtonIcon
            onClick={() => onRequestClose(prevState => !prevState)}
            Icon={CloseIcon}
            className="btn--close-modal"
          />
        </div>

        <p>Tem certeza que deseja excluir este documento?</p>

        <div className="modal__remove__footer">
          <Button transparent="transparent" onClick={() => onRequestClose(prevState => !prevState)}>
            Cancelar
          </Button>

          <Button onClick={handleRemove} color="red">
            Excluir
          </Button>
        </div>
      </div>
    </Modal>
  );
};
