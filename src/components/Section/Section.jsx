import PropTypes from "prop-types";
import s from "./Section.module.css";

export const Section = ({ title, children }) => (
  <>
    <h2 className={s.title}>{title}</h2>
    <>{children}</>
  </>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
