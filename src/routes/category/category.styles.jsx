import styled from "styled-components";

export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 20px;
row-gap: 40px;
margin-bottom: 50px;
@media screen and (max-width: 992px) {
  grid-template-columns: repeat(2, 1fr);
  row-gap: 30px;
}
@media screen and (max-width: 672px) {
  grid-template-columns: 1fr;
}
`;
export const Title = styled.h2`
font-size: 38px;
margin-bottom: 25px;
text-align: center;
`;