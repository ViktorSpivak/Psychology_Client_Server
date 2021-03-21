import React from "react";
type TProps = {
  isButton?: boolean;
  color?: string;
};
export const Cross = ({ isButton = false, color = "#eb7f21" }: TProps) => {
  const circle = <circle fill="#eb7f21" cx="24" cy="24" r="24"></circle>;
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <title>cross</title>
      <g fill="none" fillRule="evenodd">
        {isButton && circle}
        <path
          d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"
          fill={color}
          fillRule="nonzero"
        ></path>
      </g>
    </svg>
  );
};
