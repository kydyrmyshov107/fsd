import { useState, useRef } from "react";
import styles from "@shared/ui/dropdown/DropDown.module.scss";
import { useOutsideClick } from "@shared/hooks/useOutsideClick";

const DropDown = ({ options, className, onSelect }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const dropdownRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option.value);
    }
  };

  useOutsideClick(dropdownRef, () => setIsOpen(false));

  return (
    <div className={`${styles.dropdown} ${className}`} ref={dropdownRef}>
      {isOpen && (
        <ul className={styles.dropdown_list}>
          {options.length > 0 ? (
            options.map((option) => (
              <li
                key={option.value}
                className={styles.dropdown_item}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </li>
            ))
          ) : (
            <li className={styles.dropdown_item}>Нет опций</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
