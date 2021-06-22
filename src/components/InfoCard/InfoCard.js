import { Card } from '../';

export const InfoCard = () => (
  <Card width="100%" height="12.0625rem" padding="1.5rem" margin="1rem 0px" className="info-card">
    <div className="info-card__header">
      <h2>Lead: Documento para criar contrato</h2>
      <p>Em andamento</p>
    </div>
    <p>
      <strong>Observação:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
      sollicitudin commodo faucibus. Nullam ut pharetra turpis. Vestibulum molestie turpis ac tortor
      dapibus porttitor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Etiam in elit vitae ligula consectetur hendrerit id id odio. Vestibulum
      volutpat gravida arcu sit amet tempus. In rhoncus leo vel dolor convallis gravida id a nulla.
    </p>
    <div className="info-card__footer">
      <p>
        <strong>Criado por:</strong> João da Silva
      </p>
      <p>
        <strong>Data de criação:</strong> 11 de maio de 2021
      </p>
    </div>
  </Card>
);
