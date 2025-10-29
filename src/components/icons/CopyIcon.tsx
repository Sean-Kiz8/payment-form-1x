import type { SVGProps } from "react";

type CopyIconProps = SVGProps<SVGSVGElement> & {
  color?: string;
};

export default function CopyIcon({ color = "#000000", ...props }: CopyIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19.5 22.5" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M16.5 5.25A2.25 2.25 0 0 0 14.25 3h-12A2.25 2.25 0 0 0 0 5.25v15a2.25 2.25 0 0 0 2.25 2.25h12a2.25 2.25 0 0 0 2.25-2.25zm-1.5 0v15c0 .199-.079.39-.22.53a.75.75 0 0 1-.53.22h-12a.75.75 0 0 1-.53-.22.75.75 0 0 1-.22-.53v-15c0-.199.079-.39.22-.53a.75.75 0 0 1 .53-.22h12c.199 0 .39.079.53.22.141.14.22.331.22.53m4.5 13.5V2.25A2.25 2.25 0 0 0 17.25 0H3.75a.75.75 0 0 0 0 1.5h13.5c.199 0 .39.079.53.22.141.14.22.331.22.53v16.5a.75.75 0 0 0 1.5 0M3.75 16.5h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5m0-3h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5m0-3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5"
        clipRule="evenodd"
      />
    </svg>
  );
}