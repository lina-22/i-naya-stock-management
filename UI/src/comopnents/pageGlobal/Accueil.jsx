import mainImg from "../../image/main-page/hero-img.jpg";
import photoRight from "../../image/main-page/img-body-right.webp";
import photoLeft from "../../image/main-page/img-body-left.jpg";
import phOne from "../../image/body-image/photo-one.gif";
import phTwo from "../../image/body-image/photo-two.gif";
import phThree from "../../image/body-image/photo-three.gif";
import phFour from "../../image/body-image/photo-four.gif";
import "../css/Accueil.css";
import { useEffect } from "react";

function Accueil() {
  return (
    <div>
      <div className="hero">
        <img className="main_image" src={mainImg} alt="" />
        <h2 className="info_pub">
          La vie est devenue <br /> très facile
        </h2>
      </div>
      <div className="promo_trending">
        <section className="promotoion">
          <h4>
            Gérez votre entreprise <br />
            <span>DE MANIERE PLUS EFFICACE</span>
          </h4>
        </section>
        <section className="trending">
          <article>
            <img className="photo_right" src={photoLeft} alt="" />
            <p>Minimisez les transferts</p>
          </article>
          <article>
            <p>Optimisez votre entrepôt</p>
            <img className="photo_left" src={photoRight} alt="" />
          </article>
        </section>

        <section className="promotoion">
          <article>
            {/* here need to bring the photos randomly */}
            <img className="photo_left" src={phOne} alt="" />
            <img className="photo_left" src={phTwo} alt="" />
            <img className="photo_left" src={phThree} alt="" />
            <img className="photo_left" src={phFour} alt="" />
          </article>
        </section>
      </div>
    </div>
  );
}

export default Accueil;
