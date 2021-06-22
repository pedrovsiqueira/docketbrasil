import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { DOCUMENT_TYPE_OPTIONS } from '../../constants/document';
import { getAddressByCep } from '../../services/address';
import { addDocument } from '../../services/api';
import { isCepValid, isAlphabetLetter, notifySuccess, notifyError } from '../../utils';
import { Input, Button, Card, Select, Divider } from '../index';

export const DocumentForm = ({ setDocuments }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { errors, isSubmitting }
  } = useForm({ defaultValues: { type: DOCUMENT_TYPE_OPTIONS[0].value } });

  const cep = watch('cep');
  const type = watch('type');

  useEffect(() => {
    const fetchCep = async () => {
      const address = await getAddressByCep(cep);
      reset({ ...getValues(), ...address });
    };

    if (isCepValid(cep)) {
      fetchCep();
    }
  }, [cep, reset, getValues]);

  const handleFormSubmit = async values => {
    const payload = { ...values, date: new Date() };
    try {
      const response = await addDocument(payload);
      setDocuments(prevDocuments => [...prevDocuments, response]);
      reset({ type: DOCUMENT_TYPE_OPTIONS[0].value, cpf: '', cnpj: '', cep: '' });
      notifySuccess('Documento criado com sucesso');
    } catch (error) {
      console.error(error);
      notifyError('Não foi possível criar o documento');
    }
  };

  return (
    <Card height="51.1875rem" width="50%" maxWidth="33.125rem" className="card__form">
      <div className="container">
        <h2>Adicionar documentos ao pedido</h2>
        <Divider />
        <form className="container__form" onSubmit={handleSubmit(handleFormSubmit)}>
          <div>
            <Input
              maxWidth="30.125rem"
              width={'100%'}
              label="Nome do documento: *"
              className="larger-input"
              error={errors.document?.message}
              {...register('document', {
                required: 'Campo obrigatório'
              })}
            />

            <Select
              width="100%"
              maxWidth="17.875rem"
              label="Tipo de pessoa *"
              error={errors.type?.message}
              options={DOCUMENT_TYPE_OPTIONS}
              {...register('type', {
                required: 'Campo obrigatório'
              })}
            />

            {type === DOCUMENT_TYPE_OPTIONS[0].value ? (
              <>
                <Input
                  maxWidth="30.125rem"
                  width="100%"
                  label="CPF: *"
                  className="larger-input"
                  mask="999.999.999-99"
                  error={errors.cpf?.message}
                  {...register('cpf', {
                    required: 'Campo obrigatório'
                  })}
                />

                <Input
                  maxWidth="30.125rem"
                  width="100%"
                  label="Nome completo: *"
                  className="larger-input"
                  error={errors.name?.message}
                  {...register('name', {
                    required: 'Campo obrigatório',
                    pattern: {
                      value: isAlphabetLetter,
                      message: 'Somente letras'
                    }
                  })}
                />
              </>
            ) : (
              <>
                <Input
                  maxWidth="30.125rem"
                  width="100%"
                  label="CNPJ: *"
                  mask="99.999.999/9999-99"
                  className="larger-input"
                  error={errors.cnpj?.message}
                  {...register('cnpj', {
                    required: 'Campo obrigatório'
                  })}
                />

                <Input
                  maxWidth="30.125rem"
                  width="100%"
                  label="Razão social: *"
                  className="larger-input"
                  error={errors.corporateName?.message}
                  {...register('corporateName', {
                    required: 'Campo obrigatório'
                  })}
                />
              </>
            )}
          </div>

          <div className="container__form__address">
            <p>Dados do cartório</p>

            <Input
              maxWidth="11rem"
              width="100%"
              label="CEP: *"
              mask="99999-999"
              error={errors.cep?.message}
              {...register('cep', {
                required: 'Campo obrigatório'
              })}
            />

            <div className="form-control">
              <Input
                maxWidth="20.5rem"
                width="100%"
                label="Rua: *"
                error={errors.street?.message}
                {...register('street', {
                  required: 'Campo obrigatório'
                })}
              />

              <Input
                maxWidth="8.125rem"
                width="100%"
                label="Número: *"
                type="number"
                error={errors.number?.message}
                {...register('number', {
                  required: 'Campo obrigatório'
                })}
              />
            </div>

            <div className="form-control">
              <Input
                maxWidth="20.5rem"
                width="100%"
                label="Cidade: *"
                error={errors.city?.message}
                {...register('city', {
                  required: 'Campo obrigatório'
                })}
              />

              <Input
                maxWidth="8.125rem"
                width="100%"
                label="UF: *"
                error={errors.state?.message}
                {...register('state', {
                  required: 'Campo obrigatório'
                })}
              />
            </div>

            <Button type="submit" disabled={isSubmitting} color="blue">
              Criar documento
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
};
