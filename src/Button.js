// import PropTypes from "prop-types";
import className from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  children,
  ...rest
}) {
  const classes = twMerge(
    className(rest.className, "flex items-center border px-3 py-1.5", {
      "bg-blue-500 border-blue-500 text-white": primary,
      "bg-gray-900 border-gray-900 text-white": secondary,
      "bg-green-500 border-green-500 text-white": success,
      "bg-yellow-500 border-yellow-500 text-white": warning,
      "bg-red-500 border-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": primary && outline,
      "text-gray-900": secondary && outline,
      "text-green-500": success && outline,
      "text-yellow-500": warning && outline,
      "text-red-500": danger && outline,
    })
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

// Button.propTypes = {
//   variationChecker: function ({
//     primary,
//     secondary,
//     success,
//     warning,
//     danger,
//   }) {
//     const count =
//       Number(!!primary) +
//       Number(!!secondary) +
//       Number(!!success) +
//       Number(!!warning) +
//       Number(!!danger);
//     if (count > 1) {
//       throw new Error(
//         "Only one of primary, secondary, success, warning or danger should be true!"
//       );
//     }
//   },
// };

export default Button;
