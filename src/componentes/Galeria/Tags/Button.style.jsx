import styled from "styled-components";

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 1.5rem;
  color: #ffffff;
  border: 3px solid transparent;
  background: #d9d9d94c;
  border-radius: 0.625rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    border-color: #c98cf1;
  }
`;

function TagButton({ children }) {
  return <ButtonStyle>{children}</ButtonStyle>;
}

export default TagButton;
