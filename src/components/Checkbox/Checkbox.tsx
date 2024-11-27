import React from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" />
      {label}
    </label>
  );
};

export default Checkbox;
