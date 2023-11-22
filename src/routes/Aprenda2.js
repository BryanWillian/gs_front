import React from 'react';
import "../styles-sass/Aprenda1.css";
import Accordion from 'react-bootstrap/Accordion';

const Aprenda1 = () => {
  return (
    <>
      <div className="aprenda1">
        <h1>Algumas estações de metrô que oferecem amostras grátis de camisinhas:</h1>
      

        <div className="accordionContainer">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Estação Tucuruvi</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Dia e horário aqui</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Estação Jabaquara</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Dia e horário aqui</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Estação Paraíso</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Dia e horário aqui</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Estação Consolação</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Dia e horário aqui</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Estação República</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Dia e horário aqui</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>Estação Fradique Coutinho</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Dia e horário aqui</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>Estação Corinthians-Itaquera</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Dia e horário aqui</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>Estação Brooklin</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Dia e horário aqui</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
      </div>
    </div>
    </>
  );
}

export default Aprenda1;
