import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
<Container>
      <style>
        {`
          body {
            max-width: 600px; /* Defina o tamanho máximo desejado */
            margin: 0 auto; /* Centraliza a página no centro */
          }
        `}
      </style>
      <Row className="justify-content-md-center">
        <Col md={12} className="text-center">
        <h3>Participômetro</h3>
          <h5>(Distribuição dos Tempos de Fala)</h5>
          <br/><br/><br/>
        </Col>
      </Row>

      {/* Linha para LiveGaugeChart */}
      <Row className="justify-content-md-center">
        <Col md={6} className="text-center">
          
        </Col>
      </Row>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>


      {/* Linha para AvatarProgress */}
      <Row className="justify-content-md-center">
        <Col md={6} className="text-center">
         
        </Col>
      </Row>
    </Container>
  );
}

export default App;
