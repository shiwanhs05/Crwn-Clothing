import { useNavigate } from "react-router-dom";

import {Container, BackgroundImage, Body} from "./directory-item.styles";

const DirectoryItem = ({category}) => {
const navigate = useNavigate();
const { title, imageUrl, route} = category;
const ClickHandler = () => navigate(route);
return (
    <Container>
    <BackgroundImage url={imageUrl}></BackgroundImage>
    <Body onClick={ClickHandler}>
    <h2>{title}</h2>
    <p>Shop Now</p>
    </Body>
    </Container>)
};

export default DirectoryItem;