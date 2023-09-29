import styled from "styled-components";

import {css} from "styled-components";

const sharedStyle = css`width: 23%;`;

export const Container = styled.div`width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 20px;
align-items: center
;`;

export const ImageContainer = styled.div`
width: 23%;
padding-right: 15px;
`;

export const Image = styled.img`
width: 100%;
height: 100%;
`;

export const Name = styled.span`
${sharedStyle}
`;

export const Quantity = styled.span`
${sharedStyle};
display: flex;`;

export const Price = styled.span`${sharedStyle}`;

export const Arrow = styled.span`cursor: pointer;`;

export const Value = styled.div`margin: 0 10px;`;

export const RemoveBtn = styled.div`
padding-left: 12px;
cursor: pointer;`;

