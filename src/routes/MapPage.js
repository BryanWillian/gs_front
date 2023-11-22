import React from "react";
import styled from 'styled-components';

const MapPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80%;

  iframe {
    width: 800px;
    height: 600px;
    border: none;
    @media screen and (max-width: 960px) {
    max-width: 80%;
    max-height: 80%;
    }
  }
`;

const MapPageTitle = styled.h2`
  color: #263243;
  margin-bottom: 0.5em;
`;

const MapPageText = styled.p`
  margin-bottom: 1em;
`;

function MapPage() {
  return (
    <div className="mappage">
      <MapPageContainer>
        <MapPageTitle>Pontos de distribuição de preservativos</MapPageTitle>
        <MapPageText>Encontre o ponto de distribuição mais próximo de você no mapa abaixo</MapPageText>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=10nLxqTmLcDRkwE8IEZpWIQhvPCcyO8k&ehbc=2E312F"
         width="640"
          height="480">
          </iframe>
      </MapPageContainer>  
    </div>
  );
}

export default MapPage;
