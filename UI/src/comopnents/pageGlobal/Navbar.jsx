// import{Link} from "react-router-dom";
import { NavLink } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import logoImg from "../../image/nav-bar/logo.png";
import shoppingCartIcon from "../../image/nav-bar/shopping_cart.svg";
import menuIcon from "../../image/nav-bar/menu.png";
import logout from "../../image/nav-bar/logout.png";
import "../../comopnents/css/Navbar.css";
// import { AuthContext, CartContext, ReservationContext } from "../contexts";
// import { CLEAR_RESERVATION, LOG_OUT, SET_CART } from "../actionTypes";
// import { getCartInfo } from "../helper/helper";
function Navbar() {
  // const { auth, authDispatch } = useContext(AuthContext);
 /*const { reservationValue, reservationDispatch } =
    useContext(ReservationContext);
  const logOutHandler = () => {
    authDispatch({ type: LOG_OUT });
    reservationDispatch({ type: CLEAR_RESERVATION });
  };*/
  // const { cartInfo, cartDispatch } = useContext(CartContext);

  // useEffect(() => {
  //   let cartInfoInit = getCartInfo();
  //   cartDispatch({
  //     type: SET_CART,
  //     payload: {
  //       total: cartInfoInit.total,
  //       totalQty: cartInfoInit.totalQty,
  //     },
  //   });
  // }, []);
  const [itemsInCart, setItemsInCart] = useState("");
  // useEffect(() => {
  //   setItemsInCart(cartInfo.totalQty);
  // }, [cartInfo]);
  return (
    <section className="top">
      <marquee className="top_p">
        Choisissez et récupérez votre produit de n'importe où
      </marquee>
      <section className="logo_ttl_bskt">
        <img className="logo" src={logoImg} alt="" />
        <header>
          <h1>
            Inventory <span></span> Software System
          </h1>
        </header>
        <section className="panier_logo">
          {/* <Link to={"/cart"}>
            <span className="position-relative mx-4">
              <img className="panier" src={shoppingCartIcon} alt="panier" />
              <span
                style={{
                  backgroundColor: "#F0C231",
                  right: -20,
                  borderRadius: "50%",
                  color: "#000",
                }}
                className="position-absolute px-2 py-1">
                {itemsInCart}
              </span>
            </span>
          </Link> */}

          {/* {auth.user && (
            <>
              <img
                style={{ width: 25, cursor: "pointer", marginLeft: 10 }}
                onClick={logOutHandler}
                title="Log Out"
                src={logout}
                alt=""
              />
              <span>{auth.user.first_name}</span>
            </>
          )} */}
        </section>
      </section>

      {/* panier and loginOut section end */}
      <section className="mainNav">
        <input type="checkbox" id="nav-toggler" className="nav-toggler" />
        <label htmlFor="nav-toggler" id="nav-lbl">
          <img
            style={{ width: 25, cursor: "pointer", marginLeft: 10 }}
            src={menuIcon}
            alt="menu"
          />
        </label>
        <nav>
          <ul>
            <li>
              <NavLink to=""> Accueil </NavLink>
            </li>
            <li>
              <NavLink to="/boutiqueLandingImgaes"> Product </NavLink>
            </li>
            {/* <li>
              {auth.user ? (
                <NavLink to="/" onClick={logOutHandler}>
                  Disconnexion{" "}
                </NavLink>
              ) : (
                <NavLink to="/login"> Connexion </NavLink>
              )}
            </li> */}
            <li>
              <NavLink to="/panier"> Contact </NavLink>
            </li>
            <li>
              <NavLink to="/propos"> Propos </NavLink>
            </li>
            {/* {auth.role === "ADMIN" && (
              <li>
                <NavLink to="/admin">Admin</NavLink>
              </li>
            )} */}
            {/* {auth.role === "USER" && (
              <li>
                <NavLink to="/user-reservation">Reservation</NavLink>
              </li>
            )} */}
          </ul>
        </nav>
      </section>
    </section>
  );
}
export default Navbar;
