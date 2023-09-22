import { Fragment } from "react";
import { Link } from "react-router-dom";
const Shop = () => {
  return <Fragment>
  <h1>Hi, I'm the shop</h1>
  <Link to={-1} style={{color: "blue"}}>{"   "}Back</Link>
  </Fragment>
};

export default Shop;