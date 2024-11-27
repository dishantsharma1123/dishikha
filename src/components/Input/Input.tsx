import React from "react";
import styles from "./Input.module.css";

interface InputProps {
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return <input className={styles.input} placeholder={placeholder} />;
};

export default Input;
