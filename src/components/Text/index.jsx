import React from "react";

const sizeClasses = {
  txtGilroySemiBold24: "font-gilroy font-semibold",
  txtGilroyMedium40: "font-gilroy font-medium",
  txtGilroyBold18: "font-bold font-gilroy",
  txtGilroyMedium20Bluegray30001: "font-gilroy font-medium",
  txtGilroySemiBold20: "font-gilroy font-semibold",
  txtGilroyMedium20: "font-gilroy font-medium",
  txtPublicSansLight18: "font-light font-publicsans",
  txtGilroyMedium24: "font-gilroy font-medium",
  txtGilroySemiBold28: "font-gilroy font-semibold",
  txtGilroyRegular14Bluegray700: "font-gilroy font-normal",
  txtGilroyMedium20Gray90001: "font-gilroy font-medium",
  txtMerriweatherBold24: "font-bold font-merriweather",
  txtGilroyBold18WhiteA700: "font-bold font-gilroy",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtGilroySemiBold52: "font-gilroy font-semibold",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtGilroyBold20: "font-bold font-gilroy",
  txtGilroyMedium14WhiteA700: "font-gilroy font-medium",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtGilroySemiBold36: "font-gilroy font-semibold",
  txtGilroyMedium18Bluegray900: "font-gilroy font-medium",
  txtPublicSansLight24: "font-light font-publicsans",
  txtGilroyMedium16WhiteA700: "font-gilroy font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
