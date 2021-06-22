import axios from 'axios';

const viaCep = axios.create({
  baseURL: `https://viacep.com.br/ws/`
});

export const getAddressByCep = async cep => {
  const {
    data: { logradouro, localidade, uf }
  } = await viaCep.get(`https://viacep.com.br/ws/${cep}/json/`);

  return {
    street: logradouro,
    city: localidade,
    state: uf
  };
};
