import type { SVGProps } from "react";

export default function AlertIcon({
  width = 16,
  height = 16,
  color = "#14A0FF",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <circle cx={8} cy={8} r={8} fill={color} />
      <path
        fill="#ffffff"
        d="M8.625 3.75h-1.25a.375.375 0 0 0-.375.375V9a.375.375 0 0 0 .375.375h1.25A.375.375 0 0 0 9 9V4.125a.375.375 0 0 0-.375-.375Zm-.625 7.125a.937.937 0 1 0 0 1.875.937.937 0 0 0 0-1.875Z"
      />
    </svg>
  );
}


