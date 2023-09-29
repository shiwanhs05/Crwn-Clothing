import styled from "styled-components";

export const Container = styled.div`
width: 55%;
min-height: 90vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 50px auto 0;
@media screen and (max-width: 992px) {
  width: 80%;
}
@media screen and (max-width: 672px) {
  width: 90%;
}
@media screen and (max-width: 448px) {
  width: 100%;
}
`;

export const Header = styled.div`
width: 100%;
padding: 10px 0;
display: flex;
justify-content: space-between;
border-bottom: 1px solid darkgrey;

@media screen and (max-width: 992px)
{
  font-size: 15px;
}
@media screen and (max-width: 672px) {
  font-size: 12.5px;
}
@media screen and (max-width: 448px) {
  font-size: 10px;
}

`;

export const HeaderBlock = styled.div`
text-transform: capitalize;
width: 23%;

&:last-child {
  width: 8%;
}

`;

export const Total = styled.div`
margin-top: 30px;
margin-left: auto;
font-size: 36px;

@media screen and (max-width: 672px)
{
  font-size: 25px;
}
`;