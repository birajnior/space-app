import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SectionFluida = styled.section`
  flex-grow: 1;
`;

const Galeria = () => {
  return (
    <>
      <Tags />

      <GaleriaContainer>
        <SectionFluida>
          <Titulo>Navegue pela galeria</Titulo>
        </SectionFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
