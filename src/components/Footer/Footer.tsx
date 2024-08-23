import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <div className="footer__icon">
          <div className="footer__logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="35" viewBox="0 0 49 35" fill="none">
              <rect y="15" width="20" height="20" rx="10" fill="#9C69E2"/>
              <rect x="29" width="20" height="35" rx="10" fill="#F063B8"/>
            </svg>
          </div>
          <p className="footer__title">DataWarehouse</p>
            
          </div>
        <address className="footer__address">
          Warehouse Society, 234 <br/>Bahagia Ave Street PRBW 29281
          <br />
          <br />
        </address>
        <address className="footer__address1">
          <a href="mailto:info@warehouse.project">info@warehouse.project</a>
          <br/>
          <a href="/">1-232-3434 (Main)</a>
        </address>
        </div>
        <nav className="footer__nav">
          <div className="footer__nav-section">
            <p className="footer__nav-title">About</p>
            <ul className="footer__nav-list">
              <li>Profile</li>
              <li>Features</li>
              <li>Careers</li>
              <li>DW News</li>
            </ul>
          </div>
          <div className="footer__nav-section">
            <p className="footer__nav-title">Help</p>
            <ul className="footer__nav-list">
              <li>Support</li>
              <li>Sign Up</li>
              <li>Guide</li>
              <li>Reports</li>
              <li>Q&A</li>
            </ul>
          </div>
          <div className="footer__nav-section">
            <p className="footer__nav-title">Social Media</p>
            <div className="footer__social">
              <svg xmlns="http://www.w3.org/2000/svg" width="51" height="52" viewBox="0 0 51 52" fill="none">
                <circle opacity="0.1" cx="25.5046" cy="25.9612" r="25.0671" fill="#212353" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="51" height="52" viewBox="0 0 51 52" fill="none">
                <circle opacity="0.1" cx="25.5046" cy="25.9612" r="25.0671" fill="#212353" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="51" height="52" viewBox="0 0 51 52" fill="none">
                <circle opacity="0.1" cx="25.5046" cy="25.9612" r="25.0671" fill="#212353" />
              </svg>
            </div>
          </div>
        </nav>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">
          © Datawarehouse™, 2020. All rights reserved.
          <br />
          Company Registration Number: 21479524.
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
          <circle opacity="0.2" cx="30.9194" cy="30.7212" r="30.0806" fill="#9C69E2" />
          <path
            d="M15.8789 26.6836C15.8789 21.1607 20.3561 16.6836 25.8789 16.6836H35.9595C41.4823 16.6836 45.9595 21.1607 45.9595 26.6836V30.7481C45.9595 36.2709 41.4823 40.7481 35.9595 40.7481H15.8789V26.6836Z"
            fill="#9C69E2"
          />
          <circle cx="24.9038" cy="28.7158" r="2.00537" fill="white" />
          <circle cx="30.9204" cy="28.7158" r="2.00537" fill="white" />
          <circle cx="36.936" cy="28.7158" r="2.00537" fill="white" />
          <path
            d="M25.9058 39.7454H15.8789V42.2291C15.8789 43.7837 17.5748 44.7439 18.9079 43.9441L25.9058 39.7454Z"
            fill="#9C69E2"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
