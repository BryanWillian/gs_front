import React from 'react';
import "../styles-sass/Aprenda1.css";
import Accordion from 'react-bootstrap/Accordion';

const Aprenda1 = () => {
  return (
    <>
      <div className="aprenda1">
        <h1>Dias e horários de colea</h1>
      

        <div className="accordionContainer">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>É seguro usar dois preservativos ao mesmo tempo para aumentar a proteção?</Accordion.Header>
              <Accordion.Body>
              Não, usar dois preservativos ao mesmo tempo pode aumentar o atrito
entre eles, levando a rupturas. É recomendável usar apenas um
preservativo de cada vez e garantir que seja colocado e removido
corretamente.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>A aids mata?</Accordion.Header>
              <Accordion.Body>
              A AIDS (Síndrome da Imunodeficiência Adquirida) pode levar à morte se
não for tratada. No entanto, com tratamento adequado, as pessoas com
HIV podem levar uma vida longa e saudável.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Como colocar camisinha?</Accordion.Header>
              <Accordion.Body>
              A AIDS (Síndrome da Imunodeficiência Adquirida) pode levar à morte se
não for tratada. No entanto, com tratamento adequado, as pessoas com
HIV podem levar uma vida longa e saudável.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Posso fazer sexo sem preservativo?</Accordion.Header>
              <Accordion.Body>
              Embora seja possível, fazer sexo sem preservativo aumenta o risco de
contrair DSTs e gravidez não planejada. O uso de preservativos é uma
prática segura.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>O que é uma DST?</Accordion.Header>
              <Accordion.Body>
              DST significa Doença Sexualmente Transmissível, e é uma infecção que
pode ser transmitida por meio do contato sexual.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>Como as DSTs são transmitidas?</Accordion.Header>
              <Accordion.Body>
                As DSTs podem ser transmitidas por meio do contato sexual desprotegido
com uma pessoa infectada, incluindo sexo vaginal, anal e oral.
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="6">
              <Accordion.Header>Os preservativos são eficazes contra todas as DSTs?</Accordion.Header>
              <Accordion.Body>
              Embora os preservativos reduzam significativamente o risco de
transmissão de muitas DSTs, eles podem não ser 100% eficazes contra
algumas infecções, como o herpes e o HPV, que podem ser transmitidos
por contato direto com a pele não coberta
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>Qual é a diferença entre preservativos masculinos e femininos?</Accordion.Header>
              <Accordion.Body>
              Os preservativos masculinos são colocados sobre o pênis, enquanto os
preservativos femininos são inseridos na vagina. Ambos servem como
barreiras para prevenir a transmissão de DSTs.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header>É seguro reutilizar um preservativo?</Accordion.Header>
              <Accordion.Body>
              Não, os preservativos são projetados para serem de uso único.
Reutilizá-los aumenta significativamente o risco de rompimento e falha
na proteção.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9">
              <Accordion.Header>Qual é a importância do teste regular para DSTs?</Accordion.Header>
              <Accordion.Body>
              O teste regular para DSTs é crucial para identificar infecções
precocemente. Muitas DSTs podem ser assintomáticas, e o tratamento
oportuno é fundamental para prevenir complicações.
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="10">
              <Accordion.Header> As DSTs podem ser tratadas e curadas?</Accordion.Header>
              <Accordion.Body>
              Muitas DSTs podem ser tratadas com antibióticos ou medicamentos
antivirais. No entanto, algumas, como o HIV, não têm cura, mas podem
ser controladas com tratamento.
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="11">
              <Accordion.Header>Posso ter uma DST sem sintomas?</Accordion.Header>
              <Accordion.Body>
              Sim, muitas DSTs podem ser assintomáticas. Isso destaca a importância
dos exames regulares, especialmente se você estiver em risco.
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="12">
              <Accordion.Header>Onde posso conseguir comprar preservativos?</Accordion.Header>
              <Accordion.Body>
              A venda de preservativos pode ser localizada em farmácias, postos de
saúde, metrô e supermercados. Além destas opções, você pode adquirir
camisinha a partir do nosso site (nome do nosso site). Nele, entramos
em contato com o usuário e, a partir da sua localização, solicitamos
ao ponto de venda mais próximo para que entregue no local desejado.
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
      </div>
    </div>
    </>
  );
}

export default Aprenda1;
