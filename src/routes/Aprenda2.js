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
              <Accordion.Header>Linha 1-Azul</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Estações: Tucuruvi, Paraíso e Jabaquara.
                  </li>
                  <li>Horário de funcionamento: 04h40 às 00h</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Linha 2-Verde</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Estações: Paraíso, Consolação e Tamanduateí.</li>
                <li>Horário de funcionamento: 04h40 às 00h</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Linha 3-Vermelha</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Estações: Corinthians-Itaquera, Tatuapé, Brás e República. </li>
                <li>Horário de funcionamento: 04h40 às 00h</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Linha 4-Amarela</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Estações: Luz, República, Higienópolis-Mackenzie, Fradique Coutinho, Pinheiros e Butantã.</li>
                <li>Horário de funcionamento: 04h40 às 00h</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Linhas 5-Lilás</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Capão Redondo, Campo Limpo, Vila das Belezas, Giovanni Gronchi, Santo Amaro, Largo Treze, Adolfo Pinheiro, Alto da Boa Vista, Borba Gato, Brooklin, Campo Belo, Eucaliptos, Moema, AACD-Servidor, Hospital São Paulo, Santa Cruz e Chácara Klabin.</li>
                <li>Horário de funcionamento: 04h40 às 00h</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>Linha 15-Prata</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Estações: Sapopemba e São Matheus. </li>
                <li>Horário de funcionamento: 04h40 às 00h</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>Linha 11-Coral</Accordion.Header>
              <Accordion.Body>
                <ul>
                <li> Estação: Guaianases.</li>
                <li>Horário de funcionamento: 04h40 às 00h</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>Linha 12-Safira</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>São Miguel Paulista, Engenheiro Goulart e Jardim Helena - Vila Mara.</li>
                <li>Horário de funcionamento: 04h40 às 00h</li>
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
