import styles from "../../styles/Auguri.module.css";
import { useState, useEffect } from "react";
import InputColor from "@/components/InputColor";
import Confetti from "react-confetti";

export default function Auguri() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [colorChange, setColorChange] = useState("rgb(255, 192, 253)");

  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }, []);

  return (
    <>
      <Confetti width={width} height={height} colors={[colorChange]} />
      <div className={styles.banner}>
        <div className={styles.container}>
          <a href="/" className={styles.backHome}>
            Torna alla Home
          </a>
          <p className={styles.wishes}>🎉 Tanti auguri! 🎉</p>
          <InputColor setColorChange={setColorChange} />
        </div>
      </div>
    </>
  );
}
