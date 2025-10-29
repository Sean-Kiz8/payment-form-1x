import { Badge } from "@/components/ui/badge";
import DropdownArrowIcon from "@/components/icons/DropdownArrowIcon";
import LogoIcon from "@/components/icons/LogoIcon";
import ClockIcon from "@/components/icons/ClockIcon";

export function Header() {
  return (
    <header className="relative w-full rounded-[13px] bg-(--color-header-bg) px-5 py-4 sm:px-[32px] sm:py-0 sm:h-[83px] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-[5px]">
        <span className="text-header">RUS</span>
        <DropdownArrowIcon width={10} height={7} color="#ffffff" />
      </div>

      <div className="order-first flex justify-center sm:order-none sm:absolute sm:left-1/2 sm:-translate-x-1/2">
        <LogoIcon width={100} height={22} color="#ffffff" />
      </div>

      <Badge className="bg-white rounded-[9px] h-[41px] w-[98px] flex items-center gap-[5px] px-[13px] py-[9px] justify-start self-end sm:self-auto">
        <ClockIcon width={22} height={22} color="#14a0ff" />
        <span className="text-header-time">10:00</span>
      </Badge>
    </header>
  );
}
