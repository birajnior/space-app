import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
  #iconSearch {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
    border: 2px solid;
    color: #d9d9d9;
    border-color: #c98cf1;
    background: transparent;
    box-sizing: border-box;

  }
`;

const InputEstilizado = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

const InputPesquisa = (props) => {
  return (
    <ContainerEstilizado>
      <InputEstilizado placeholder="O que você procura?" {...props} />
      <FontAwesomeIcon icon={faSearch} id="iconSearch" />
    </ContainerEstilizado>
  );
};

export default InputPesquisa;
