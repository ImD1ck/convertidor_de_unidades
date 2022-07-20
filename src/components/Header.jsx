import { BsArrowLeftRight } from "react-icons/bs";

import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <span className="logo">
        <BsArrowLeftRight />
        unit convert
      </span>
    </header>
  );
};

export default Header;
