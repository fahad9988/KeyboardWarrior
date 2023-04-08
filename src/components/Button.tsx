import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  ...rest
}) => {
  const baseClasses =
    "py-2 px-4 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors duration-200";

  let classes = "";

  switch (variant) {
    case "primary":
      classes = `bg-blue-600 text-white hover:bg-blue-700 ${baseClasses} ${className}`;
      break;
    case "secondary":
      classes = `bg-gray-300 text-gray-800 hover:bg-gray-400 ${baseClasses} ${className}`;
      break;
    default:
      classes = `${baseClasses} ${className}`;
      break;
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
