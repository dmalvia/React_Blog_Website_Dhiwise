import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[20px]" };
const variants = {
  outline: {
    gray_900_02: "border border-gray-900_02 border-solid text-gray-900_02",
    blue_gray_400:
      "border border-blue_gray-400 border-solid text-blue_gray-600",
  },
  fill: {
    blue_gray_100: "bg-blue_gray-100 text-blue_gray-700",
    gray_900_02: "bg-gray-900_02 text-white-A700",
    gray_200: "bg-gray-200 text-blue_gray-700",
  },
};
const sizes = { xs: "p-[5px]", sm: "p-2.5", md: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "gray_200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "gray_900_02",
    "blue_gray_400",
    "blue_gray_100",
    "gray_200",
  ]),
};

export { Button };
