import "./index.css";
import Button from "../button/Button";
import netflix from "../../assets/netflix.svg";

const Hero = ({ title, textContent }) => {
  return (
    <div className="hero">
      <div className="hero__section">
        <div className="hero__text">
          <h1>{title}</h1>
          <p>{textContent}</p>
          <Button textContent="Scopri di più" color="#ffffff" />
        </div>
        <div className="hero__img">
          <img src={netflix} alt="hero img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
