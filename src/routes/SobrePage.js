import React from "react";
import styled from "styled-components";

import QuemSomos from "../images/quemsomos2.jpeg";


const SobrePageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;

const SobrePageContainer2 = styled.div`
  background-color: #ffffff;
  box-shadow: 2px 2px 4px 3px #ddd;
  padding: 50px;
  text-align: center;
  max-width: 80%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  font-size: 18px;
  @media screen and (max-width: 960px) {
    max-width: 90%;
    }
`;

const SobrePageTitle = styled.h2`
  color: #263243;
  margin-bottom: 0.5em;
`;
const SobrePageText = styled.p`
  margin-bottom: 1em;
`;

const QuemSomosImage = styled.img`
  max-width: 40%;
  height: auto;
  border-radius: 5px; 
  margin-bottom: 50px;
`;

function SobrePage() {
  return (
    <div className="sobrepage">
      <SobrePageContainer>
        <SobrePageContainer2>
          <QuemSomosImage src={QuemSomos} alt="Quem Somos" />
          <SobrePageTitle>Quem nós somos?</SobrePageTitle>
          <SobrePageText>Nós somos a LifeAid. O tema proposto na Global Solution deste semestre envolve o uso da tecnologia com a saúde, como meios provenientes para promover um facilitador de acesso da população aos serviços prestados por profissionais da saúde. Diante os temas propostos pelos organizadores do projeto na FIAP, decidimos que iremos abordar o tema: CONTROLE DE DOENÇAS TRANSMISSÍVEIS com ênfase em DST´s (doenças sexualmente transmissíveis).​

Este projeto visa implementar uma estratégia eficaz de sinalização em postos de saúde e estações de metrô para promover a conscientização, quebra de estigmas remanescentes e acessibilidade aos preservativos. A sinalização adequada desses locais não apenas facilitará a identificação dos pontos de distribuição gratuitos, mas também contribuirá para a promoção da saúde sexual, incentivando práticas seguras e prevenindo doenças sexualmente transmissíveis (DSTs).​</SobrePageText>
          <br></br>
          <SobrePageTitle>Nossa solução:</SobrePageTitle>
          <SobrePageText>Nossa solução abrange diversos quesitos, primeiramente, a fim de conscientizar e ampliar o conhecimento das pessoas, desenvolveremos um site informativo explicando detalhadamente no que se diz a respeito às DST´s. Auxiliando na informação, adicionaremos a uma das páginas do site um guia/mapa sinalizando todos os postos de saúde que garantem o acesso gratuito aos preservativos por toda grande São Paulo. Outra aba será disponibilizada para o tratamento de dúvidas e perguntas frequentes a respeito de saúde sexual, que dessa forma auxiliará numa melhora na qualidade de vida e consciência sobre o assunto. O foco principal da nossa plataforma Web é garantir uma melhora na qualidade de vida da população, mas de que jeito? Simples! Informando, conscientizando, potencializando a qualidade de vida e por fim, acabando com os estigmas ainda remanescentes na sociedade. </SobrePageText>
          <br></br>
          <SobrePageTitle>Como funcionará:</SobrePageTitle>
          <SobrePageText>O foco e principal objetivo deste projeto é além de providenciar uma maneira facilitada de acesso aos preservativos, mas também tratar este assunto com uma certa delicadeza para informar e conscientizar as pessoas da importância do uso de preservativos e prontamente junto a este tema, quebrar estigmas ainda remanescentes na nossa sociedade.​

No nosso site criaremos um sistema de mapeamento usando a localização atual do usuário para infroma-lo o ponto de venda mais próximo. O site também estaria focado em ser o mais informativo tratando de uma maneira clara e objetiva sobre Dst´s e seus riscos para a saúde .humana. Adicionados ao nosso projeto como um "plus" faríamos um sistema de delivery de preservativos e para isso entraríamos em contato com o ministério da saúde para viabilizar este serviço e ao mesmo tempo com instituições que realizam o delivery como fonte de renda, como por exemplo, a Uber. Neste processo a venda seria decretada por uma quantidade mínima de preservativos por entrega e desse modo, o único custo gerado ao usuário seria pela taxa de entrega, que neste caso seria destinado à empresa parceira.</SobrePageText>
        </SobrePageContainer2>
      </SobrePageContainer>  
    </div>
  );
}

export default SobrePage;
