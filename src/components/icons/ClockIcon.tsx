import type { SVGProps } from "react";

const ClockIcon = ({ color = "#14A0FF", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    fill="none"
    {...props}
  >
    <circle cx="11" cy="11" r="11" fill={color} />
    <line
      x1="11"
      y1="11"
      x2="11"
      y2="5.5"
      stroke="#010000"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <line
      x1="11"
      y1="11"
      x2="15"
      y2="14.2"
      stroke="#010000"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="11" cy="11" r="1.2" fill="#010000" />
  </svg>
);

export default ClockIcon;