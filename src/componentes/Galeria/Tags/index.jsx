import styled from "styled-components";
import tags from "./tags.json";
import TagButton from "./Button.style";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.625rem 0.5rem;
  gap: 1.5rem;
`;

const TagTitulo = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  color: #d9d9d9;
  margin-right: 1.875rem;
`;

const Tags = () => {
  return (
    <Wrapper>
      <TagTitulo>Busque por tags:</TagTitulo>
      {tags.map((tag) => (
        <TagButton key={tag.id}>{tag.titulo}</TagButton>
      ))}
    </Wrapper>
  );
};

export default Tags;
