import { Card, ButtonIcon } from '../index';
import { ReactComponent as RemoveIcon } from '../../assets/trash.svg';
import { Divider } from '../Divider/Divider';
import ReactTooltip from 'react-tooltip';
import { removeDocument } from '../../services/api';
import { DOCUMENT_TYPE_OPTIONS } from '../../constants/document';
import { useState } from 'react';
import { RemoveModal } from '../Modal/RemoveModal';
import { notifyError, notifySuccess } from '../../utils';

export const DocumentCard = ({ document, setDocuments }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    document: documentName,
    id,
    type,
    name,
    cpf,
    cep,
    cnpj,
    corporateName,
    street,
    number,
    city,
    state,
    date
  } = document;
  const isNaturalPerson = DOCUMENT_TYPE_OPTIONS[0].value === type;

  const toggleIsModalOpen = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const handleRemove = async () => {
    try {
      removeDocument(id);
      notifySuccess('Documento removido com sucesso');
      setDocuments(prevDocuments => prevDocuments.filter(document => document.id !== id));
    } catch (error) {
      console.error(error);
      notifyError('Erro ao remover documento');
    }
  };

  return (
    <Card padding="1.5rem" className="document-card" key={id}>
      <div className="document-card__header">
        <h2>{documentName}</h2>
        <ButtonIcon onClick={toggleIsModalOpen} Icon={RemoveIcon} className="btn--tools-icon" />
      </div>
      <Divider />
      <div className="document-card__content">
        <div className="document-card__content__control">
          <p className="mb-12">
            <strong>{isNaturalPerson ? 'Pessoa física' : 'Pessoa jurídica'}</strong>
          </p>
          {isNaturalPerson ? (
            <>
              <p className="is-ellipsis" data-tip={name}>
                Nome: {name}
              </p>
              <ReactTooltip data-for={name} effect="solid" place="top" />

              <p>CPF: {cpf}</p>
            </>
          ) : (
            <>
              <p>Razão Social: {corporateName}</p>
              <p>CNPJ: {cnpj}</p>
            </>
          )}
        </div>

        <div className="document-card__content__control">
          <p className="mb-12">
            <strong>Dados do cartório</strong>
          </p>
          <p>CEP: {cep}</p>
          <div className="document-card__content__combined">
            <p className="is-ellipsis" data-tip={street}>
              Rua: {street}
            </p>
            <ReactTooltip effect="solid" place="top" />
            <p>Nº: {number}</p>
          </div>
          <div className="document-card__content__combined">
            <p>Cidade: {city}</p>
            <p>UF: {state}</p>
          </div>
        </div>
      </div>
      <Divider />
      <p>
        <strong>Data de criação: </strong>
        {new Date(date).toLocaleDateString('pt-Br', { dateStyle: 'long' })}
      </p>

      <RemoveModal
        isRemoving={isModalOpen}
        onRequestClose={toggleIsModalOpen}
        handleRemove={handleRemove}
      >
        <h2>Confirmar Exclusão</h2>
        <p>Tem certeza que deseja excluir esse documento?</p>
      </RemoveModal>
    </Card>
  );
};
