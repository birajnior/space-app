import styled from "styled-components";
import search from "./search.png"

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;

const InputEstilizado = styled.input`
  height: 3.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.625rem;
  border: 0.125rem solid #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 35.375rem;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.25rem;
`;

const IconSearch = styled.img`
position: absolute;
top: 0.625rem;
right: 0.625rem;
width: 2.375rem;
height: 2.375rem;
`;

const InputPesquisa = (props) => {
  return (
    <ContainerEstilizado>
      <InputEstilizado placeholder="O que você procura?" {...props} />
      <IconSearch src={search}  alt="ícone de lupa"/>
    </ContainerEstilizado>
  );
};

export default InputPesquisa;
