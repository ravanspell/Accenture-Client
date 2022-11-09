import React from "react";
import PropTypes from "prop-types";
import useStyles from './styles'

const getMappedVariant = (classes, variant) => {
  switch (variant) {
    case "header":
      return classes.header;
    case "pageHeader":
      return classes.pageHeader
    case "menu":
      return classes.menu
    default:
      return classes.fieldHeader;
  }
};

const TextLabel = (props) => {
  const classes = useStyles()
  const { variant, style } = props;
  return (
    <div style={style} className={getMappedVariant(classes, variant)}>
      {props.children}
    </div>
  )
}

TextLabel.propTypes = {
  children: PropTypes.any.isRequired,
  variant: PropTypes.oneOf(["header", "pageHeader", "menu",""]),
  style: PropTypes.any
};

TextLabel.defaultProps = {
  variant: "",
  style: {}
};

export default TextLabel;