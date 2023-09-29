import { Link } from "react-router-dom";

import styled from "styled-components";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const LogoContainer = styled(Link)`
height: 70%;
width: 50px;
padding: 10px;
box-sizing: content-box;
`;

export const NavLinksContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`;

export const NavbarLink = styled(Link)`
padding: 20px 15px;
cursor: pointer;
`;