import styled from "styled-components";

export const Container = styled.div`display: flex;
flex-direction: column;
margin-bottom: 30px;
`;

export const Title = styled.span`font-size: 28px;
margin-bottom: 25px;
cursor: pointer;
`;

export const Preview = styled.div`display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 20px;
@media screen and (max-width: 992px){
  grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
}
@media screen and (max-width: 672px){
  grid-template-columns: 1fr;
}
`;