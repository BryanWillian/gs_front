import React from 'react';
import "../styles-sass/Aprenda1.css";
import Accordion from 'react-bootstrap/Accordion';

const Aprenda1 = () => {
  return (
    <>
      <div className="aprenda1">
        <h1>Curiosidades sobre o mundo artístico:</h1>
      

        <div className="accordionContainer">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Freddie Mercury</Accordion.Header>
              <Accordion.Body>
              O cantor e vocalista da banda Queen também foi uma das personalidades que sucumbiu diante do vírus do HIV. Conhecido pelas músicas “I Want To Break Free”, “We Are The Champions” e “Bohemian Rhapsody”, Mercury teve contato com o vírus em 1986, segundo boatos que circulavam na imprensa durante a época, mas o diagnóstico só veio em abril de 1987. Mesmo com a aparência debilitada por conta da Aids, o cantor continuava negando os rumores de que estava doente.

Por fim, em 22 de novembro de 1991, Freddie emitiu um comunicado, por meio do empresário do Queen, assumindo a doença e dizendo que não havia falado antes para proteger a família. “No entanto chegou a hora de meus amigos e meus fãs saberem a verdade, e espero que todos se juntem a mim e aos meus médicos na luta contra essa terrível doença”. O cantor acabou falecendo dois dias depois, vítima de uma broncopneumonia acarretada pela Aids. A história da banda e de Freddie, inclusive, é contada no filme “Bohemian Rhapsody”, com Rami Malek no papel de Freddie.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Cazuza</Accordion.Header>
              <Accordion.Body>
              Considerado um dos maiores cantores do rock brasileiro, Cazuza integrou a banda Barão Vermelho ao lado de Roberto Frejat durante a década de 1980. Autor de clássicos como “Ideologia”, “Pro Dia Nascer Feliz” e “Codinome Beija-Flor”, Cazuza foi diagnosticado com a Aids em 1987, após uma crise de pneumonia, e assumiu a doença publicamente em fevereiro de 1989.

“Caju” ou “Exagerado”, como era conhecido, chegou a fazer tratamento nos Estados Unidos com o medicamento AZT, ainda em 87. No entanto, depois de mais uma viagem ao exterior em 1990, o cantor faleceu em julho daquele ano. Para contar a história de sua vida, a mãe dele, Lucinha Araújo, escreveu o livro “Só As Mães São Felizes”. Após sua morte, os pais também fundaram a Sociedade Viva Cazuza, que luta por melhores condições de vida para crianças soropositivas.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Michel Foucault</Accordion.Header>
              <Accordion.Body>
              O filósofo e sociólogo francês Michel Foucault, autor de obras como “Vigiar e Punir” e “História da Sexualidade”, nasceu em 1926, e faleceu em 1984, aos 57 anos, vítima da Aids. Não se sabe quando o filósofo teve contato com o vírus do HIV, mas após sua morte, seu companheiro Daniel Defert criou a AIDES, uma associação de luta contra o vírus e a hepatite viral.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Renato Russo</Accordion.Header>
              <Accordion.Body>
              Nome artístico de Renato Manfredini Júnior (Rio de Janeiro, 27 de março de 1960 – Rio de Janeiro, 11 de outubro de 1996), foi um cantor e  compositor brasileiro, célebre por ter sido o vocalista e fundador da banda de rock Legião Urbana. Renato morreu devido as complicações causadas pelo HIV em 11 de outubro de 1996, na época com 36 anos, faltando apenas 1 dia para o aniversário da banda. Amigos do cantor afirmam que ele contraiu a doença após se envolver com um rapaz que conheceu em Nova Iorque, portador da doença, em 1989.

Antes de fundar a Legião Urbana, Renato integrou o grupo musical Aborto Elétrico, do qual saiu devido às constantes brigas que havia entre ele e o baterista Fê Lemos . Adotou o sobrenome artístico Russo em homenagem ao inglês Bertrand Russell, ao suíço Jean-Jacques Rousseau e ao francês Henri Rousseau..
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Betinho</Accordion.Header>
              <Accordion.Body>
              O sociólogo Herbert de Souza, conhecido como Betinho, também foi um dos intelectuais que sucumbiram à Aids. Como sofria de hemofilia, uma doença que impede a coagulação do sangue, Betinho era obrigado a se submeter a transfusões de sangue periódicas, e em uma dessas transfusões, acabou contraindo o vírus do HIV, em 1986.

Betinho não foi o único na família a contrair a doença. O cartunista Henfil, seu irmão, também era hemofílico, e sofreu com a Aids. O sociólogo dizia que a condição de soropositivo o forçava a “comemorar a vida todas as manhãs”, e no mesmo ano em que descobriu que estava com a doença, Betinho fundou e presidiu a Associação Brasileira Interdisciplinar de Aids, com o objetivo de fomentar políticas públicas para o enfrentamento e prevenção da doença. Betinho faleceu em 1997, já bastante debilitado pela Aids, aos 61 anos.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>Sandra Bréa</Accordion.Header>
              <Accordion.Body>
              A atriz Sandra Bréa, considerada um dos símbolos sexuais do Brasil nos anos 1970 e 1980, foi uma das vítimas do HIV. Bréa iniciou a carreira aos 13 anos de idade, e atuou em novelas consagradas da TV Globo, como “O Bem-Amado”, “Elas Por Elas”, “Ti-Ti-Ti” e “Felicidade”

O diagnóstico de Sandra veio em agosto de 1993, quando a atriz resolveu assumir publicamente a doença, se tornando um dos marcos na luta contra a discriminação. Pela vulnerabilidade causada pelo vírus do HIV, Sandra foi detectada com um câncer no pulmão. Faleceu em maio de 2000, pela metástase do câncer.
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>

          
      </div>
    </div>
    </>
  );
}

export default Aprenda1;
