import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="terms">
      <img src="/logo.png" alt="" />
      <div className="links">
        <Link to="/">Terms of Service</Link>
        <span>|</span>
        <Link to="/">Privacy Policy</Link>
      </div>
    </div>
  );
};

export default Footer;
