import { useState } from "react";
import styles from "../InputColor/index.module.css";

const InputColor = ({ setColorChange }) => {
  const [textInput, setTextInput] = useState("");

  const onHandleTextChange = (e) => {
    setTextInput(e.target.value);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setColorChange(textInput);
  };

  return (
    <form onSubmit={onHandleSubmit} className={styles.form}>
      <input
        type="text"
        value={textInput}
        placeholder="Qual è il tuo colore preferito?"
        onChange={onHandleTextChange}
        className={styles.text}
      />
      <input type="submit" value="Applica" className={styles.btn} />
    </form>
  );
};

export default InputColor;
