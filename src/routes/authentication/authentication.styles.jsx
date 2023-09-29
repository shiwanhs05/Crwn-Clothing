import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-between;
margin: 30px auto;
max-width: 1050px;
flex-wrap: wrap;
@media screen and (max-width: 992px)
{
  justify-content: center;
  gap: 50px;
}
`;
