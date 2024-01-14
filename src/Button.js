import PropTypes from "prop-types";
function Button({
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  children,
}) {
  return <button>{children}</button>;
}

Button.propTypes = {
  variationChecker: function ({
    primary,
    secondary,
    success,
    warning,
    danger,
  }) {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      throw new Error(
        "Only one of primary, secondary, success, warning or danger should be true!"
      );
    }
  },
};

export default Button;
