import { Outlet} from "react-router-dom";

import { Fragment, useContext } from "react";

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg"; 

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import {CartContext} from "../../contexts/cart.context";

import { NavigationContainer, LogoContainer, NavLinksContainer, NavbarLink} from "./navigation.styles";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {
const currentUser = useSelector(selectCurrentUser);

  const {isCartOpen} = useContext(CartContext);
  return <Fragment>
  <NavigationContainer>
    <LogoContainer to={"/"}>
      <CrwnLogo className="logo"/>
    </LogoContainer>
    <NavLinksContainer>
    <NavbarLink to={"/shop"} className="nav-link">
      SHOP
    </NavbarLink>
    {
      currentUser ?
      <NavbarLink as="span" onClick={signOutUser}>SIGN OUT</NavbarLink>:
      <NavbarLink to={"/auth"}>
      SIGN IN
      </NavbarLink>
    }
    <CartIcon />
    </NavLinksContainer>
    {isCartOpen && <CartDropdown/>}
  </NavigationContainer>
  <Outlet/>
  </Fragment>
};

export default Navigation;