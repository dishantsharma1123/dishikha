import React from "react";
import styles from "./RadioButton.module.css";

interface RadioButtonProps {
  label?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label }) => {
  return (
    <label className={styles.radio}>
      <input type="radio" />
      {label}
    </label>
  );
};

export default RadioButton;
