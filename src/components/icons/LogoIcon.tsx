import { memo } from "react";
import logo from "@/assets/icons/1xbet-logo.svg";

type LogoIconProps = {
  className?: string;
  width?: number;
  height?: number;
};

const LogoIcon = ({ className, width = 100, height = 22 }: LogoIconProps) => (
  <img src={logo} alt="1xBet logo" width={width} height={height} className={className} />
);

export default memo(LogoIcon);