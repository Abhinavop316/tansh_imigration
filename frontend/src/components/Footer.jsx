import React from "react";
import "../styles/Footer.css";

function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="wb-info" className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__inner">
          <h2 className="sr-only">About government</h2>
          <div className="site-footer__links-grid">
            <a
              href="#"
              rel="noreferrer"
              className="site-footer__link"
            >
              Contact us
            </a>
            <a
              href="#"
              rel="noreferrer"
              className="site-footer__link"
            >
              Departments and agencies
            </a>
            <a
              href="#"
              rel="noreferrer"
              className="site-footer__link"
            >
              Public service and military
            </a>
            <a
              href="#"
              rel="noreferrer"
              className="site-footer__link"
            >
              News
            </a>
            <a
              href="#"
              rel="noreferrer"
              className="site-footer__link"
            >
              Treaties, laws and regulations
            </a>
            <a
              href="#"
              rel="noreferrer"
              className="site-footer__link"
            >
              Government-wide reporting
            </a>
            <a
              href="#"
              rel="noreferrer"
              className="site-footer__link"
            >
              Prime Minister
            </a>
            <a
              href="#"
              rel="noreferrer"
              className="site-footer__link"
            >
              About government
            </a>
            <a
              href="#"
              rel="noreferrer"
              className="site-footer__link"
            >
              Open government
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__inner site-footer__bottom-inner">
          <nav aria-label="About this site">
            <ul className="site-footer__subnav">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="site-footer__subnav-link"
                >
                  Social media
                </a>
              </li>
              <li>
                <a
                  href="# "
                  rel="noreferrer"
                  className="site-footer__subnav-link"
                >
                  Mobile applications
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="site-footer__subnav-link"
                >
                  About Canada.ca
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="site-footer__subnav-link"
                >
                  Terms and conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="site-footer__subnav-link"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </nav>

          {/* Top of Page Link & Canada Wordmark */}
          <div className="site-footer__brand-row">
            <button
              type="button"
              onClick={scrollToTop}
              className="site-footer__top-link"
            >
              <span>Top of page</span>
              <span className="site-footer__top-link-icon">↑</span>
            </button>

            <div className="site-footer__wordmark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 450 100"
                className="site-footer__wordmark-svg"
                aria-label="Symbol of the Government of Canada"
              >
                <text
                  x="10"
                  y="70"
                  fontFamily="sans-serif"
                  fontSize="65"
                  fontWeight="bold"
                  letterSpacing="1"
                  fill="#ffffff"
                >
                  Canada
                </text>
                {/* Flag motif over the 'a' */}
                <path d="M260 20 L275 32 L260 44 Z" fill="#FF0000" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
