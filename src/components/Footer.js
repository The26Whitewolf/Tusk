import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>
        Made By <a href="http://whitewolf.me">Whitewolf</a>
      </p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
