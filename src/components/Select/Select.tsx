import React from "react";
import styles from "./Select.module.css";

interface SelectProps {
  options: string[];
  onChange?: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, onChange }) => {
  return (
    <select
      className={styles.select}
      onChange={(e) => onChange?.(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
