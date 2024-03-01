import styled from "styled-components";
import InputPesquisa from "../CampoTexto";

const HeaderEstilizado = styled.header`
  padding: 3.75rem 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 13.25rem;
  }
`;

const Cabecalho = () => {
  return (
    <HeaderEstilizado>
      <img src="/imagens/logo.png" alt="Logo space app" />
      <InputPesquisa />
    </HeaderEstilizado>
  );
};

export default Cabecalho;
