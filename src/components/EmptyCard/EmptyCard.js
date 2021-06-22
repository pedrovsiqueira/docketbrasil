import { Card } from '../';
import documentImg from '../../assets/document.svg';

export const EmptyCard = () => (
  <Card height="21.875rem" padding="1.5rem" className="empty__card__container">
    <div>
      <img src={documentImg} alt="Document Logo" />
    </div>
    <p>Nenhum documento criado.</p>
  </Card>
);
