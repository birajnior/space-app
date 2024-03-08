import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Img";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SectionFluida = styled.section`
  flex-grow: 1;
`;

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({ fotos = [] }) => {
  return (
    <>
      <Tags />

      <GaleriaContainer>
        <SectionFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotos.map((foto) => (
              // <li>{foto.titulo}</li>
              <Imagem 
              key={foto.id}
              foto={foto}
              />
            ))}
          </ImagensContainer>
        </SectionFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
