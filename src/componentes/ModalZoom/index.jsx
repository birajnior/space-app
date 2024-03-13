import styled from "styled-components";
import Imagem from "../Galeria/Img";
import BotaoIcone from "../BotaoIcone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 18.375rem;
  background: transparent;
  padding: 0;
  border: 0;
  width: 72.25rem;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 1.25rem;
      right: 3.75rem;
    }
  }
`;

const ModalZoom = ({ foto, aoFechar }) => {
  return (
    <>
      {foto && (
        <>
          <Overlay />
          <DialogEstilizado open={!!foto} onClose={aoFechar}>
            <Imagem foto={foto} expandida={true} />
            <form method="dialog">
              <BotaoIcone formMethod="dialog">
                <FontAwesomeIcon icon={faXmark} style={{ color: "#ffffff" }} />
              </BotaoIcone>
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalZoom;
