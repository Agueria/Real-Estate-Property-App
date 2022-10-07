import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import styles from "./Buttons.module.scss";

const ArrowButton = ({ text, path }) => {
  return (
    <div className={styles.btn}>
      <Link to={`${path}`}>{text}</Link>
      <BsArrowRight />
    </div>
  );
};

ArrowButton.defaultProps = {
  text: "Test btn",
  path: "/",
};

const ActionButton = ({ children, clickFunc }) => {
  return (
    <div className={styles.btn_container}>
      <button
        onClick={() => {
          clickFunc();
        }}
      >
        <span>{children}</span>
      </button>
    </div>
  );
};

ActionButton.defaultProps = {
  children: "Test button",
  clickFunc: console.log("clicked"),
};

export { ArrowButton, ActionButton };
