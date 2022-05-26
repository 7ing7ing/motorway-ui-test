import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/form">Form</Link>
      <Link to="/card">Header</Link>
    </div>
  );
};

export default Header;
