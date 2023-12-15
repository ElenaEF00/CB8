import Button from "../button/Button";
import "./index.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://img.logoipsum.com/331.svg" alt="logo" />
      </div>
      <div className="navbar__menu">
        <ul className="menu__list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Chi siamo</a>
          </li>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">Contatti</a>
          </li>
        </ul>
      </div>
      <Button textContent="Login" color="rgb(181, 2, 2)" />
    </div>
  );
};

export default Navbar;
