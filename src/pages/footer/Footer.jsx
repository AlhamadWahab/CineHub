import React from "react";
import "./footer.css";
import FooterNavItem from "../../components/footerNavItem/FooterNavItem";

function Footer() {
  const links = ["Home", "Movies", "Series", "Privacy"];
  const locations = ["Celle", "Berlin", "Köln", "München"];
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg5 col-md-12 footer-info">
                <a href="/" className="logo d-flex align-items-center">
                  Cine <span> Hub</span>
                </a>
                <p>Your Ultimate Cinema Hub, Movies & Series...</p>
                <div className="social-links mt-3">
                  <a href="#§" className="twitter">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                  <a href="#/" className="facebook">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a href="#&" className="instagram">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                  <a href="#%" className="youtube">
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4>Links</h4>
                <ul>
                  {links.map((link) => (
                    <FooterNavItem key={link} name={link} />
                  ))}
                </ul>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4>Our Cinemas Locations</h4>
                <ul>
                  {locations.map((link) => (
                    <FooterNavItem key={link} name={link} />
                  ))}
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact us</h4>
                <p>
                  Hannover Str.4b <br />
                  Hannover, 36256 <br />
                  <strong>Mobil:</strong> +49 215 357 02 456
                  <br />
                  <strong>E-Mail:</strong> cine.hub.info@gmx.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright. 2024,
            <strong>
              <span> Cine Hub Team.</span>
            </strong>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
