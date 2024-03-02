import styled from "styled-components"

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 20.5rem;
    margin: 0;
    border-radius: 1.25rem;
    max-width: 100%;
    background-size: cover;
`
const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 3rem;
    color: #FFFFFF;
    max-width: 18.75rem;
    padding: 0 4rem;
`


const Banner = ({texto, backgroundImage}) => {
  return (<FigureEstilizada $backgroundImage={backgroundImage}>
    <TituloEstilizado>{texto}</TituloEstilizado>
</FigureEstilizada>)
}

export default Banner