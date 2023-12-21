import "./index.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="header__wrapper">
        <div className="header__user">
          <img src="https://picsum.photos/40/40" alt="user" />
        </div>
        <div className="header__logo">
          <img src="https://img.logoipsum.com/331.svg" alt="logo" />
        </div>
        <div className="header__settings">
          <img
            src="https://img.icons8.com/nolan/64/FF8177/B12A5B/settings--v1.png"
            alt="impostazioni"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
