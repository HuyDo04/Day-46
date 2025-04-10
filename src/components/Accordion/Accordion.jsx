import {
  faChevronCircleDown,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Accordion.module.scss";
import PropsTypes from "prop-types";

const defaultFn = () => {};

function Accordion({
  defaultIndex = 0,
  onChange = defaultFn,
  collapseOthers = true,
  children,
}) {
  const accordionList = React.Children.toArray(children);
  const [openIndex, setOpenIndex] = useState([defaultIndex]);
  const [focusIndex, setFocusIndex] = useState(defaultIndex);
  const focus = useRef();

  useEffect(() => {
    if (collapseOthers) {
      onChange(openIndex[0]);
    } else {
      onChange(openIndex);
    }
  }, [collapseOthers, onChange, openIndex]);

  const toggle = (index) => {
    if (collapseOthers) {
      setOpenIndex((prev) => (prev[0] === index ? [] : [index]));
    } else {
      setOpenIndex((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    }
  };

  const handleKey = (e) => {
    console.log(e.key);
    const total = accordionList.length;
    if (e.key === "ArrowUp" || e.key === "ArrowRight") {
      e.preventDefault();
      setFocusIndex((focus) => (focus - 1 + total) % total);
    } else if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
      e.preventDefault();
      setFocusIndex((focus) => (focus + 1) % total);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(focusIndex);
    }
  };

  useEffect(() => {
    if (focus.current) {
      focus.current.focus();
    }
  }, []);

  return (
    <div className={styles.accordion} ref={focus} onKeyDown={handleKey}>
      {accordionList.map((item, i) => {
        const isOpen = openIndex.includes(i);
        const isFocus = focusIndex === i;
        const header = item.props.header;
        const content = item.props.children;

        return (
          <div key={i}>
            <button
              onClick={() => toggle(i)}
              className={`${styles.header} ${isOpen ? styles.open : ""} ${
                isFocus ? styles.focus : ""
              }`}
            >
              {header}{" "}
              <FontAwesomeIcon
                className={styles.icon}
                icon={isOpen ? faChevronCircleUp : faChevronCircleDown}
              />
            </button>
            {isOpen && <div className={styles.content}>{content}</div>}
          </div>
        );
      })}
    </div>
  );
}

Accordion.propTypes = {
  defaultIndex: PropsTypes.number,
  onChange: PropsTypes.func,
  collapseOthers: PropsTypes.bool,
  children: PropsTypes.node,
};

export default Accordion;
