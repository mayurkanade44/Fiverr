import { about, categories, community, moreFiver, support } from "../../data";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            {categories.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <div className="item">
            <h2>About</h2>
            {about.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <div className="item">
            <h2>Support</h2>
            {support.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <div className="item">
            <h2>Community</h2>
            {community.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <div className="item">
            <h2>More From Fiverr</h2>
            {moreFiver.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Fiverr</h2>
            <span>© Fiverr International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/images/twitter.png" alt="" />
              <img src="/images/facebook.png" alt="" />
              <img src="/images/linkedin.png" alt="" />
              <img src="/images/pinterest.png" alt="" />
              <img src="/images/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/images/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/images/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/images/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
