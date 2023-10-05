import { useSelector } from "react-redux";

import { Outlet} from "react-router-dom";

import { Fragment } from "react";

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg"; 

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import { NavigationContainer, LogoContainer, NavLinksContainer, NavbarLink} from "./navigation.styles";

import { selectCurrentUser } from "../../store/user/user.selector";

import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
const currentUser = useSelector(selectCurrentUser);
const isCartOpen = useSelector(selectIsCartOpen);
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
    {/* checkout page => automatically closes dropdown */}
    {isCartOpen && <CartDropdown/>}
  </NavigationContainer>
  <Outlet/>
  </Fragment>
};

export default Navigation;