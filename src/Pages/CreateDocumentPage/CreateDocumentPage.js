import { useEffect, useState } from 'react';
import { DocumentForm, Header, Footer, InfoCard, EmptyCard, DocumentCard } from '../../components';
import { getDocuments } from '../../services/api';

export const CreateDocumentPage = () => {
  const [documents, setDocuments] = useState([]);
  const requestedDocumentsText = `${documents.length} ${
    documents.length === 1 ? 'documento solicitado' : 'documentos solicitados'
  }`;

  useEffect(() => {
    const fetchDocuments = async () => {
      const response = await getDocuments();
      setDocuments(response);
    };

    fetchDocuments();
  }, []);

  return (
    <div className="document__page">
      <Header />
      <div className="document__page__content">
        <h1>Pedido #1</h1>
        <InfoCard />
        <div className="document__page__control">
          <DocumentForm setDocuments={setDocuments} />
          <div>
            <h2 className="mb-16">{requestedDocumentsText}</h2>
            {documents.length > 0 ? (
              documents.map(document => (
                <DocumentCard key={document.id} document={document} setDocuments={setDocuments} />
              ))
            ) : (
              <EmptyCard />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
