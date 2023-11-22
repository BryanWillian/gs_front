import React from 'react';
import "../styles-sass/Aprenda1.css";
import Accordion from 'react-bootstrap/Accordion';

const Aprenda1 = () => {
  return (
    <>
      <div className="aprenda1">
        <h1>Lista das doenças sexualmente transmissíveis mais comuns:</h1>
      

        <div className="accordionContainer">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Aids</Accordion.Header>
              <Accordion.Body>
                <p>A aids é a doença causada pela infecção do Vírus da Imunodeficiência Humana (HIV é a sigla em inglês). Esse vírus ataca o sistema imunológico, que é o responsável por defender o organismo de doenças. As células mais atingidas são os linfócitos T CD4+. O vírus é capaz de alterar o DNA dessa célula e fazer cópias de si mesmo. Depois de se multiplicar, rompe os linfócitos em busca de outros para continuar a infecção.</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Sífilis</Accordion.Header>
              <Accordion.Body>
              <p>A sífilis é uma Infecção Sexualmente Transmissível (IST) curável e exclusiva do ser humano, causada pela bactéria Treponema pallidum. Pode apresentar várias manifestações clínicas e diferentes estágios (sífilis primária, secundária, latente e terciária).

Nos estágios primário e secundário da infecção, a possibilidade de transmissão é maior. A sífilis pode ser transmitida por relação sexual sem camisinha com uma pessoa infectada ou para a criança durante a gestação ou parto.

A infecção por sífilis pode colocar em risco não apenas a saúde do adulto, como também pode ser transmitida para o bebê durante a gestação, podendo evoluir para aborto, graves sequelas ao recém-nascido até mesmo óbito. O acompanhamento das gestantes e parcerias sexuais durante o pré-natal é fundamental pois viabiliza o diagnóstico e tratamento adequado, evitando assim a transmissão para o recém-nascido.</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Gonorréia</Accordion.Header>
              <Accordion.Body>
                <p>Também chamada de blenorragia, a gonorreia é uma IST (infecção sexualmente transmissível) que afeta pacientes de ambos os sexos. Ela é causada pela bactéria Neisseria gonorrhoeae e é considerada a segunda IST bacteriana mais comum em todo o planeta. São transmitidas de um paciente infectado ao outro por meio do contato sexual desprotegido. A bactéria se prolifera em áreas quentes e úmidas, incluindo o canal que leva a urina para fora do corpo, a uretra. Ela pode ser encontrada também no sistema reprodutor feminino, que inclui o útero e o colo do útero.

</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Clamídia</Accordion.Header>
              <Accordion.Body>
              <p>A clamídia é uma condição classificada como IST, ou seja, Infecção Sexualmente Transmissível. É por isso que, muitas vezes, diz-se também infecção por clamídia, quando uma pessoa é diagnosticada com essa condição.

A clamídia é causada por uma bactéria, a Chlamydia trachomatis, e afeta homens e mulheres que sejam sexualmente ativos e que não façam o uso de preservativos. A doença também pode ser transmitida de mãe para bebê, durante o nascimento via canal do parto.

A clamídia normalmente afeta a área genital de homens e mulheres, mas há casos de pessoas que foram infectadas com clamídia nos olhos e também na garganta.

O uso de preservativos durante atos sexuais é a melhor forma de impedir a disseminação da clamídia, já que essa é uma condição capaz de causar fortes dores nos pacientes do sexo masculino. Se não for tratada, a clamídia pode até mesmo causar a infertilidade em homens e mulheres.</p>
              </Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Hepatite B</Accordion.Header>
              <Accordion.Body>
              <p>A hepatite Bafeta mais de 150 mil pessoas por ano no Brasil. O vírus VHB acomete o fígado e causa lesões no órgão, podendo inclusive causar a falência do mesmo ou predispor ao câncer. A hepatite B geralmente é assintomática e portanto, muitas vezes o diagnóstico é tardio, quando já existem lesões irreversíveis. </p>
              </Accordion.Body>
            </Accordion.Item>


          </Accordion>
      </div>
    </div>
    </>
  );
}

export default Aprenda1;
