import { NavLink } from "react-bootstrap";
import { useState } from "react";
import logoImg from "../../image/nav-bar/logo.png";
import menuIcon from "../../image/nav-bar/menu.png";
import "../../comopnents/css/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <section className="top">
      <marquee className="top_p">
        Choisissez et récupérez votre produit de n'importe où
      </marquee>
      <section className="logo_ttl_bskt">
        <img className="logo" src={logoImg} alt="" />
        <header>
          <h1>
            I-<span>naya</span>-Inventory System
          </h1>
        </header>
      </section>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto p-2">
            <li className="nav-item">
              <Link className="m-5" style={{ textDecoration: "none" }} to={"/"}>
                Acceuil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="m-5"
                style={{ textDecoration: "none" }}
                to={"/supplier"}>
                Fournisseur
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
export default Navbar;
