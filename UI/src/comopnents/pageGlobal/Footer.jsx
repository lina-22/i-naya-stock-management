import masterImg from "../../image/footer/image_master_card.png";
import paypalImg from "../../image/footer/paypal.png";
import visaImg from "../../image/footer/image_visa.png";
import img20 from "../../image/footer/image 20.png";
import img21 from "../../image/footer/image 21.png";
import img22 from "../../image/footer/image 22.png";

import "../../comopnents/css/Footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <footer>
        <section className="btm_top">
          <section>
            <h5>Paiements</h5>
            <br />
            <span>
              <img className="methods" src={masterImg} alt="" />
              <img className="methods" src={paypalImg} alt="" />
              <img className="methods" src={visaImg} alt="" />
            </span>
          </section>
          <section>
            <h5>Corporate Information</h5>
            <br />
            <span>
              <p> Sécurité</p>
              <p>Career avec nous</p>
              <p>Conditions générales</p>
            </span>
          </section>
          <section>
            <h5>Trouver de L'aide</h5>
            <br />
            <span>
              <p> FAQ </p>
              <p>Mon compte</p>
              <p>Guide des tailles</p>
            </span>
          </section>
        </section>
        <section className="bottom">
          <br />
          <p className="about_short">
            Inventory Software System est un site e-commerce réservé aux passionnés de la
            mode. ISS est la solution simple et rapide pour trouver
            des service. Choisissez, achetez et venez
            récupérer votre commande à notre dépôt ! Des images attractives et
            des tarifs tout en douceur....Idées susceptibles de vous plaire.
          </p>
          <section className="contact_info">
            <address>
              22 rue de chaigneau, Paris 2023 Inventory Software System. Tout droits
              résevés.
            </address>
            <section className="social">
              <p>Suivez nous</p>
              <span>
                <img className="media_images" src={img20} alt="" />
                <img className="media_images" src={img21} alt="" />
                <img className="media_images" src={img22} alt="" />
              </span>
            </section>
          </section>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
